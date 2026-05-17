import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects">
      <Reveal className="tag">05 — Projects</Reveal>
      <Reveal className="h2 d1">
        Selected <i>work.</i>
      </Reveal>
      <div className="proj-grid">
        <Reveal className="proj proj-feat">
          <div className="proj-num">001 — Featured</div>
          <div className="proj-title">Enterprise Dashboard Platform</div>
          <p className="proj-desc">
            A high-performance analytics and monitoring dashboard built for internal
            operations at AT&T. Features real-time data visualisation, multi-level
            access control, and a fully responsive layout serving cross-functional
            teams. Architected with scalability and long-term maintainability as
            first principles.
          </p>
          <div className="proj-tags">
            <span className="proj-tag">React.js</span>
            <span className="proj-tag">Node.js</span>
            <span className="proj-tag">MongoDB</span>
            <span className="proj-tag">Tailwind CSS</span>
            <span className="proj-tag">REST API</span>
          </div>
          <a href="#" className="proj-link">
            View Case Study →
          </a>
        </Reveal>

        <Reveal className="proj d1">
          <div className="proj-num">002</div>
          <div className="proj-title">AI-Augmented Web App</div>
          <p className="proj-desc">
            A full-stack application integrating AI-driven features — smart content
            suggestions, dynamic generation, and Azure-hosted inference services —
            to meaningfully enhance user workflows.
          </p>
          <div className="proj-tags">
            <span className="proj-tag">Next.js</span>
            <span className="proj-tag">Azure</span>
            <span className="proj-tag">Node.js</span>
            <span className="proj-tag">MongoDB</span>
          </div>
          <a href="#" className="proj-link">
            View Project →
          </a>
        </Reveal>

        <Reveal className="proj d2">
          <div className="proj-num">003</div>
          <div className="proj-title">Full-Stack E-Commerce</div>
          <p className="proj-desc">
            End-to-end storefront with product management, cart flows, and payment
            integration. Built with Next.js for SSR performance and MySQL for
            robust transactional data handling.
          </p>
          <div className="proj-tags">
            <span className="proj-tag">Next.js</span>
            <span className="proj-tag">Express.js</span>
            <span className="proj-tag">MySQL</span>
          </div>
          <a href="#" className="proj-link">
            View Project →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
