/* ============================================================
 * 導覽列.jsx — 桌面版 Nav + 手機版 MobileNav 抽屜
 * ============================================================ */

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "./資料.jsx";

export function Nav({ onMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "0 clamp(24px, 5vw, 80px)",
      height: scrolled ? 60 : 72,
      background: scrolled ? "rgba(246,245,241,0.85)" : "rgba(246,245,241,0.4)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "height .3s, background .3s, border .3s",
    }}>
      <a href="#top" style={{
        fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em",
        color: "var(--navy)", textDecoration: "none",
        display: "flex", alignItems: "baseline", gap: 2,
      }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>Iman</span>
        <span style={{ color: "var(--red)" }}>.</span>
      </a>
      <div className="desktop-nav" style={{
        display: "flex", gap: 36, fontSize: 15, fontWeight: 500,
        color: "var(--text-muted)", letterSpacing: "0.02em",
      }}>
        {NAV_ITEMS.map((s) => (
          <a key={s.hash} href={`#${s.hash}`} className="linkUnderline" style={{
            color: "inherit", textDecoration: "none",
          }}>
            {s.label}
          </a>
        ))}
      </div>
      <button className="mobile-nav-btn" onClick={onMenuOpen} aria-label="Open menu" style={{
        display: "none", alignItems: "center", gap: 8,
        background: "transparent", border: "none", cursor: "pointer",
        color: "var(--navy)", padding: 8,
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ width: 22, height: 1.5, background: "currentColor" }} />
          <span style={{ width: 16, height: 1.5, background: "currentColor", alignSelf: "flex-end" }} />
        </div>
      </button>
    </nav>
  );
}

export function MobileNav({ open, setOpen, items }) {
  return (
    <>
      <div onClick={() => setOpen(false)} style={{
        position: "fixed", inset: 0, zIndex: 150,
        background: "rgba(26,42,78,0.4)", backdropFilter: "blur(4px)",
        opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
        transition: "opacity .3s",
      }} />
      <aside style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: "min(78vw, 320px)", zIndex: 151,
        background: "var(--bg)", borderLeft: "1px solid var(--border)",
        padding: "80px 32px 32px",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform .4s cubic-bezier(.22,1,.36,1)",
        display: "flex", flexDirection: "column",
      }}>
        <button onClick={() => setOpen(false)} aria-label="Close menu" style={{
          position: "absolute", top: 22, right: 22,
          width: 32, height: 32, background: "transparent",
          border: "none", cursor: "pointer",
          display: "grid", placeItems: "center", color: "var(--navy)",
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
            <path d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>
        <div style={{
          fontSize: 11, fontWeight: 700, color: "var(--red)",
          letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 24,
        }}>Menu</div>
        {items.map((s, i) => (
          <a key={s.hash} href={`#${s.hash}`} onClick={() => setOpen(false)} style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 30, fontWeight: 600, color: "var(--navy)",
            textDecoration: "none", padding: "12px 0",
            borderBottom: i === items.length - 1 ? "none" : "1px solid var(--border)",
          }}>
            {s.label}
          </a>
        ))}
        <div style={{ marginTop: "auto", fontSize: 12, color: "var(--text-light)" }}>iman@example.com</div>
      </aside>
    </>
  );
}
