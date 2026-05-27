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
      { name: "Illustrator", level: 80 },
      { name: "Photoshop", level: 75 },
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
    link: "https://github.com/iman3689/myWeb",
  },
];

export const NAV_ITEMS = [
  { label: "About me", hash: "about" },
  { label: "Skills", hash: "skills" },
  { label: "Works", hash: "works" },
  { label: "Contact", hash: "contact" },
];
