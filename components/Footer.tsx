"use client";

export default function Footer() {
  return (
    <footer
      className="px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="text-sm font-semibold"
          style={{ color: "#374151", letterSpacing: "-0.01em" }}
        >
          Kainalyst
        </span>
      </div>

      <p className="text-xs" style={{ color: "#374151" }}>
        © 2025 Kainalyst. All rights reserved.
      </p>

      <div className="flex items-center gap-5">
        {["개인정보처리방침", "이용약관", "문의하기"].map((l) => (
          <a
            key={l}
            href="#"
            className="text-xs transition-colors"
            style={{ color: "#374151" }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = "#6B7280";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = "#374151";
            }}
          >
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}
