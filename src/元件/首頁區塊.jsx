/* ============================================================
 * 首頁區塊.jsx — Hero (姓名、字幕、CTA、印章圖案、數據條)
 * ============================================================ */

import { FadeIn } from "./通用.jsx";

export default function Hero() {
  return (
    <section id="top" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center",
      padding: "120px clamp(24px, 5vw, 80px) 80px",
      maxWidth: 1180, margin: "0 auto",
      position: "relative", zIndex: 1,
    }}>
      <div className="hero-grid" style={{
        display: "grid", gridTemplateColumns: "1.3fr 1fr",
        gap: 80, alignItems: "center",
      }}>
        <div>
          <FadeIn>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "6px 14px", borderRadius: 999,
              background: "rgba(34,180,110,0.08)",
              border: "1px solid rgba(34,180,110,0.2)",
              fontSize: 12, fontWeight: 600, color: "#1d8050",
              letterSpacing: "0.02em", marginBottom: 26,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%", background: "#22B46E",
                animation: "statusPulse 2s ease-in-out infinite",
              }} />
              Keep Learning and Updating :)
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              fontSize: 12, fontWeight: 600, color: "var(--red)",
              letterSpacing: "0.16em", textTransform: "uppercase",
              marginBottom: 22,
            }}>
              <div style={{ width: 28, height: 1.5, background: "var(--red)" }} />
              Software &amp; Design Student
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="hero-h1" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(48px, 7.4vw, 84px)",
              fontWeight: 700, lineHeight: 1.04,
              margin: "0 0 26px", letterSpacing: "-0.025em",
              color: "var(--navy)", textWrap: "balance",
              textShadow: "2px 3px 3px rgba(0,0,0,0.22)",
            }}>
              Hi, I'm{" "}
              <span style={{ fontStyle: "italic", position: "relative", display: "inline-block" }}>
                Iman
                <span style={{
                  position: "absolute", bottom: 6, left: -2, right: -2,
                  height: 10, background: "var(--red)", opacity: 0.18,
                  transform: "skewX(-6deg)", zIndex: -1,
                }} />
              </span>
              <span style={{ color: "var(--red)" }}>.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{
              fontSize: 17, lineHeight: 1.8, color: "var(--text-muted)",
              maxWidth: 520, margin: 0, textWrap: "pretty",
            }}>
              認為好的設計來自對細節的堅持及對使用者的理解。
              <br />
              正在學習使用code打造有溫度且酷酷的作品。
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36 }}>
              <a href="#works" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "14px 28px", borderRadius: 4,
                background: "var(--navy)", color: "#fff",
                fontSize: 14, fontWeight: 600, textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 30px -10px rgba(26,42,78,0.45)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                查看作品
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "14px 28px", borderRadius: 4,
                background: "transparent", color: "var(--navy)",
                fontSize: 14, fontWeight: 600, textDecoration: "none",
                border: "1.5px solid var(--navy)", letterSpacing: "0.02em",
                transition: "background 0.25s, color 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--navy)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--navy)"; }}
              >聯絡我</a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.25}>
          <div className="hero-mark" style={{
            position: "relative", aspectRatio: "1 / 1",
            maxWidth: 400, marginLeft: "auto",
          }}>
            <div style={{ position: "absolute", inset: 0, border: "1px solid var(--border)", borderRadius: "50%" }} />
            <div style={{
              position: "absolute", inset: "12%",
              border: "1.5px solid var(--navy)", borderRadius: "50%",
              opacity: 0.1, animation: "geoSpinSlow 60s linear infinite",
            }} />
            <svg viewBox="0 0 200 200" style={{ position: "absolute", inset: 0, animation: "geoSpinSlow 120s linear infinite" }}>
              {Array.from({ length: 24 }).map((_, i) => {
                const a = (i / 24) * Math.PI * 2;
                const x1 = 100 + Math.cos(a) * 96;
                const y1 = 100 + Math.sin(a) * 96;
                const x2 = 100 + Math.cos(a) * (i % 6 === 0 ? 88 : 92);
                const y2 = 100 + Math.sin(a) * (i % 6 === 0 ? 88 : 92);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="var(--navy)" strokeWidth={i % 6 === 0 ? 1.2 : 0.6}
                  opacity={i % 6 === 0 ? 0.4 : 0.2} />;
              })}
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(110px, 17vw, 180px)",
                fontWeight: 700, color: "var(--navy)",
                lineHeight: 1,
                display: "inline-flex", alignItems: "baseline",
                textShadow: "4px 6px 14px rgba(0,0,0,0.2)",
              }}>
                H
                <span style={{ position: "relative", display: "inline-block" }}>
                  {"ı"}
                  <span style={{
                    position: "absolute",
                    top: "0.04em", left: "0.11em",
                    width: "0.22em", height: "0.22em",
                    borderRadius: "50%",
                    background: "var(--red)",
                    transformOrigin: "center bottom",
                    animation: "dotHop 2.4s cubic-bezier(.5,0,.3,1) infinite",
                  }} />
                </span>
              </div>
            </div>
            <div style={{ position: "absolute", inset: 0, animation: "geoSpinSlow 18s linear infinite" }}>
              <div style={{
                position: "absolute", top: -4, left: "50%",
                width: 10, height: 10, borderRadius: "50%",
                background: "var(--red)", transform: "translateX(-50%)",
                boxShadow: "0 0 0 4px rgba(200,36,42,0.12)",
              }} />
            </div>
            <div style={{ position: "absolute", inset: "12%", animation: "geoSpinSlow 22s linear infinite reverse" }}>
              <div style={{
                position: "absolute", bottom: -4, left: "50%",
                width: 9, height: 9, borderRadius: "50%",
                background: "var(--navy)", transform: "translateX(-50%)",
                boxShadow: "0 0 0 4px rgba(47,67,114,0.12)",
              }} />
            </div>
            <svg viewBox="0 0 200 200" style={{
              position: "absolute", inset: 0, overflow: "visible",
              animation: "geoSpinSlow 80s linear infinite",
            }}>
              <defs>
                <path id="hero-stamp-path" d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0" />
              </defs>
              <text
                fontFamily="'DM Mono', ui-monospace, Menlo, monospace"
                fontSize="6.4"
                fontWeight="600"
                letterSpacing="3"
                fill="var(--text-light)"
                textAnchor="middle"
              >
                <textPath href="#hero-stamp-path" startOffset="25%">
                  EST · 2025
                </textPath>
              </text>
            </svg>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.4}>
        <div className="timeline-row" style={{
          marginTop: 80, paddingTop: 36,
          borderTop: "1px solid var(--border)",
          position: "relative",
        }}>
          <div style={{
            fontSize: 13, fontWeight: 700, color: "var(--red)",
            letterSpacing: "0.18em", textTransform: "uppercase",
            marginBottom: 26, display: "flex", alignItems: "center", gap: 12,
          }}>
            <span style={{ width: 28, height: 1.5, background: "var(--red)" }} />
            Journey
          </div>
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", top: 6, left: 7, right: 7,
              height: 1, background: "rgba(47,67,114,0.2)", zIndex: 0,
            }} />
            <div className="timeline-nodes" style={{
              display: "flex", justifyContent: "space-between",
              gap: 16, position: "relative", zIndex: 1,
            }}>
              {[
                { date: "2020", label: "~普通OL XD" },
                { date: "2024", label: "接觸程式語言 (覺得寫Code很帥氣!)" },
                { date: "2025", label: "學習軟體設計、自學React" },
                { date: "2026", label: "Side Project 學習中" },
              ].map((it, i, arr) => {
                const isLast = i === arr.length - 1;
                return (
                  <div key={i} style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    gap: 12, flex: 1, minWidth: 0,
                  }}>
                    <div style={{
                      width: 14, height: 14,
                      background: isLast ? "var(--red)" : "var(--bg)",
                      border: "1.5px solid var(--navy)",
                      transform: "rotate(45deg)",
                      animation: isLast ? "diamondBreathe 2.6s ease-in-out infinite" : "none",
                    }} />
                    <div style={{
                      fontFamily: "'DM Mono', ui-monospace, Menlo, monospace",
                      fontSize: 13, color: "var(--red)",
                      letterSpacing: "0.08em", textTransform: "uppercase",
                    }}>{it.date}</div>
                    <div style={{
                      fontSize: 15, fontWeight: 500, color: "var(--navy)",
                      textAlign: "center", lineHeight: 1.45,
                    }}>{it.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </FadeIn>

    </section>
  );
}
