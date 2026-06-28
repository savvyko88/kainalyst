import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import Anthropic from "@anthropic-ai/sdk";
import nodemailer from "nodemailer";

export const maxDuration = 60;

async function saveToSheets(email: string, industries: string, companies: string) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "시트1!A:C",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[email, industries, companies]],
    },
  });
}

async function generateBrief(industries: string, companies: string): Promise<string> {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const today = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  const prompt = `당신은 20년차 프로페셔널 베테랑 애널리스트입니다. 오늘은 ${today}입니다.

아래 참고 사이트를 포함한 국내외 주요 경제·투자 사이트에서 지난 24시간 동안 발행된 기사 중 아래 관심 산업과 관심 기업에 관련된 핵심 기사 20개를 선별해 Kainalyst Daily Brief를 작성하세요.

관심 산업: ${industries}
관심 기업: ${companies}

참고 사이트: 플래텀, 벤처스퀘어, 비석세스, 더벨, 한경코리아마켓, 한국경제, 매일경제, CB Insights, Visual Capitalist, TechCrunch, Crunchbase, Business Insider, MIT Technology Review, Reuters, Wall Street Journal

작성 지침:
1. BCG·맥킨지 컨설턴트 수준의 세련되고 프로페셔널한 형식
2. PE·VC 투자회사 직원 대상 — 각 기사마다 투자자에게 필요한 한 문장 시사점 포함
3. 브리핑 제목: Kainalyst Daily Brief
4. 본문 전 Executive Summary 섹션: 핵심 안건 3개를 1~2문장으로 요약
5. 각 기사: 제목 / 부제 / 내용(5~7문장) 형식
6. 마지막에 Closing Note: 핵심 안건 1~2개 요약 + PE 투자회사 입장의 점검 포인트

아래 HTML 형식으로 작성하세요 (이메일로 전송됩니다):

전체를 완전한 HTML 문서로 작성해주세요. 다음 스타일 가이드를 따르세요:
- 전체 배경: #0B1120
- 컨테이너: max-width 680px, margin auto, padding 40px
- 브리핑 타이틀: 흰색, 36px, bold, 중앙 정렬
- 날짜/발행 정보: #6B7280, 14px, 중앙 정렬
- Executive Summary 박스: #1a2540 배경, #4F6EF7 왼쪽 4px border, padding 20px, border-radius 12px
- 섹션 구분선: #1F2937
- 기사 제목: #4F6EF7, 20px, bold
- 기사 부제: #9CA3AF, 14px, italic
- 기사 본문: #D1D5DB, 15px, line-height 1.7
- 투자 시사점: #1e3a5f 배경, #4F6EF7 왼쪽 3px border, padding 12px 16px, #93C5FD 텍스트
- Closing Note 박스: #111827 배경, #7C5CFC 왼쪽 4px border, padding 24px, border-radius 12px
- 하단 푸터: Kainalyst 로고, #374151 텍스트`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 8000,
    tools: [{ type: "web_search_20250305" as "web_search_20250305", name: "web_search" }],
    messages: [{ role: "user", content: prompt }],
  });

  const html = response.content
    .filter((b) => b.type === "text")
    .map((b) => (b as { type: "text"; text: string }).text)
    .join("\n");

  return html;
}

async function sendEmail(to: string, htmlContent: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const today = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  await transporter.sendMail({
    from: `"Kainalyst Research" <${process.env.GMAIL_USER}>`,
    to,
    subject: `Kainalyst Daily Brief — ${today}`,
    html: htmlContent,
  });
}

export async function POST(req: NextRequest) {
  try {
    const { email, industries, companies } = await req.json();

    // 1. Google Sheets 저장
    await saveToSheets(email, industries, companies);

    // 2. AI 브리핑 생성
    const briefHtml = await generateBrief(industries, companies);

    // 3. 이메일 발송
    await sendEmail(email, briefHtml);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
