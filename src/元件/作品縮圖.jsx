/* ============================================================
 * 作品縮圖.jsx — 純 SVG 繪製的作品縮圖元件 + 對照表
 * ============================================================ */

function ThumbWeb({ hovered }) {
  return (
    <svg viewBox="0 0 320 200" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="320" height="200" fill="#F6F5F1" />
      <rect x="20" y="20" width="280" height="160" rx="6" fill="#fff" stroke="rgba(26,42,78,0.12)" />
      <line x1="20" y1="42" x2="300" y2="42" stroke="rgba(26,42,78,0.10)" />
      <circle cx="32" cy="31" r="3" fill="#C8242A" opacity="0.7" />
      <circle cx="44" cy="31" r="3" fill="#1A2A4E" opacity="0.25" />
      <circle cx="56" cy="31" r="3" fill="#1A2A4E" opacity="0.25" />
      <rect x="40" y="62" width="120" height="10" rx="2" fill="#1A2A4E" />
      <rect x="40" y="80" width="180" height="6" rx="2" fill="rgba(26,42,78,0.18)" />
      <rect x="40" y="92" width="150" height="6" rx="2" fill="rgba(26,42,78,0.18)" />
      <rect x="40" y="120" width="50" height="22" rx="2" fill="#C8242A" />
      <rect x="98" y="120" width="50" height="22" rx="2" fill="none" stroke="#1A2A4E" />
      <circle cx="260" cy="80" r="22" fill="none" stroke="#C8242A" strokeWidth="1.2"
        style={{ transform: hovered ? "translate(-6px,4px)" : "translate(0,0)", transformOrigin: "260px 80px", transition: "transform .5s cubic-bezier(.22,1,.36,1)" }} />
      <rect x="246" y="138" width="14" height="14" fill="#1A2A4E"
        style={{ transform: hovered ? "rotate(45deg)" : "rotate(0deg)", transformOrigin: "253px 145px", transition: "transform .5s cubic-bezier(.22,1,.36,1)" }} />
    </svg>
  );
}

function ThumbWeather({ hovered }) {
  return (
    <svg viewBox="0 0 320 200" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="wsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A2A4E" />
          <stop offset="100%" stopColor="#3D5687" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="#F6F5F1" />
      <rect x="80" y="22" width="160" height="156" rx="14" fill="url(#wsky)" />
      <text x="100" y="78" fontFamily="Playfair Display, serif" fontSize="44" fontWeight="700" fill="#fff" fontStyle="italic">22°</text>
      <circle cx="206" cy="56" r="14" fill="#FFD66B" opacity={hovered ? 1 : 0.85} style={{ transition: "opacity .4s" }} />
      <circle cx="216" cy="62" r="12" fill="#fff" opacity="0.95" />
      <rect x="100" y="100" width="60" height="5" rx="2" fill="rgba(255,255,255,0.5)" />
      <rect x="100" y="112" width="40" height="4" rx="2" fill="rgba(255,255,255,0.35)" />
      <g style={{ transform: hovered ? "translateY(-3px)" : "translateY(0)", transition: "transform .5s" }}>
        {[0, 1, 2, 3, 4].map(i => (
          <g key={i}>
            <rect x={100 + i * 25} y={138} width="18" height="28" rx="3" fill="rgba(255,255,255,0.12)" />
            <circle cx={109 + i * 25} cy={148} r="3" fill="#FFD66B" opacity="0.8" />
          </g>
        ))}
      </g>
      <rect x="22" y="38" width="28" height="28" fill="none" stroke="#C8242A" strokeWidth="1.2"
        style={{ transform: hovered ? "rotate(20deg)" : "rotate(0deg)", transformOrigin: "36px 52px", transition: "transform .6s" }} />
      <circle cx="270" cy="160" r="10" fill="#C8242A" opacity="0.7" />
    </svg>
  );
}

function ThumbTasks({ hovered }) {
  return (
    <svg viewBox="0 0 320 200" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="320" height="200" fill="#F6F5F1" />
      {[0, 1, 2].map(i => (
        <rect key={i} x={50 + i * 8} y={36 + i * 12} width="180" height="128" rx="4" fill="#fff"
          stroke="rgba(26,42,78,0.12)"
          style={{
            transform: hovered ? `translateX(${i * 4}px)` : "translateX(0)",
            transition: `transform .5s ${i * 0.05}s cubic-bezier(.22,1,.36,1)`,
          }} />
      ))}
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <rect x={84} y={84 + i * 22} width="12" height="12" rx="2" fill={i < 2 ? "#C8242A" : "none"} stroke="#1A2A4E" strokeWidth={i < 2 ? "0" : "1.2"} />
          {i < 2 && <path d={`M${88} ${90 + i * 22} l3 3 l5 -6`} stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
          <rect x={104} y={87 + i * 22} width={i === 0 ? 70 : i === 1 ? 90 : i === 2 ? 80 : 60} height="5" rx="2" fill={i < 2 ? "rgba(26,42,78,0.25)" : "#1A2A4E"} />
        </g>
      ))}
      <rect x="262" y="46" width="14" height="14" fill="#C8242A" style={{ transform: "rotate(45deg)", transformOrigin: "269px 53px" }} />
    </svg>
  );
}

function ThumbColor({ hovered }) {
  const swatches = ["#1A2A4E", "#C8242A", "#F6F5F1", "#FFD66B", "#3D8A6E"];
  return (
    <svg viewBox="0 0 320 200" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="320" height="200" fill="#F6F5F1" />
      {swatches.map((c, i) => (
        <rect key={i} x={42 + i * 48} y={hovered ? 56 - (i % 2 === 0 ? 8 : 0) : 60}
          width="40" height="80" rx="3" fill={c}
          stroke={c === "#F6F5F1" ? "rgba(26,42,78,0.12)" : "none"}
          style={{ transition: `y .5s ${i * 0.05}s cubic-bezier(.22,1,.36,1)` }} />
      ))}
      <circle cx="62" cy="100" r="14" fill="none" stroke="#fff" strokeWidth="2"
        style={{ transform: hovered ? "translateX(192px)" : "translateX(0)", transition: "transform .8s cubic-bezier(.22,1,.36,1)" }} />
      <circle cx="62" cy="100" r="14" fill="none" stroke="#1A2A4E" strokeWidth="1"
        style={{ transform: hovered ? "translateX(192px)" : "translateX(0)", transition: "transform .8s cubic-bezier(.22,1,.36,1)" }} />
      <text x="160" y="172" textAnchor="middle" fontFamily="DM Sans, monospace" fontSize="11" fontWeight="600" fill="#1A2A4E" letterSpacing="1">#1A2A4E</text>
    </svg>
  );
}

function ThumbGame({ hovered }) {
  return (
    <svg viewBox="0 0 320 200" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="320" height="200" fill="#F6F5F1" />
      <rect x="20" y="22" width="280" height="80" fill="#E8DDC6" />
      <circle cx={hovered ? "260" : "70"} cy="48" r="14" fill="#C8242A" opacity="0.8" style={{ transition: "cx 2s cubic-bezier(.5,0,.5,1)" }} />
      <rect x="20" y="102" width="280" height="76" fill="#9CAE7B" opacity="0.45" />
      {Array.from({ length: 6 }).map((_, col) =>
        Array.from({ length: 3 }).map((_, row) => (
          <g key={`${col}-${row}`}>
            <rect x={36 + col * 42} y={112 + row * 20} width="28" height="14" rx="1" fill="#3D5C3A" opacity="0.35" />
            <circle cx={50 + col * 42} cy={119 + row * 20} r="3" fill="#C8242A" opacity={hovered ? 1 : 0.7} style={{ transition: `opacity .4s ${(col + row) * 0.05}s` }} />
          </g>
        ))
      )}
      <rect x="190" y="30" width="100" height="64" rx="4" fill="#fff" stroke="rgba(26,42,78,0.18)"
        style={{ transform: hovered ? "translateY(-3px) rotate(-2deg)" : "rotate(-2deg)", transformOrigin: "240px 62px", transition: "transform .5s" }} />
      <rect x="200" y="42" width="50" height="5" rx="2" fill="#1A2A4E" />
      <rect x="200" y="54" width="70" height="3" rx="1" fill="rgba(26,42,78,0.3)" />
      <rect x="200" y="62" width="60" height="3" rx="1" fill="rgba(26,42,78,0.3)" />
      <rect x="200" y="70" width="45" height="3" rx="1" fill="rgba(26,42,78,0.3)" />
      <circle cx="278" cy="46" r="6" fill="#C8242A" />
    </svg>
  );
}

function ThumbMusic({ hovered }) {
  return (
    <svg viewBox="0 0 320 200" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="320" height="200" fill="#F6F5F1" />
      <rect x="50" y="30" width="220" height="140" rx="10" fill="#1A2A4E" />
      <rect x="68" y="48" width="60" height="60" rx="4" fill="#C8242A" />
      <circle cx="98" cy="78" r="14" fill="#1A2A4E" />
      <circle cx="98" cy="78" r="4" fill="#fff" />
      <rect x="138" y="56" width="100" height="6" rx="2" fill="#fff" />
      <rect x="138" y="70" width="70" height="4" rx="2" fill="rgba(255,255,255,0.4)" />
      <rect x="68" y="124" width="184" height="3" rx="1.5" fill="rgba(255,255,255,0.18)" />
      <rect x="68" y="124" width={hovered ? "150" : "60"} height="3" rx="1.5" fill="#C8242A" style={{ transition: "width 1.5s cubic-bezier(.22,1,.36,1)" }} />
      <circle cx="160" cy="150" r="12" fill="#fff" />
      <polygon points="156,144 156,156 168,150" fill="#1A2A4E" />
      <circle cx="128" cy="150" r="6" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      <circle cx="192" cy="150" r="6" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      <g>
        {[12, 22, 16, 26, 14].map((h, i) => (
          <rect key={i} x={240 + i * 6} y={108 - h} width="3" height={h} fill="#C8242A" opacity="0.7"
            style={{
              animation: hovered ? `eqBar 0.6s ${i * 0.08}s ease-in-out infinite alternate` : "none",
              transformOrigin: "bottom",
            }} />
        ))}
      </g>
    </svg>
  );
}

function ThumbMarket({ hovered }) {
  // 恐慌貪婪儀表：半圓弧 + 指針，hover 時指針從恐慌掃向貪婪
  const cx = 160, cy = 138, r = 74;
  const polar = (deg, rad = r) => ({
    x: cx + rad * Math.sin((deg * Math.PI) / 180),
    y: cy - rad * Math.cos((deg * Math.PI) / 180),
  });
  const arc = (from, to) => {
    const a = polar(-90 + (from / 100) * 180);
    const b = polar(-90 + (to / 100) * 180);
    return `M ${a.x} ${a.y} A ${r} ${r} 0 0 1 ${b.x} ${b.y}`;
  };
  const needleDeg = -90 + ((hovered ? 78 : 32) / 100) * 180;
  return (
    <svg viewBox="0 0 320 200" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="320" height="200" fill="#F6F5F1" />
      {/* 四段情緒弧：極恐 / 恐慌 / 貪婪 / 極貪 */}
      <path d={arc(0, 25)} fill="none" stroke="#C8242A" strokeWidth="13" strokeLinecap="round" opacity="0.85" />
      <path d={arc(25, 50)} fill="none" stroke="#E08A3C" strokeWidth="13" />
      <path d={arc(50, 75)} fill="none" stroke="#6B9A6E" strokeWidth="13" />
      <path d={arc(75, 100)} fill="none" stroke="#3D8A6E" strokeWidth="13" strokeLinecap="round" opacity="0.85" />
      {/* 指針 */}
      <g style={{ transform: `rotate(${needleDeg}deg)`, transformOrigin: `${cx}px ${cy}px`, transition: "transform 1s cubic-bezier(.22,1,.36,1)" }}>
        <polygon points={`${cx - 4},${cy + 4} ${cx + 4},${cy + 4} ${cx + 1.2},${cy - r + 10} ${cx - 1.2},${cy - r + 10}`} fill="#1A2A4E" />
      </g>
      <circle cx={cx} cy={cy} r="7" fill="#1A2A4E" />
      {/* 右上 sparkline 小折線，呼應資料儀表 */}
      <polyline
        points="232,52 246,44 258,58 270,38 284,48 296,30"
        fill="none" stroke="#C8242A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        opacity={hovered ? 1 : 0.55} style={{ transition: "opacity .4s" }} />
      <text x={cx} y="60" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="13" fontWeight="600" fill="#1A2A4E" letterSpacing="1">
        MARKET STATE
      </text>
    </svg>
  );
}

export const THUMBS = {
  web: ThumbWeb,
  market: ThumbMarket,
  weather: ThumbWeather,
  tasks: ThumbTasks,
  color: ThumbColor,
  game: ThumbGame,
  music: ThumbMusic,
};
