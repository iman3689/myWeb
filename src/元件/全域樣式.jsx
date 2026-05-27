/* ============================================================
 * 全域樣式.jsx — 把 portfolio 用的全域 CSS / keyframes 包成一個元件
 *   渲染後就是一個 <style> 標籤
 * ============================================================ */

export default function 全域樣式() {
  return (
    <style>{`
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      ::selection { background: rgba(200,36,42,0.18); color: #1A2A4E; }
      a:focus-visible, button:focus-visible {
        outline: 2px solid #C8242A;
        outline-offset: 4px;
        border-radius: 2px;
      }

      .paper-grain::before {
        content: "";
        position: fixed; inset: 0;
        pointer-events: none;
        z-index: 1;
        opacity: 0.35;
        mix-blend-mode: multiply;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.16 0 0 0 0 0.3 0 0 0 0.05 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
      }

      .linkUnderline { position: relative; transition: color .25s; }
      .linkUnderline::after {
        content: ""; position: absolute;
        left: 0; right: 0; bottom: -4px;
        height: 1.5px; background: currentColor;
        transform: scaleX(0); transform-origin: right;
        transition: transform .35s cubic-bezier(.7,0,.2,1);
      }
      .linkUnderline:hover::after { transform: scaleX(1); transform-origin: left; }

      @keyframes geoSpin {
        0% { transform: rotate(0deg) translateY(0px); }
        25% { transform: rotate(90deg) translateY(-12px); }
        50% { transform: rotate(180deg) translateY(0px); }
        75% { transform: rotate(270deg) translateY(8px); }
        100% { transform: rotate(360deg) translateY(0px); }
      }
      @keyframes geoSpinReverse {
        0% { transform: rotate(0deg) translateX(0px); }
        25% { transform: rotate(-90deg) translateX(10px); }
        50% { transform: rotate(-180deg) translateX(0px); }
        75% { transform: rotate(-270deg) translateX(-8px); }
        100% { transform: rotate(-360deg) translateX(0px); }
      }
      @keyframes geoSpinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes geoPulseRotate {
        0%, 100% { transform: rotate(45deg) scale(1); opacity: 0.12; }
        50% { transform: rotate(225deg) scale(1.4); opacity: 0.22; }
      }
      @keyframes geoSwing {
        0%, 100% { transform: rotate(-25deg) translateY(0); }
        25% { transform: rotate(15deg) translateY(-6px); }
        50% { transform: rotate(25deg) translateY(0); }
        75% { transform: rotate(-15deg) translateY(6px); }
      }
      @keyframes geoDrift {
        0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
        33% { transform: translateY(-16px) translateX(8px) rotate(8deg); }
        66% { transform: translateY(8px) translateX(-6px) rotate(-4deg); }
      }
      @keyframes geoPulse {
        0%, 100% { transform: scale(1); opacity: 0.08; }
        50% { transform: scale(1.15); opacity: 0.18; }
      }
      @keyframes statusPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(34,180,110,0.35); }
        50% { box-shadow: 0 0 0 8px rgba(34,180,110,0); }
      }
      @keyframes eqBar {
        from { transform: scaleY(0.5); }
        to { transform: scaleY(1.2); }
      }
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      @keyframes dotHop {
        0%, 55%, 100% { transform: translateY(0); }
        20%          { transform: translateY(-0.5em); }
        35%          { transform: translateY(0) scaleY(0.78) scaleX(1.15); }
        45%          { transform: translateY(0) scaleY(1) scaleX(1); }
      }
      @keyframes diamondBreathe {
        0%, 100% { box-shadow: 0 0 0 6px rgba(200,36,42,0.14); }
        50%      { box-shadow: 0 0 0 13px rgba(200,36,42,0.04); }
      }

      @media (max-width: 760px) {
        .grid-2 { grid-template-columns: 1fr !important; }
        .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        .hero-mark { display: none !important; }
        .desktop-nav { display: none !important; }
        .mobile-nav-btn { display: inline-flex !important; }
        .section-pad { padding-top: 72px !important; padding-bottom: 72px !important; }
        .projects-grid { grid-template-columns: 1fr !important; }
        .hero-h1 { font-size: clamp(40px, 11vw, 60px) !important; }
        .timeline-row .timeline-nodes { overflow-x: auto; gap: 32px !important; padding-bottom: 12px; }
        .timeline-row .timeline-nodes > div { flex: 0 0 auto !important; min-width: 120px !important; }
      }
    `}</style>
  );
}
