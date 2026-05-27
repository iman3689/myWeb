/* ============================================================
 * 作品區塊.jsx — Works 區段 (主打 + 2 欄網格)
 * ============================================================ */

import { SectionHead } from "./通用.jsx";
import ProjectCard from "./作品卡片.jsx";
import { PROJECTS } from "./資料.jsx";

export default function Works() {
  return (
    <section id="works" className="section-pad" style={{
      padding: "120px clamp(24px, 5vw, 80px)",
      maxWidth: 1180, margin: "0 auto",
      position: "relative", zIndex: 1,
    }}>
      <SectionHead kicker="Selected Works" title="作品集" />
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <ProjectCard no="01" {...PROJECTS[0]} delay={0} />
        <div className="projects-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24,
        }}>
          {PROJECTS.slice(1).map((p, i) => (
            <ProjectCard key={p.title} no={(i + 2).toString().padStart(2, "0")} {...p} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
