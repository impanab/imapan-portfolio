"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStuck(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="nav" className={stuck ? "stuck" : ""}>
      <a href="#home" className="nav-brand">
        Impana <b>B.</b>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <a href="#contact" className="nav-cta">
        Contact Me
      </a>
    </nav>
  );
}
