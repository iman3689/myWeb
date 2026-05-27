/* ============================================================
 * 通用.jsx — 共用 hooks 與小型展示元件
 *   useInView · FadeIn · ScrollProgress · SectionHead
 * ============================================================ */

import { useState, useEffect, useRef } from "react";

/* 進入視窗才觸發一次的 IntersectionObserver hook */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* 進場淡入 + 上移 */
export function FadeIn({ children, delay = 0, y = 28, style: extraStyle = {} }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.8s ${delay}s cubic-bezier(.22,1,.36,1), transform 0.8s ${delay}s cubic-bezier(.22,1,.36,1)`,
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
}

/* 頂部捲動進度條 */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? h.scrollTop / total : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0,
      height: 2, zIndex: 200, pointerEvents: "none",
      background: "rgba(26,42,78,0.06)",
    }}>
      <div style={{
        height: "100%",
        width: `${p * 100}%`,
        background: "linear-gradient(90deg, var(--navy), var(--red))",
        transition: "width 80ms linear",
      }} />
    </div>
  );
}

/* 區塊標題 (kicker + 主標) */
export function SectionHead({ kicker, title }) {
  return (
    <FadeIn>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
          <span style={{ width: 28, height: 1.5, background: "var(--red)" }} />
          <span style={{
            fontSize: 12, fontWeight: 700, color: "var(--red)",
            letterSpacing: "0.18em", textTransform: "uppercase",
          }}>{kicker}</span>
        </div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(34px, 5vw, 46px)",
          fontWeight: 700, margin: 0,
          letterSpacing: "-0.015em",
          color: "var(--navy)", lineHeight: 1.1,
        }}>{title}</h2>
      </div>
    </FadeIn>
  );
}
