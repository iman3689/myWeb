/* ============================================================
 * 技能區塊.jsx — Skills 區段 (折疊式手風琴)
 * ============================================================ */

import { useState } from "react";
import { FadeIn, SectionHead } from "./通用.jsx";
import { SKILL_GROUPS } from "./資料.jsx";

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="skills" className="section-pad" style={{
      padding: "120px clamp(24px, 5vw, 80px)",
      maxWidth: 1180, margin: "0 auto",
      position: "relative", zIndex: 1,
    }}>
      <SectionHead kicker="Skills" title="目前熟悉的工具" />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {SKILL_GROUPS.map((group, gi) => {
          const open = openIndex === gi;
          return (
            <FadeIn key={group.label} delay={gi * 0.08}>
              <SkillAccordion
                index={gi}
                group={group}
                open={open}
                onToggle={() => setOpenIndex(open ? -1 : gi)}
              />
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

function SkillAccordion({ index, group, open, onToggle }) {
  return (
    <div style={{
      borderTop: "1px solid rgba(26,42,78,0.12)",
      borderBottom: index === 2 ? "1px solid rgba(26,42,78,0.12)" : "none",
    }}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 16,
          padding: "22px 4px", background: "transparent", border: "none",
          cursor: "pointer", textAlign: "left", color: "var(--navy)",
        }}
      >
        <h3 style={{
          fontSize: 16, fontWeight: 700, color: "var(--navy)",
          margin: 0, letterSpacing: "0.02em", textTransform: "uppercase",
        }}>{group.label}</h3>
        <span style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 28, height: 28, borderRadius: "50%",
          border: "1px solid rgba(26,42,78,0.2)",
          transition: "transform 0.4s cubic-bezier(.22,1,.36,1), background 0.3s",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          background: open ? "var(--red)" : "transparent",
          color: open ? "#fff" : "var(--navy)",
          fontSize: 18, lineHeight: 1, fontWeight: 300,
        }}>+</span>
      </button>

      <div style={{
        display: "grid",
        gridTemplateRows: open ? "1fr" : "0fr",
        transition: "grid-template-rows 0.45s cubic-bezier(.22,1,.36,1)",
      }}>
        <div style={{ overflow: "hidden" }}>
          <div style={{ padding: "4px 4px 26px" }}>
            <ul style={{
              listStyle: "none", padding: 0, margin: 0,
              display: "flex", flexDirection: "column", gap: 10,
            }}>
              {group.items.map((s) => (
                <li key={s.name} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  fontSize: 15, fontWeight: 500, color: "var(--navy)",
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "var(--red)", flexShrink: 0,
                  }} />
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
