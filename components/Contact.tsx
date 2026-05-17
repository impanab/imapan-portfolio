"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppSend = () => {
    // Reads the phone number from .env.local
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""; 
    const rawText = `Hi Impana, my name is ${name} (${email}).\n\n${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(rawText)}`;
    
    window.open(url, "_blank");
  };

  const handleEmailSend = () => {
    const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "impana@email.com";
    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const url = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    
    window.location.href = url;
  };
  return (
    <section id="contact">
      <Reveal className="tag">06 — Contact</Reveal>
      <Reveal className="h2 d1">
        Let's build something <i>together.</i>
      </Reveal>
      <div className="contact-wrap">
        <Reveal className="d1">
          <p className="contact-lede">
            I'm open to full-time roles, freelance projects, and interesting
            technical conversations. Whether you have an opportunity in mind or just
            want to connect — my inbox is always open.
          </p>
          <div className="c-links">
            <a href="mailto:impana@email.com" className="c-link">
              <span className="c-icon">✉</span>
              <span className="c-label">impana@email.com</span>
            </a>
            <a href="https://linkedin.com" className="c-link">
              <span className="c-icon">in</span>
              <span className="c-label">linkedin.com/in/impana-b</span>
            </a>
            <a href="https://github.com" className="c-link">
              <span className="c-icon">gh</span>
              <span className="c-label">github.com/impana-b</span>
            </a>
          </div>
        </Reveal>
        <Reveal className="form d2">
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea 
            placeholder="Tell me about your project or opportunity…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div style={{ display: "flex", gap: "12px", marginTop: "4px" }}>
            <button onClick={handleWhatsAppSend} className="form-btn" style={{ flex: 1, marginTop: 0 }}>WhatsApp →</button>
            <button onClick={handleEmailSend} className="form-btn" style={{ flex: 1, marginTop: 0, background: "transparent", color: "var(--accent)" }}>Email →</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
