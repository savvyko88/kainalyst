"use client";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center pt-40 pb-32 px-6 overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(79,110,247,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide"
        style={{
          background: "rgba(79, 110, 247, 0.08)",
          border: "1px solid rgba(79, 110, 247, 0.2)",
          color: "#8ba4ff",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#4F6EF7" }}
        />
        Private Beta — 지금 신청 받는 중
      </div>

      {/* Headline */}
      <h1
        className="text-5xl md:text-7xl font-semibold leading-tight mb-6 max-w-4xl"
        style={{
          letterSpacing: "-0.03em",
          background: "linear-gradient(135deg, #ffffff 0%, #c5d0ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        AI research analyst
        <br />
        for investors.
      </h1>

      {/* Subheadline */}
      <p
        className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
        style={{ color: "#9CA3AF" }}
      >
        관심 기업과 섹터의 투자 인텔리전스를 매일 아침 받아보세요.
        수백 개의 뉴스와 공시를 AI가 분석해 핵심만 전달합니다.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <a
          href="#waitlist"
          className="px-8 py-3.5 rounded-xl text-sm font-semibold transition-all"
          style={{
            background: "linear-gradient(135deg, #4F6EF7, #7C5CFC)",
            color: "#ffffff",
            boxShadow: "0 4px 32px rgba(79,110,247,0.3)",
          }}
        >
          웨이팅 리스트 신청
        </a>
        <a
          href="#product"
          className="px-6 py-3.5 rounded-xl text-sm font-medium transition-all"
          style={{
            color: "#6B7280",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          어떻게 작동하나요? →
        </a>
      </div>

      {/* Client types */}
      <p
        className="mt-12 text-xs tracking-widest uppercase"
        style={{ color: "#374151" }}
      >
        VC · PE · 자산운용사 · 기업 전략팀을 위해 설계되었습니다
      </p>
    </section>
  );
}
