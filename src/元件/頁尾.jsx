/* ============================================================
 * 頁尾.jsx — Footer
 * ============================================================ */

export default function Footer() {
  return (
    <footer style={{
      padding: "32px clamp(24px, 5vw, 80px)",
      borderTop: "1px solid var(--border)",
      maxWidth: 1180, margin: "0 auto",
      position: "relative", zIndex: 1,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 16,
      fontSize: 12, color: "var(--text-light)",
      fontFamily: "'DM Mono', ui-monospace, Menlo, monospace",
      letterSpacing: "0.04em",
    }}>
      <span>© 2026 Iman · Taiwan</span>
      <span>
        Built with{" "}
        <span style={{ color: "var(--red)", fontWeight: 600 }}>React</span>{" "}
        +{" "}
        <span style={{ color: "var(--navy)", fontWeight: 600 }}>Vite</span>
        <span style={{
          display: "inline-block", marginLeft: 8,
          width: 8, height: 12, background: "var(--navy)",
          verticalAlign: "middle",
          animation: "blink 1.1s steps(1) infinite",
        }} />
      </span>
    </footer>
  );
}
