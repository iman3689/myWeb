/* ============================================================
 * 資料.jsx — 整個 portfolio 用到的常數資料
 * ============================================================ */

export const SKILL_GROUPS = [
  {
    label: "Frontend",
    items: [
      { name: "HTML / CSS", level: 85 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 65 },
    ],
    tools: ["Vite", "Tailwind", "Framer Motion"],
  },
  {
    label: "Design",
    items: [
      { name: "UI / UX Design", level: 80 },
      { name: "Figma", level: 75 },
    ],
    tools: ["Auto Layout", "Wireframing", "Prototyping"],
  },
  {
    label: "Tools",
    items: [
      { name: "Git / GitHub", level: 60 },
    ],
    tools: ["VS Code", "Notion", "Terminal"],
  },
];

export const PROJECTS = [
  {
    title: "MyWebsite",
    tag: "Design",
    desc: "你正在看的這個網站。以幾何元素與海軍藍/紅色構築的，排版、互動到響應式皆親手打造。",
    tech: ["React", "Vite", "CSS"],
    thumb: "web",
    featured: true,
  },
  {
    title: "Weather Card UI",
    tag: "Frontend",
    desc: "練習 React 組件設計：漸層、玻璃感、條件渲染。把一張卡做到 8 種天氣狀態。",
    tech: ["React", "CSS"],
    thumb: "weather",
  },
  {
    title: "Task Tracker",
    tag: "Web App",
    desc: "個人用的小型 To-do 應用。LocalStorage 持久化、鍵盤快速操作、暗色模式。",
    tech: ["React", "LocalStorage"],
    thumb: "tasks",
  },
  {
    title: "Color Picker Tool",
    tag: "Tool",
    desc: "原生 JS 練習作品。支援 HEX / RGB / HSL 切換、複製到剪貼簿、調色盤紀錄。",
    tech: ["Vanilla JS", "Canvas"],
    thumb: "color",
  },
  {
    title: "Stardew Recipe Wiki",
    tag: "Concept",
    desc: "為自己愛玩的遊戲做一個收納食譜的資料庫頁面。資料管理、篩選、卡片視覺。",
    tech: ["Next.js", "Markdown"],
    thumb: "game",
  },
  {
    title: "Music Player UI",
    tag: "Animation",
    desc: "重點是過場：歌曲切換、進度條、EQ 跳動。每個動畫曲線都調過很多次。",
    tech: ["CSS", "Framer Motion"],
    thumb: "music",
  },
];

export const NAV_ITEMS = ["About", "Skills", "Works", "Contact"];
