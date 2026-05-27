/* ============================================================
 * 主檔.jsx — Iman · Portfolio 入口元件
 *   把所有模組組裝起來，預設匯出 <Portfolio />
 *
 *   檔案結構：
 *     主檔.jsx                    ← 入口 (本檔)
 *     元件/資料.jsx               ← 常數資料
 *     元件/通用.jsx               ← hooks + FadeIn + ScrollProgress + SectionHead
 *     元件/幾何背景.jsx           ← GeoBg
 *     元件/作品縮圖.jsx           ← Thumb 元件 + THUMBS 對照表
 *     元件/作品卡片.jsx           ← ProjectCard
 *     元件/技能條.jsx             ← SkillBar
 *     元件/導覽列.jsx             ← Nav + MobileNav
 *     元件/首頁區塊.jsx           ← Hero
 *     元件/關於區塊.jsx           ← About
 *     元件/技能區塊.jsx           ← Skills
 *     元件/作品區塊.jsx           ← Works
 *     元件/聯絡區塊.jsx           ← Contact
 *     元件/頁尾.jsx               ← Footer
 *     元件/全域樣式.jsx           ← 全域 CSS / keyframes (<style>)
 *
 *   在 Vite 專案的 main.jsx 裡：
 *     import Portfolio from "./主檔.jsx";
 *     createRoot(...).render(<Portfolio />);
 * ============================================================ */

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "./元件/資料.jsx";
import { ScrollProgress } from "./元件/通用.jsx";
import GeoBg from "./元件/幾何背景.jsx";
import { Nav, MobileNav } from "./元件/導覽列.jsx";
import Hero from "./元件/首頁區塊.jsx";
import About from "./元件/關於區塊.jsx";
import Skills from "./元件/技能區塊.jsx";
import Works from "./元件/作品區塊.jsx";
import Contact from "./元件/聯絡區塊.jsx";
import Footer from "./元件/頁尾.jsx";
import 全域樣式 from "./元件/全域樣式.jsx";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="paper-grain" style={{
      "--bg": "#F5F5F6",
      "--card": "#FFFFFF",
      "--navy": "#2f4372",
      "--red": "#C8242A",
      "--text": "#2f4372",
      "--text-muted": "#6B7280",
      "--text-light": "#9CA3AF",
      "--accent": "#C8242A",
      "--border": "rgba(26,42,78,0.10)",
      "--bar-bg": "rgba(26,42,78,0.07)",
      fontFamily: "'DM Sans', 'Noto Sans TC', sans-serif",
      background: "var(--bg)",
      color: "var(--text)",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      WebkitFontSmoothing: "antialiased",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&family=Noto+Sans+TC:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap" rel="stylesheet" />

      <ScrollProgress />
      <GeoBg />
      <Nav onMenuOpen={() => setMenuOpen(true)} />
      <MobileNav open={menuOpen} setOpen={setMenuOpen} items={NAV_ITEMS} />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
      <Footer />

      <全域樣式 />
    </div>
  );
}
