import Reveal from "./Reveal";

export default function Skills({ data }: { data: any[] }) {
  return (
    <section id="skills">
      <Reveal className="tag">02 — Expertise</Reveal>
      <Reveal className="h2 d1">
        What I <i>build with.</i>
      </Reveal>
      <div className="skills-grid">
        {data.map((item, idx) => (
          <Reveal key={idx} className={`sk ${idx > 0 ? 'd' + Math.min(idx, 3) : ''}`}>
            <span className="sk-g">{item.icon}</span>
            <div className="sk-t">{item.title}</div>
            <p className="sk-d">{item.description}</p>
            <div className="sk-tags">
              {item.tags.map((tag: string, tagIdx: number) => (
                <span key={tagIdx} className="sk-tag">{tag}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
