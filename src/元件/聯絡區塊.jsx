/* ============================================================
 * 聯絡區塊.jsx — Contact 區段 (深藍卡片 + 信箱複製按鈕)
 * ============================================================ */

import { useState } from "react";
import { FadeIn } from "./通用.jsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "iman@example.com";
  const copy = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{
      padding: "140px clamp(24px, 5vw, 80px) 120px",
      maxWidth: 1180, margin: "0 auto",
      position: "relative", zIndex: 1,
    }}>
      <div style={{
        background: "var(--navy)",
        borderRadius: 16,
        padding: "clamp(40px, 6vw, 80px) clamp(28px, 5vw, 72px)",
        position: "relative", overflow: "hidden", color: "#fff",
      }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, border: "1px solid rgba(255,255,255,0.12)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: 20, right: 20, width: 140, height: 140, border: "1px solid rgba(200,36,42,0.4)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: -40, left: -40, width: 160, height: 160, border: "1px solid rgba(255,255,255,0.08)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "50%", right: 60, width: 14, height: 14, background: "var(--red)", transform: "translateY(-50%) rotate(45deg)" }} />

        <FadeIn>
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            fontSize: 12, fontWeight: 700, color: "var(--red)",
            letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 22,
          }}>
            <span style={{ width: 28, height: 1.5, background: "var(--red)" }} />
            04 · Contact
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 5.5vw, 56px)",
            fontWeight: 700, margin: "0 0 22px",
            lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "#fff", textWrap: "balance",
            maxWidth: 720, position: "relative", zIndex: 1,
          }}>
            Let's build something{" "}
            <span style={{ fontStyle: "italic", color: "var(--red)" }}>good</span>
            {" "}together.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{
            fontSize: 16, lineHeight: 1.8,
            color: "rgba(255,255,255,0.7)",
            margin: "0 0 36px", maxWidth: 540,
            position: "relative", zIndex: 1,
          }}>
            如果想做有趣的東西，歡迎寫信給我。我通常會在一兩天內回覆。
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", position: "relative", zIndex: 1 }}>
            <a href={`mailto:${email}`} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "14px 26px", borderRadius: 4,
              background: "var(--red)", color: "#fff",
              fontSize: 14, fontWeight: 600, textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 34px -10px rgba(200,36,42,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              寄信給我
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <button onClick={copy} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "14px 22px", borderRadius: 4,
              background: "transparent", color: "#fff",
              fontSize: 14, fontWeight: 500,
              fontFamily: "'DM Mono', ui-monospace, Menlo, monospace",
              border: "1.5px solid rgba(255,255,255,0.25)",
              cursor: "pointer", letterSpacing: "0.02em",
              transition: "border-color .25s, background .25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22B46E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  已複製
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  {email}
                </>
              )}
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 18,
            marginTop: 40, paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            position: "relative", zIndex: 1,
          }}>
            {[
              ["GitHub", "github.com/iman"],
              ["Instagram", "@iman.designs"],
              ["Threads", "@iman"],
            ].map(([label, handle]) => (
              <a key={label} href="#" className="linkUnderline" style={{
                color: "#fff", textDecoration: "none", fontSize: 13,
                display: "flex", alignItems: "baseline", gap: 8, opacity: 0.85,
              }}>
                <span style={{
                  fontSize: 10, color: "var(--red)", letterSpacing: "0.1em",
                  textTransform: "uppercase", fontWeight: 700,
                }}>{label}</span>
                <span style={{
                  fontFamily: "'DM Mono', ui-monospace, Menlo, monospace",
                  fontSize: 12, opacity: 0.7,
                }}>{handle}</span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
