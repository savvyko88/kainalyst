export default function Solution() {
  return (
    <section
      id="product"
      className="py-28 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Left text */}
        <div className="flex-1">
          <div className="mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#4F6EF7" }}
            >
              The Solution
            </span>
          </div>

          <h2
            className="text-3xl md:text-5xl font-semibold mb-6 leading-tight"
            style={{ letterSpacing: "-0.025em", color: "#F9FAFB" }}
          >
            Kainalyst turns your watchlist into a daily AI research brief.
          </h2>

          <p
            className="text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "#6B7280" }}
          >
            관심 기업, 섹터, 테마를 설정하면 끝입니다. Kainalyst가 공시,
            실적 발표, 규제 동향, 뉴스를 실시간으로 모니터링하고, 매일 아침
            간결하게 우선순위가 정리된 브리핑을 이메일로 전달합니다.
          </p>

          <p
            className="text-base leading-relaxed"
            style={{ color: "#6B7280" }}
          >
            각 항목에는 투자 관점의 시사점이 포함되어 있어, 첫 번째 미팅 전에
            이미 무엇이 중요한지, 그리고 왜 중요한지 파악할 수 있습니다.
          </p>
        </div>

        {/* Right visual */}
        <div className="flex-1 w-full">
          <div
            className="rounded-2xl p-6 relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 0 60px rgba(79,110,247,0.07)",
            }}
          >
            <div className="flex flex-col gap-3">
              {[
                { icon: "◈", label: "Your Watchlist", sub: "기업 · 섹터 · 테마" },
                { icon: "⟳", label: "AI Synthesis Engine", sub: "공시 · 뉴스 · 실적 · 매크로" },
                { icon: "✦", label: "Daily Brief", sub: "우선순위 정렬 · 맥락 제공 · 즉시 활용 가능" },
              ].map((item, i) => (
                <div key={i}>
                  <div
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span
                      className="text-xl mt-0.5"
                      style={{ color: "#4F6EF7" }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <div
                        className="text-sm font-semibold mb-0.5"
                        style={{ color: "#F9FAFB" }}
                      >
                        {item.label}
                      </div>
                      <div className="text-xs" style={{ color: "#6B7280" }}>
                        {item.sub}
                      </div>
                    </div>
                  </div>
                  {i < 2 && (
                    <div className="flex justify-center py-1">
                      <div
                        className="w-px h-4"
                        style={{ background: "rgba(79,110,247,0.25)" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
