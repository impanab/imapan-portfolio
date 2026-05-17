import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills">
      <Reveal className="tag">02 — Expertise</Reveal>
      <Reveal className="h2 d1">
        What I <i>build with.</i>
      </Reveal>
      <div className="skills-grid">
        <Reveal className="sk">
          <span className="sk-g">⌥</span>
          <div className="sk-t">Frontend Engineering</div>
          <p className="sk-d">
            Building responsive, accessible, and performant user interfaces. From
            component architecture to pixel-level polish, I care about every layer
            of the frontend experience.
          </p>
          <div className="sk-tags">
            <span className="sk-tag">HTML5 &amp; CSS3</span>
            <span className="sk-tag">JavaScript</span>
            <span className="sk-tag">React.js</span>
            <span className="sk-tag">Next.js</span>
            <span className="sk-tag">Angular.js</span>
            <span className="sk-tag">Bootstrap</span>
            <span className="sk-tag">Tailwind CSS</span>
          </div>
        </Reveal>
        <Reveal className="sk d1">
          <span className="sk-g">⌘</span>
          <div className="sk-t">Backend &amp; APIs</div>
          <p className="sk-d">
            Designing server-side systems with clean separation of concerns. REST
            API development, authentication flows, and performant data access
            patterns are daily fundamentals.
          </p>
          <div className="sk-tags">
            <span className="sk-tag">Node.js</span>
            <span className="sk-tag">Express.js</span>
            <span className="sk-tag">REST APIs</span>
            <span className="sk-tag">Git &amp; GitHub</span>
            <span className="sk-tag">Agile / Scrum</span>
          </div>
        </Reveal>
        <Reveal className="sk d2">
          <span className="sk-g">⊞</span>
          <div className="sk-t">Databases</div>
          <p className="sk-d">
            Comfortable across relational and document-oriented databases.
            Thoughtful about schema design, query performance, and data modelling
            for production systems.
          </p>
          <div className="sk-tags">
            <span className="sk-tag">MongoDB</span>
            <span className="sk-tag">MySQL</span>
            <span className="sk-tag">SQL</span>
          </div>
        </Reveal>
        <Reveal className="sk d3">
          <span className="sk-g">◈</span>
          <div className="sk-t">Cloud &amp; Languages</div>
          <p className="sk-d">
            Deploying containerised applications on cloud infrastructure and
            writing backend logic across multiple languages. Currently deepening
            Azure expertise.
          </p>
          <div className="sk-tags">
            <span className="sk-tag">Microsoft Azure</span>
            <span className="sk-tag">Docker</span>
            <span className="sk-tag">Python</span>
            <span className="sk-tag">Java</span>
            <span className="sk-tag">JavaScript</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
