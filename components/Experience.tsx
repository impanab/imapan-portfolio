import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience">
      <Reveal className="tag">04 — Experience</Reveal>
      <Reveal className="h2 d1">
        Where I've <i>made an impact.</i>
      </Reveal>
      <div className="exp-list">
        <Reveal className="exp">
          <div className="exp-top">
            <div>
              <div className="exp-period">Apr 2025 — Present</div>
              <div className="exp-title">Senior Associate Software Engineer</div>
              <div className="exp-loc">AT&T · Bengaluru, India</div>
            </div>
            <div className="exp-co">AT&amp;T</div>
          </div>
          <p className="exp-desc">
            Leading frontend development of internal enterprise dashboards and web
            applications used across business units. Collaborate directly with
            product and design teams to define technical architecture, drive
            performance optimisations, and uphold code quality at scale. Actively
            involved in sprint planning, design reviews, and cross-team technical
            discussions in an agile environment.
          </p>
          <div className="exp-tags">
            <span className="exp-tag">React.js</span>
            <span className="exp-tag">Next.js</span>
            <span className="exp-tag">Node.js</span>
            <span className="exp-tag">MongoDB</span>
            <span className="exp-tag">Tailwind CSS</span>
          </div>
        </Reveal>

        <Reveal className="exp d1">
          <div className="exp-top">
            <div>
              <div className="exp-period">Apr 2024 — Mar 2025</div>
              <div className="exp-title">Software Engineering Apprentice</div>
              <div className="exp-loc">AT&T · Bengaluru, India</div>
            </div>
            <div className="exp-co">AT&amp;T</div>
          </div>
          <p className="exp-desc">
            Contributed to enterprise software projects across the full stack —
            building React UI components, developing Express APIs, integrating REST
            services, and shipping features end to end. Developed strong
            professional foundations in software delivery, collaborative development
            workflows, and engineering best practices under senior mentorship.
          </p>
          <div className="exp-tags">
            <span className="exp-tag">JavaScript</span>
            <span className="exp-tag">Express.js</span>
            <span className="exp-tag">MySQL</span>
            <span className="exp-tag">REST API</span>
            <span className="exp-tag">Git</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
