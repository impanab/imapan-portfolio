import Reveal from "./Reveal";

export default function Experience({ data }: { data: any[] }) {
  return (
    <section id="experience">
      <Reveal className="tag">04 — Experience</Reveal>
      <Reveal className="h2 d1">
        Where I've <i>contributed.</i>
      </Reveal>
      <div className="exp-list">
        {data.map((item, idx) => (
          <Reveal key={idx} className={`exp ${idx > 0 ? 'd' + Math.min(idx, 3) : ''}`}>
            <div className="exp-top">
              <div>
                <div className="exp-period">{item.period}</div>
                <div className="exp-title">{item.title}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="exp-loc">{item.location}</div>
                <div className="exp-co">{item.company}</div>
              </div>
            </div>
            <p className="exp-desc">{item.description}</p>
            <div className="exp-tags">
              {item.tags.map((tag: string, tagIdx: number) => (
                <span key={tagIdx} className="exp-tag">{tag}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
