"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      className="py-32 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(79,110,247,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative">
          <div
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide"
            style={{
              background: "rgba(79, 110, 247, 0.08)",
              border: "1px solid rgba(79, 110, 247, 0.2)",
              color: "#8ba4ff",
            }}
          >
            Private Beta
          </div>

          <h2
            className="text-4xl md:text-6xl font-semibold mb-5 leading-tight"
            style={{
              letterSpacing: "-0.03em",
              background: "linear-gradient(135deg, #ffffff 0%, #c5d0ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Join the private beta.
          </h2>

          <p
            className="text-base md:text-lg mb-10 leading-relaxed max-w-lg mx-auto"
            style={{ color: "#6B7280" }}
          >
            현재 소수의 기관 투자자 및 리서치 팀을 선별하여 온보딩하고 있습니다.
            지금 신청하시면 제품 방향에 직접 영향을 미치고 얼리 액세스 혜택을 받으실 수 있습니다.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@firm.com"
                required
                className="px-4 py-3.5 rounded-xl text-sm flex-1 max-w-xs outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#F9FAFB",
                }}
                onFocus={(e) => {
                  e.target.style.border = "1px solid rgba(79,110,247,0.5)";
                }}
                onBlur={(e) => {
                  e.target.style.border = "1px solid rgba(255,255,255,0.1)";
                }}
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: "linear-gradient(135deg, #4F6EF7, #7C5CFC)",
                  color: "#ffffff",
                  boxShadow: "0 4px 24px rgba(79,110,247,0.3)",
                }}
              >
                액세스 신청
              </button>
            </form>
          ) : (
            <div
              className="py-4 px-6 rounded-xl inline-flex items-center gap-2 text-sm font-medium"
              style={{
                background: "rgba(79,110,247,0.1)",
                border: "1px solid rgba(79,110,247,0.2)",
                color: "#a8b8ff",
              }}
            >
              <span>✓</span>
              신청이 완료되었습니다. 곧 연락드리겠습니다.
            </div>
          )}

          <p
            className="mt-5 text-xs"
            style={{ color: "#374151" }}
          >
            스팸 없음. 언제든지 구독 해지 가능.
          </p>
        </div>
      </div>
    </section>
  );
}
