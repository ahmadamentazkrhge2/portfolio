import React from "react";
import { SiLinkedin, SiInstagram, SiGmail } from "react-icons/si";
import "./Contact.css";

export default function Contact() {
  const contacts = [
    {
      name: "Email",
      icon: <SiGmail />,
      link: "https://mail.google.com/mail/?view=cm&to=tazkrhgeahmadamen@gmail.com",
      color: "#D44638",
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/in/ahmad-tazkrhge-4948aa377/",
      color: "#0A66C2",
    },
    {
      name: "Instagram",
      icon: <SiInstagram />,
      link: "https://www.instagram.com/ahmad__tazkrhge/",
      color: "#C13584",
    },
  ];

  return (
    <div id="contact" className="contact-container min-h-[50vh]">
      <h2 className="text-4xl font-bold text-center mb-12 text-amber-50 skills-title">Contact</h2>
      <div className="contacts-wrapper">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            style={{ "--icon-color": contact.color }}
          >
            <div className="icon">{contact.icon}</div>
            <span className="name">{contact.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
