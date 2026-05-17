"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact({ data }: { data: any }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppSend = () => {
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
        {data.title} <i>{data.titleItalic}</i>
      </Reveal>
      <div className="contact-wrap">
        <Reveal className="d1">
          <p className="contact-lede">
            {data.description}
          </p>
          <div className="c-links">
            {data.links.map((link: any, idx: number) => (
              <a key={idx} href={link.url} className="c-link">
                <span className="c-icon">{link.icon}</span>
                <span className="c-label">{link.label}</span>
              </a>
            ))}
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
