/* ============================================================
 * 技能條.jsx — 技能進度條 (進入視窗才畫滿)
 * ============================================================ */

import { useInView } from "./通用.jsx";

export default function SkillBar({ name, level, delay }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)" }}>{name}</span>
        <span style={{
          fontSize: 12, fontWeight: 500,
          fontFamily: "'DM Mono', ui-monospace, Menlo, monospace",
          color: "var(--text-muted)",
        }}>{level}%</span>
      </div>
      <div style={{
        height: 6, borderRadius: 3,
        background: "var(--bar-bg)", overflow: "hidden",
      }}>
        <div style={{
          height: "100%", borderRadius: 3,
          width: visible ? `${level}%` : "0%",
          background: "linear-gradient(90deg, var(--navy), var(--red))",
          transition: `width 1.1s ${delay}s cubic-bezier(.22,1,.36,1)`,
        }} />
      </div>
    </div>
  );
}
