import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education">
      <Reveal className="tag">03 — Education</Reveal>
      <Reveal className="h2 d1">
        Academic <i>foundations.</i>
      </Reveal>
      <div className="timeline">
        <Reveal className="tl">
          <div className="tl-date">2022 — 2023</div>
          <div className="tl-spine"></div>
          <div className="tl-body">
            <div className="tl-deg">Master of Computer Applications (MCA)</div>
            <div className="tl-school">Bangalore Institute of Technology</div>
            <p className="tl-desc">
              Advanced postgraduate study in software engineering, system design,
              and modern programming paradigms. Built the academic depth that
              underpins my current work in enterprise full-stack development.
            </p>
          </div>
        </Reveal>
        <Reveal className="tl d1">
          <div className="tl-date">2020 — 2021</div>
          <div className="tl-spine"></div>
          <div className="tl-body">
            <div className="tl-deg">B.Sc. Computer Science</div>
            <div className="tl-school">
              Government First Grade College, Thirthahalli
            </div>
            <p className="tl-desc">
              Undergraduate degree with a major in Computer Science — establishing
              rigorous foundations in data structures, algorithms, databases, and
              programming that every engineering decision I make today is built
              on.
            </p>
          </div>
        </Reveal>
        <Reveal className="tl d2">
          <div className="tl-date">2017 — 2018</div>
          <div className="tl-spine"></div>
          <div className="tl-body">
            <div className="tl-deg">Higher Secondary (Science)</div>
            <div className="tl-school">Government P U College, Ripponpet</div>
            <p className="tl-desc">
              Completed science stream education, cultivating the analytical
              thinking and quantitative reasoning that forms the bedrock of all
              technical problem-solving.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
