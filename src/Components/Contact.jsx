import React, { useEffect, useRef, useState } from "react";
import { SiLinkedin, SiInstagram, SiGmail } from "react-icons/si";

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const contacts = [
    {
      name: "Email",
      icon: <SiGmail />,
      link: "https://mail.google.com/mail/?view=cm&to=tazkrhgeahmadamen@gmail.com",
      color: "text-red-500",
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/in/ahmad-tazkrhge-4948aa377/",
      color: "text-blue-500",
    },
    {
      name: "Instagram",
      icon: <SiInstagram />,
      link: "https://www.instagram.com/ahmad__tazkrhge/",
      color: "text-pink-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 bg-slate-900 text-white"
    >
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-8 md:px-32">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Contact
        </h2>

        {/* Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl
              bg-slate-800 border border-white/10
              transition-all duration-500 ease-out group overflow-hidden
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              hover:-translate-y-2`}
            >
              {/* Icon */}
              <div
                className={`text-5xl ${contact.color}
                transition-transform duration-300
                group-hover:scale-110`}
              >
                {contact.icon}
              </div>

              {/* Name */}
              <span className="text-lg font-medium text-gray-300">
                {contact.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
