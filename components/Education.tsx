import Reveal from "./Reveal";

export default function Education({ data }: { data: any[] }) {
  return (
    <section id="education">
      <Reveal className="tag">03 — Education</Reveal>
      <Reveal className="h2 d1">
        Academic <i>foundation.</i>
      </Reveal>
      <div className="timeline">
        {data.map((item, idx) => (
          <Reveal key={idx} className={`tl ${idx > 0 ? 'd' + Math.min(idx, 3) : ''}`}>
            <div className="tl-date">{item.period}</div>
            <div className="tl-spine"></div>
            <div className="tl-body">
              <div className="tl-deg">{item.degree}</div>
              <div className="tl-school">{item.school}</div>
              <p className="tl-desc">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
