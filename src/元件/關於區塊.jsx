/* ============================================================
 * 關於區塊.jsx — About 區段 (引言、現在狀態卡片)
 * ============================================================ */

import { FadeIn, SectionHead } from "./通用.jsx";

export default function About() {
  return (
    <section id="about" className="section-pad" style={{
      padding: "120px clamp(24px, 5vw, 80px)",
      maxWidth: 1180, margin: "0 auto",
      position: "relative", zIndex: 1,
    }}>
      <SectionHead kicker="About me" title="關於我" />
      <div className="grid-2" style={{
        display: "grid", gridTemplateColumns: "1.2fr 1fr",
        gap: 56, alignItems: "start",
      }}>
        <FadeIn delay={0.05}>
          <div>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 22, fontStyle: "italic", lineHeight: 1.55,
              color: "var(--navy)", margin: "0 0 24px",
              textWrap: "balance",
            }}>
              「腦中天馬行空到不行的想法超多，100個可能只有1個能實作XD」
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.9, color: "var(--text-muted)", margin: 0, textWrap: "pretty" }}>
              我是 Iman，2025 年開始就讀軟體設計相關科系，
              對前端開發與UI設計充滿熱情。
              目前自學 React ，下一步想把幾個 side project 慢慢實做成可以拿出來見人的作品XD。
              100%貓奴，是個出門全身細胞就會抗拒的宅女，最喜歡早上泡咖啡撸貓的片刻時光。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            style={{
              padding: "28px 28px 26px",
              borderRadius: 8, background: "#fff",
              border: "1px solid var(--border)",
              position: "relative", overflow: "hidden",
              transition: "transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s cubic-bezier(.22,1,.36,1), border-color .35s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 18px 36px -16px rgba(26,42,78,0.28)";
              e.currentTarget.style.borderColor = "rgba(47,67,114,0.4)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: 48, height: 48,
              borderLeft: "1px solid var(--red)",
              borderBottom: "1px solid var(--red)",
              opacity: 0.3,
            }} />
            <div style={{
              fontSize: 11, fontWeight: 700, color: "var(--red)",
              letterSpacing: "0.18em", textTransform: "uppercase",
              marginBottom: 18,
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#22B46E",
                animation: "statusPulse 2s ease-in-out infinite",
              }} />
              Status
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["Location", "新北市"],
                ["Education", "軟體設計・在學中"],
                ["Learning", "React + Vite"],
                ["Loving", "Stardew Valley + Pixel ART"],
              ].map(([k, v]) => (
                <div key={k} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "baseline",
                  gap: 12, paddingBottom: 12,
                  borderBottom: "1px dashed rgba(26,42,78,0.1)",
                }}>
                  <span style={{
                    fontSize: 11,
                    fontFamily: "'DM Mono', ui-monospace, Menlo, monospace",
                    color: "var(--text-light)",
                    letterSpacing: "0.08em", textTransform: "uppercase",
                  }}>{k}</span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "var(--navy)", textAlign: "right" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
