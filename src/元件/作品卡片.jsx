/* ============================================================
 * 作品卡片.jsx — 單一作品的卡片 (featured 與一般)
 * ============================================================ */

import { useState } from "react";
import { FadeIn } from "./通用.jsx";
import { THUMBS } from "./作品縮圖.jsx";

export default function ProjectCard({ no, title, tag, desc, tech, thumb, delay, featured, link }) {
  const [hovered, setHovered] = useState(false);
  const Thumb = THUMBS[thumb];

  const card = (
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          background: "#fff",
          borderRadius: 12,
          border: "1px solid var(--border)",
          cursor: link ? "pointer" : "default",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 24px 56px -20px rgba(26,42,78,0.22)"
            : "0 2px 8px -2px rgba(26,42,78,0.06)",
          transition: "transform 0.45s cubic-bezier(.22,1,.36,1), box-shadow 0.45s cubic-bezier(.22,1,.36,1)",
          overflow: "hidden",
          display: "flex",
          flexDirection: featured ? "row" : "column",
        }}
      >
        <div style={{
          position: "relative",
          width: featured ? "55%" : "100%",
          aspectRatio: featured ? "auto" : "320 / 200",
          background: "#F6F5F1",
          overflow: "hidden",
          borderBottom: featured ? "none" : "1px solid var(--border)",
          borderRight: featured ? "1px solid var(--border)" : "none",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.7s cubic-bezier(.22,1,.36,1)",
          }}>
            {Thumb && <Thumb hovered={hovered} />}
          </div>
          <div style={{
            position: "absolute", top: 12, left: 14,
            fontFamily: "'Playfair Display', serif", fontStyle: "italic",
            fontSize: 14, color: "var(--navy)", opacity: 0.5, letterSpacing: "0.04em",
          }}>№ {no}</div>
          <div style={{
            position: "absolute", top: 8, right: 8,
            width: 28, height: 28,
            borderTop: "1px solid var(--red)", borderRight: "1px solid var(--red)",
            opacity: hovered ? 0.7 : 0.25, transition: "opacity .4s",
          }} />
        </div>

        <div style={{
          padding: featured ? "28px 32px" : "22px 24px 24px",
          flex: 1, display: "flex", flexDirection: "column",
        }}>
          <div style={{
            display: "inline-flex", alignSelf: "flex-start",
            padding: "4px 12px", borderRadius: 3,
            fontSize: 11, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--red)", background: "rgba(200,36,42,0.08)",
            marginBottom: 12,
          }}>{tag}</div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: featured ? 26 : 20,
            fontWeight: 700, color: "var(--navy)",
            margin: "0 0 8px", letterSpacing: "-0.01em",
          }}>{title}</h3>
          <p style={{
            fontSize: 14, lineHeight: 1.7, color: "var(--text-muted)",
            margin: 0, textWrap: "pretty",
          }}>{desc}</p>

          {tech && tech.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
              {tech.map(t => (
                <span key={t} style={{
                  fontSize: 11, fontWeight: 500,
                  fontFamily: "'DM Mono', ui-monospace, Menlo, monospace",
                  color: "var(--text-muted)",
                  background: "rgba(26,42,78,0.05)",
                  padding: "3px 8px", borderRadius: 3,
                }}>{t}</span>
              ))}
            </div>
          )}

          {link && (
            <div style={{
              marginTop: "auto", paddingTop: 18,
              display: "flex", alignItems: "center", gap: 8,
              color: "var(--red)", fontSize: 13, fontWeight: 600,
            }}>
              <span>View on GitHub</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{
                  transform: hovered ? "translateX(4px)" : "translateX(0)",
                  transition: "transform .35s cubic-bezier(.22,1,.36,1)",
                }}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </div>
      </article>
  );

  return (
    <FadeIn delay={delay}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}>
          {card}
        </a>
      ) : card}
    </FadeIn>
  );
}
