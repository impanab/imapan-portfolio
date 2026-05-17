import Image from "next/image";
import Reveal from "./Reveal";
import profilePic from "./profile.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-aside">
          <Reveal>
            <div className="portrait-box">
              <div className="portrait-art" style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={profilePic}
                  alt="Impana B"
                  fill
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 360px"
                />
              </div>
              <div className="portrait-cap">Impana B · Software Engineer · Bengaluru</div>
            </div>
          </Reveal>
          <Reveal className="about-quote d1">
            💬&nbsp; "Talks a lot with close ones. Quiet otherwise."
          </Reveal>
        </div>

        <div>
          <Reveal className="tag">01 — About</Reveal>
          <Reveal className="h2 d1">
            Turning ideas into<br />
            <i>real products.</i>
          </Reveal>
          <Reveal className="ap d2">
            Hi, I'm <strong>Impana B</strong> — a software engineer who fell in love
            with building things for the web. What started as curiosity became a
            full-blown career in <strong>full-stack development</strong>, where I
            solve meaningful problems and deliver experiences that feel effortless to
            use.
          </Reveal>
          <Reveal className="ap d2">
            At <strong>AT&T</strong>, I work on scalable enterprise web applications —
            thinking through architecture, sweating performance details, and shipping
            features alongside cross-functional teams. Outside of that, I'm deepening
            my expertise in <strong>Microsoft Azure</strong> and exploring how AI
            agents can transform the way people interact with digital products.
          </Reveal>
          <Reveal className="ap d3">
            I believe great software lives at the intersection of clean engineering
            and intentional design. Whether I'm building a pixel-perfect interface or
            architecting a resilient API, I care deeply about the quality of every
            layer.
          </Reveal>
          <Reveal className="chips d3">
            <span className="chip">React.js</span>
            <span className="chip">Next.js</span>
            <span className="chip">Node.js</span>
            <span className="chip">MongoDB</span>
            <span className="chip">MySQL</span>
            <span className="chip">Express.js</span>
            <span className="chip">Tailwind CSS</span>
            <span className="chip">Docker</span>
            <span className="chip">Microsoft Azure</span>
            <span className="chip">Python</span>
            <span className="chip">Java</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
