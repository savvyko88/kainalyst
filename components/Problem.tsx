export default function Problem() {
  const pains = [
    {
      label: "2–3시간",
      description: "매일 아침 뉴스, 공시, 섹터 리포트를 훑어보는 데 소요되는 시간",
    },
    {
      label: "신호가 노이즈에 묻힌다",
      description: "중요한 투자 시그널이 관련 없는 헤드라인과 보도자료 사이에 파묻힘",
    },
    {
      label: "커버리지의 공백",
      description: "수작업 기반 프로세스로 인해 중요한 개발 소식을 놓치는 경우가 발생",
    },
  ];

  return (
    <section
      className="py-28 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-4 flex items-center gap-2">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#4F6EF7" }}
          >
            The Problem
          </span>
        </div>

        <h2
          className="text-3xl md:text-5xl font-semibold mb-6 max-w-3xl leading-tight"
          style={{ letterSpacing: "-0.025em", color: "#F9FAFB" }}
        >
          Investors spend hours scanning
          <br />
          <span style={{ color: "#6B7280" }}>
            news, reports, filings, and market signals
          </span>{" "}
          every morning.
        </h2>

        <p
          className="text-base md:text-lg max-w-xl mb-16 leading-relaxed"
          style={{ color: "#6B7280" }}
        >
          현대 투자 전문가는 정보의 홍수 속에 익사하고 있습니다. 진짜 문제는
          데이터에 대한 접근이 아닙니다. 시장이 열리기 전에 수많은 원시 데이터를
          합성하고, 우선순위를 정해 실행 가능한 인텔리전스로 바꾸는 능력입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((p) => (
            <div
              key={p.label}
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="text-2xl font-bold mb-2"
                style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
              >
                {p.label}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
