import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";
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
  const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
    defaultHeaders: {
      "anthropic-beta": "web-search-2025-03-05",
    },
  });

  const today = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  const prompt = `당신은 20년차 프로페셔널 베테랑 애널리스트입니다. 오늘은 ${today}입니다.

아래 참고 사이트를 포함한 국내외 주요 경제·투자 사이트에서 지난 24시간 동안 발행된 기사 중 아래 관심 산업과 관심 기업에 관련된 핵심 기사 10개를 선별해 Kainalyst Daily Brief를 작성하세요.

관심 산업: ${industries}
관심 기업: ${companies}

참고 사이트: 한국경제, 매일경제, 더벨, TechCrunch, Reuters, Wall Street Journal, Bloomberg

작성 지침:
1. BCG·맥킨지 컨설턴트 수준의 세련되고 프로페셔널한 형식
2. PE·VC 투자회사 직원 대상 — 각 기사마다 투자자 시사점 한 문장 포함
3. 브리핑 제목: Kainalyst Daily Brief
4. 본문 전 Executive Summary: 핵심 안건 3개를 1~2문장으로 요약
5. 각 기사: 제목 / 부제 / 내용(3~5문장) 형식
6. 마지막에 Closing Note: 핵심 1~2개 + PE 투자회사 점검 포인트

완전한 HTML로 작성 (이메일 전송용):
- 전체 배경: #0B1120
- 컨테이너: max-width 680px, margin auto, padding 40px, font-family Arial sans-serif
- 브리핑 타이틀: #ffffff, 28px, bold, 중앙 정렬
- 날짜: #6B7280, 13px, 중앙 정렬, margin-bottom 32px
- Executive Summary: #1a2540 배경, border-left 4px solid #4F6EF7, padding 16px, border-radius 8px, color #E5E7EB
- 기사 구분: border-top 1px solid #1F2937, padding-top 20px, margin-top 20px
- 기사 제목: #4F6EF7, 16px, bold, margin-bottom 4px
- 기사 부제: #9CA3AF, 12px, italic, margin-bottom 8px
- 기사 본문: #D1D5DB, 14px, line-height 1.7
- 시사점: background #1e3a5f, border-left 3px solid #4F6EF7, padding 8px 12px, color #93C5FD, border-radius 4px, margin-top 8px, font-size 13px
- Closing Note: #111827 배경, border-left 4px solid #7C5CFC, padding 20px, border-radius 8px, color #E5E7EB, margin-top 32px
- 푸터: color #374151, font-size 11px, text-align center, margin-top 32px, padding-top 16px, border-top 1px solid #1F2937`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 6000,
    tools: [
      {
        type: "web_search_20250305" as "web_search_20250305",
        name: "web_search",
      },
    ],
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
      pass: process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, ""),
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

async function generateAndSend(email: string, industries: string, companies: string) {
  try {
    const briefHtml = await generateBrief(industries, companies);
    console.log("✅ 브리핑 생성 완료, 길이:", briefHtml.length);
    await sendEmail(email, briefHtml);
    console.log("✅ 이메일 발송 완료 →", email);
  } catch (err) {
    console.error("❌ 브리핑/이메일 오류:", err);
  }
}

export async function POST(req: NextRequest) {
  const { email, industries, companies } = await req.json();

  // Step 1: Google Sheets 저장
  try {
    await saveToSheets(email, industries, companies);
    console.log("✅ Sheets 저장 완료");
  } catch (err) {
    console.error("❌ Sheets 저장 실패:", err);
    return NextResponse.json({ success: false, step: "sheets" }, { status: 500 });
  }

  // Step 2: 브리핑 생성 + 이메일 발송은 백그라운드에서 처리
  after(async () => {
    await generateAndSend(email, industries, companies);
  });

  // 즉시 성공 응답 반환
  return NextResponse.json({ success: true });
}
