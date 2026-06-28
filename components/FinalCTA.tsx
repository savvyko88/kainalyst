"use client";

import { useState } from "react";

type Step = "email" | "details" | "done";

export default function FinalCTA() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [industries, setIndustries] = useState("");
  const [companies, setCompanies] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStep("details");
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industries || !companies) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, industries, companies }),
      });
      if (!res.ok) throw new Error();
      setStep("done");
    } catch {
      setError("오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="py-32 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Background glow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(79,110,247,0.12) 0%, transparent 70%)",
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

          {/* Step indicator */}
          {step !== "done" && (
            <div className="flex items-center justify-center gap-2 mb-10">
              {["email", "details"].map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-all"
                    style={{
                      background: step === s || (s === "email" && step === "details")
                        ? "linear-gradient(135deg, #4F6EF7, #7C5CFC)"
                        : "rgba(255,255,255,0.06)",
                      color: step === s || (s === "email" && step === "details")
                        ? "#fff"
                        : "#6B7280",
                    }}
                  >
                    {s === "email" && step === "details" ? "✓" : i + 1}
                  </div>
                  {i === 0 && (
                    <div
                      className="w-8 h-px"
                      style={{
                        background: step === "details"
                          ? "rgba(79,110,247,0.5)"
                          : "rgba(255,255,255,0.08)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Step 1: Email */}
          {step === "email" && (
            <form
              onSubmit={handleEmailSubmit}
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
          )}

          {/* Step 2: Industries + Companies */}
          {step === "details" && (
            <form
              onSubmit={handleFinalSubmit}
              className="flex flex-col gap-4 max-w-md mx-auto text-left"
            >
              <div>
                <label
                  className="block text-xs font-semibold mb-2 tracking-wide"
                  style={{ color: "#9CA3AF" }}
                >
                  관심 산업
                </label>
                <input
                  type="text"
                  value={industries}
                  onChange={(e) => setIndustries(e.target.value)}
                  placeholder="예: AI, 반도체, 방산, 원자력"
                  required
                  className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all"
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
              </div>

              <div>
                <label
                  className="block text-xs font-semibold mb-2 tracking-wide"
                  style={{ color: "#9CA3AF" }}
                >
                  관심 기업
                </label>
                <input
                  type="text"
                  value={companies}
                  onChange={(e) => setCompanies(e.target.value)}
                  placeholder="예: NVIDIA, TSMC, 한화에어로스페이스"
                  required
                  className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all"
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
              </div>

              {error && (
                <p className="text-xs text-center" style={{ color: "#F87171" }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading || !industries || !companies}
                className="w-full py-4 rounded-xl text-sm font-semibold transition-all mt-2"
                style={{
                  background:
                    loading || !industries || !companies
                      ? "rgba(79,110,247,0.3)"
                      : "linear-gradient(135deg, #4F6EF7, #7C5CFC)",
                  color: "#ffffff",
                  boxShadow:
                    loading || !industries || !companies
                      ? "none"
                      : "0 4px 24px rgba(79,110,247,0.3)",
                  cursor: loading || !industries || !companies ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "제출 중..." : "Kainalyst News Briefing 시작하기"}
              </button>
            </form>
          )}

          {/* Step 3: Done */}
          {step === "done" && (
            <div
              className="py-6 px-8 rounded-2xl flex flex-col items-center gap-3"
              style={{
                background: "rgba(79,110,247,0.08)",
                border: "1px solid rgba(79,110,247,0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ background: "rgba(79,110,247,0.15)", color: "#a8b8ff" }}
              >
                ✓
              </div>
              <p className="text-sm font-semibold" style={{ color: "#a8b8ff" }}>
                신청이 완료되었습니다.
              </p>
              <p className="text-xs" style={{ color: "#6B7280" }}>
                빠른 시일 내에 {email} 로 연락드리겠습니다.
              </p>
            </div>
          )}

          {step === "email" && (
            <p className="mt-5 text-xs" style={{ color: "#374151" }}>
              스팸 없음. 언제든지 구독 해지 가능.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
