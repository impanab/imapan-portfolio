import Reveal from "./Reveal";

export default function Projects({ data }: { data: any[] }) {
  return (
    <section id="projects">
      <Reveal className="tag">05 — Selected Work</Reveal>
      <Reveal className="h2 d1">
        Things I've <i>built.</i>
      </Reveal>
      <div className="proj-grid">
        {data.map((item, idx) => (
          <Reveal key={idx} className={`proj ${item.featured ? 'proj-feat' : ''} ${idx > 0 ? 'd' + Math.min(idx, 3) : ''}`}>
            <div className="proj-num">{item.number}</div>
            <div className="proj-title">{item.title}</div>
            <p className="proj-desc">{item.description}</p>
            <div className="proj-tags">
              {item.tags.map((tag: string, tagIdx: number) => (
                <span key={tagIdx} className="proj-tag">{tag}</span>
              ))}
            </div>
            <a href="#" className="proj-link">
              View Project <span>→</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
