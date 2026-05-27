/* ============================================================
 * 幾何背景.jsx — 全頁固定底層的幾何圖案動畫
 * ============================================================ */

import { useState, useEffect } from "react";

export default function GeoBg() {
  const [yOffset, setYOffset] = useState(0);
  useEffect(() => {
    let raf = null;
    const update = () => { raf = null; setYOffset(window.scrollY * 0.08); };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const SCALE = 1.7;
  const shapes = [
    { type: "ring", size: 160, top: "6%", left: "82%", color: "var(--red)", anim: "geoSpin", dur: 22, opacity: 0.10 },
    { type: "ring", size: 90, top: "36%", left: "92%", color: "var(--navy)", anim: "geoSpinReverse", dur: 28, opacity: 0.09 },
    { type: "ring", size: 60, top: "82%", left: "78%", color: "var(--navy)", anim: "geoSpin", dur: 32, opacity: 0.08 },
    { type: "diamond", size: 18, top: "16%", left: "78%", color: "var(--red)", anim: "geoPulseRotate", dur: 8, opacity: 0.18 },
    { type: "diamond", size: 14, top: "58%", left: "88%", color: "var(--navy)", anim: "geoPulseRotate", dur: 10, opacity: 0.14 },
    { type: "diamond", size: 10, top: "42%", left: "5%", color: "var(--red)", anim: "geoPulseRotate", dur: 12, opacity: 0.14 },
    { type: "line", size: 80, top: "22%", left: "3%", color: "var(--navy)", anim: "geoSwing", dur: 14, opacity: 0.12 },
    { type: "line", size: 80, top: "68%", left: "89%", color: "var(--red)", anim: "geoSwing", dur: 18, opacity: 0.10 },
    { type: "line", size: 80, top: "50%", left: "94%", color: "var(--navy)", anim: "geoSwing", dur: 16, opacity: 0.08 },
    { type: "triangle", size: 56, top: "74%", left: "4%", color: "var(--red)", anim: "geoDrift", dur: 22, opacity: 0.07 },
    { type: "triangle", size: 30, top: "14%", left: "58%", color: "var(--navy)", anim: "geoDrift", dur: 18, opacity: 0.06 },
    { type: "dots", size: 3, gap: 10, top: "48%", left: "2%", color: "var(--navy)", anim: "geoPulse", dur: 6, opacity: 0.12 },
    { type: "dots", size: 3, gap: 10, top: "88%", left: "48%", color: "var(--red)", anim: "geoPulse", dur: 8, opacity: 0.08 },
    { type: "cross", size: 18, top: "9%", left: "8%", color: "var(--red)", anim: "geoSpinSlow", dur: 24, opacity: 0.14 },
    { type: "cross", size: 14, top: "65%", left: "68%", color: "var(--navy)", anim: "geoSpinSlow", dur: 30, opacity: 0.10 },
    { type: "hexagon", size: 50, top: "30%", left: "1%", color: "var(--red)", anim: "geoSpin", dur: 28, opacity: 0.07 },
    { type: "hexagon", size: 32, top: "90%", left: "86%", color: "var(--navy)", anim: "geoSpinReverse", dur: 34, opacity: 0.06 },
  ].map(s => ({
    ...s,
    size: s.size ? s.size * SCALE : s.size,
    gap: s.gap ? s.gap * SCALE : s.gap,
  }));

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 0,
      pointerEvents: "none", overflow: "hidden",
      transform: `translateY(${-yOffset}px)`,
      willChange: "transform",
    }}>
      {shapes.map((s, i) => {
        const base = {
          position: "absolute",
          top: s.top, left: s.left,
          opacity: s.opacity,
          animation: `${s.anim} ${s.dur}s ease-in-out infinite`,
          animationDelay: `${i * -1.8}s`,
        };
        if (s.type === "ring") return <div key={i} style={{ ...base, width: s.size, height: s.size, border: `1.5px solid ${s.color}`, borderRadius: "50%" }} />;
        if (s.type === "diamond") return <div key={i} style={{ ...base, width: s.size, height: s.size, background: s.color }} />;
        if (s.type === "line") return <div key={i} style={{ ...base, width: s.size, height: 1.5, background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }} />;
        if (s.type === "triangle") return (
          <svg key={i} style={base} width={s.size} height={s.size} viewBox="0 0 50 44">
            <polygon points="25,2 48,42 2,42" fill="none" stroke={s.color} strokeWidth="1.5" />
          </svg>
        );
        if (s.type === "dots") return (
          <div key={i} style={{ ...base, display: "flex", flexDirection: "column", gap: s.gap }}>
            {[0, 1, 2, 3].map(r => (
              <div key={r} style={{ display: "flex", gap: s.gap }}>
                {[0, 1, 2, 3].map(c => <div key={c} style={{ width: s.size, height: s.size, borderRadius: "50%", background: s.color }} />)}
              </div>
            ))}
          </div>
        );
        if (s.type === "cross") return (
          <div key={i} style={{ ...base, width: s.size, height: s.size }}>
            <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: 1.5, background: s.color, transform: "translateY(-50%)" }} />
            <div style={{ position: "absolute", left: "50%", top: 0, width: 1.5, height: "100%", background: s.color, transform: "translateX(-50%)" }} />
          </div>
        );
        if (s.type === "hexagon") return (
          <svg key={i} style={base} width={s.size} height={s.size} viewBox="0 0 50 44">
            <polygon points="25,1 47,12 47,33 25,43 3,33 3,12" fill="none" stroke={s.color} strokeWidth="1.2" />
          </svg>
        );
        return null;
      })}
    </div>
  );
}
