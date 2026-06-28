const sectors = [
  {
    name: "Artificial Intelligence",
    color: "#4F6EF7",
    items: [
      {
        headline: "Anthropic, 61.5억 달러 밸류에이션으로 35억 달러 Series E 유치",
        why: "매크로 불확실성에도 프론티어 AI에 대한 기관 투자 수요가 지속되고 있음을 보여줍니다. 컴퓨트 접근성과 인재 확보 경쟁이 한층 심화되고, 엔터프라이즈 계약 사이클을 앞당길 가능성이 높습니다.",
      },
      {
        headline: "Microsoft, Azure 데이터 파이프라인 툴링에 Copilot 통합",
        why: "데이터 집약적 산업군의 엔터프라이즈 AI 채택에서의 해자를 더욱 공고히 합니다. 번들링 가속화로 독립 ML 플랫폼 벤더들에게 의미 있는 헤드윈드가 될 수 있습니다.",
      },
    ],
  },
  {
    name: "Defense & Aerospace",
    color: "#7C5CFC",
    items: [
      {
        headline: "미 국방부, 24억 달러 규모 자율 드론 물류 계약 발주",
        why: "대규모 무인 물류 전환을 공식화하는 계약입니다. 기존 자율성 스택을 보유한 주요 방산 업체에 유리하고, 전통 회전익 공급사에는 실질적인 역풍이 될 전망입니다.",
      },
      {
        headline: "NATO 회원국, 드론 수출 기준 통일 합의",
        why: "동맹국 시장 확대의 규제 장벽을 낮춥니다. 미국 유통 파트너십을 모색하는 유럽 드론 제조사들에게 단기 촉매로 작용할 수 있습니다.",
      },
    ],
  },
  {
    name: "Nuclear Energy",
    color: "#6C8EF7",
    items: [
      {
        headline: "NRC, 최초 소형모듈원자로(SMR) 상업용 설계 승인",
        why: "SMR 개발사의 프로젝트 파이낸싱 문을 여는 역사적 규제 이정표입니다. 하반기 중 유틸리티 오프테이크 계약과 프로젝트 발표가 잇따를 것으로 예상됩니다.",
      },
      {
        headline: "Microsoft, 데이터센터 전력 공급용 20년 핵에너지 PPA 체결",
        why: "원자력을 AI 인프라의 핵심 전력원으로 공식화합니다. 전력망 한계에 직면한 하이퍼스케일러들의 후속 계약 체결이 뒤따를 가능성이 높습니다.",
      },
    ],
  },
  {
    name: "Semiconductors",
    color: "#4F8AF7",
    items: [
      {
        headline: "TSMC, 전년 대비 34% 매출 성장 기록 — 컨센서스 상회 가이던스 제시",
        why: "AI 주도 수요가 공급망 전반에서 가속화되고 있음을 확인합니다. 첨단 패키징, HBM 공급사, 반도체 장비 업종에 긍정적 시사점을 제공합니다.",
      },
      {
        headline: "ASML EUV 수주 잔고, 공급 제약으로 2027년까지 연장",
        why: "구조적 공급 병목이 프리미엄 가격 및 마진을 지지할 전망입니다. 급격한 생산능력 확대를 계획하는 파운드리의 상방을 제한하고, 기존 EUV 장비의 전략적 가치를 높입니다.",
      },
    ],
  },
  {
    name: "Robotics",
    color: "#7C6CF7",
    items: [
      {
        headline: "Figure AI, BMW 조립 라인에 휴머노이드 로봇 첫 대규모 배치",
        why: "프리미엄 OEM에 의한 최초의 대규모 산업용 휴머노이드 배치 사례입니다. 상업적 규모에서 기술이 검증되며 자동차 제조 전반의 채택 타임라인을 앞당길 가능성이 있습니다.",
      },
      {
        headline: "Boston Dynamics Atlas, 완전 전동 플랫폼으로의 전환 완료",
        why: "운영 비용을 낮추고 배치 유연성을 높입니다. Hyundai 내부 용도를 넘어 확장을 모색하는 가운데 라이선싱 또는 JV 구조를 주목할 필요가 있습니다.",
      },
    ],
  },
];

export default function DailyBriefPreview() {
  return (
    <section
      className="py-28 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-4">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#4F6EF7" }}
          >
            Sample Brief
          </span>
        </div>

        <h2
          className="text-3xl md:text-5xl font-semibold mb-3 leading-tight"
          style={{ letterSpacing: "-0.025em", color: "#F9FAFB" }}
        >
          What your morning looks like.
        </h2>
        <p
          className="text-base mb-12 max-w-lg leading-relaxed"
          style={{ color: "#6B7280" }}
        >
          실제 브리핑 샘플입니다. 매일 오전 7시 이전, 섹터별로 구조화된 동일한
          형식으로 이메일 인박스에 도착합니다.
        </p>

        {/* Email mock */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.02)",
            boxShadow: "0 0 80px rgba(79,110,247,0.06)",
          }}
        >
          {/* Email header bar */}
          <div
            className="flex items-center gap-2 px-5 py-3"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />
            </div>
            <div
              className="flex-1 text-center text-xs"
              style={{ color: "#6B7280" }}
            >
              Kainalyst Daily Brief · 2025년 6월 28일 토요일
            </div>
          </div>

          {/* Email meta */}
          <div
            className="px-6 py-4"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-semibold mb-0.5" style={{ color: "#F9FAFB" }}>
                  Kainalyst Research
                </div>
                <div className="text-xs" style={{ color: "#6B7280" }}>
                  받는 사람: you@firm.com
                </div>
              </div>
              <div className="text-xs" style={{ color: "#374151" }}>
                오전 7:02
              </div>
            </div>
            <div
              className="mt-3 text-base font-semibold"
              style={{ color: "#E5E7EB", letterSpacing: "-0.01em" }}
            >
              오늘의 브리핑 — AI · 방산 · 원자력 · 반도체 · 로보틱스
            </div>
          </div>

          {/* Sectors */}
          <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
            {sectors.map((sector) => (
              <div key={sector.name} className="px-6 py-5">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: sector.color }}
                  />
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: sector.color }}
                  >
                    {sector.name}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {sector.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5">
                      <div
                        className="text-sm font-medium leading-snug"
                        style={{ color: "#E5E7EB" }}
                      >
                        {item.headline}
                      </div>
                      <div
                        className="text-xs leading-relaxed pl-3"
                        style={{
                          color: "#6B7280",
                          borderLeft: `2px solid ${sector.color}30`,
                        }}
                      >
                        <span
                          className="font-semibold mr-1"
                          style={{ color: sector.color + "bb" }}
                        >
                          투자 시사점:
                        </span>
                        {item.why}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div
            className="px-6 py-4 text-xs"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.05)",
              color: "#374151",
            }}
          >
            Kainalyst · 내 워치리스트 기반 맞춤 브리핑 · 구독 해지
          </div>
        </div>
      </div>
    </section>
  );
}
