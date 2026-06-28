"use client";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        background: "rgba(11, 17, 32, 0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="text-lg font-semibold tracking-tight"
          style={{ color: "#F9FAFB", letterSpacing: "-0.02em" }}
        >
          Kainalyst
        </span>
      </div>
      <a
        href="#waitlist"
        className="text-sm font-medium px-4 py-2 rounded-lg transition-all"
        style={{
          background: "rgba(79, 110, 247, 0.12)",
          border: "1px solid rgba(79, 110, 247, 0.3)",
          color: "#a8b8ff",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.background = "rgba(79, 110, 247, 0.22)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.background = "rgba(79, 110, 247, 0.12)";
        }}
      >
        웨이팅 리스트 신청
      </a>
    </nav>
  );
}
