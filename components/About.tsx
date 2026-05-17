import Image from "next/image";
import Reveal from "./Reveal";

export default function About({ data }: { data: any }) {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-aside">
          <Reveal>
            <div className="portrait-box">
              <div className="portrait-art" style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={data.imagePath || "/profile.jpg"}
                  alt="Impana B"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 360px"
                />
              </div>
              <div className="portrait-cap">{data.portraitCaption}</div>
            </div>
          </Reveal>
          <Reveal className="about-quote d1">
            {data.quote}
          </Reveal>
        </div>

        <div>
          <Reveal className="tag">01 — About</Reveal>
          <Reveal className="h2 d1">
            {data.title}<br />
            <i>{data.titleItalic}</i>
          </Reveal>
          {data.paragraphs.map((p: string, i: number) => (
            <Reveal key={i} className={`ap ${i < 2 ? 'd2' : 'd3'}`}>
              <span dangerouslySetInnerHTML={{ __html: p }} />
            </Reveal>
          ))}
          <Reveal className="chips d3">
            {data.skills.map((skill: string, i: number) => (
              <span key={i} className="chip">{skill}</span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
