"use client";

export default function Features() {
  const features = [
    {
      icon: "◎",
      title: "Personal Watchlist",
      description:
        "커버리지 유니버스를 직접 정의하세요. 특정 기업, 섹터, 지역, 또는 테마 바스켓 단위로 설정할 수 있습니다. 포트폴리오 기업 10곳을 추적하든, 광범위한 섹터를 모니터링하든 투자 전략에 맞게 완전히 커스터마이징됩니다.",
      bullets: [
        "기업 및 섹터 무제한 등록",
        "테마·키워드 필터 설정",
        "팀 공유 워치리스트 지원",
      ],
    },
    {
      icon: "◈",
      title: "Daily AI Brief",
      description:
        "시장이 열리기 전, 수백 개의 소스를 합성한 구조화된 브리핑을 매일 아침 받아보세요. Kainalyst가 대신 읽고 분석해 드립니다. 내 커버리지 유니버스와 관련된 것만 투자 관련도 순으로 정리해 전달합니다.",
      bullets: [
        "매일 오전 7시 이전 배송",
        "투자 관련도 순 정렬",
        "원문 링크 및 발췌문 포함",
      ],
    },
    {
      icon: "✦",
      title: "Investment Implications",
      description:
        "각 시그널에는 AI가 생성한 투자 시사점이 함께 제공됩니다. 해당 이슈가 내 투자 thesis, 밸류에이션, 포지셔닝에 어떤 의미를 갖는지 간결하게 분석합니다. 단순 뉴스 집계가 아닌 진짜 분석적 맥락을 제공합니다.",
      bullets: [
        "Thesis 수준의 영향도 평가",
        "경쟁 구도 맥락 포함",
        "투자자 유형별 커스터마이징",
      ],
    },
  ];

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
            Core Features
          </span>
        </div>

        <h2
          className="text-3xl md:text-5xl font-semibold mb-16 max-w-2xl leading-tight"
          style={{ letterSpacing: "-0.025em", color: "#F9FAFB" }}
        >
          Everything your team needs to stay ahead.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-7 rounded-2xl flex flex-col gap-4 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(79,110,247,0.25)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(79,110,247,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.025)";
              }}
            >
              <div className="text-2xl" style={{ color: "#4F6EF7" }}>
                {f.icon}
              </div>

              <div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#F9FAFB", letterSpacing: "-0.015em" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {f.description}
                </p>
              </div>

              <ul
                className="flex flex-col gap-2 mt-auto pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                {f.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "#9CA3AF" }}
                  >
                    <span style={{ color: "#4F6EF7", fontSize: "0.6rem" }}>●</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
