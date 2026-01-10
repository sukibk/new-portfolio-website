"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#timeline", label: "Timeline" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative w-full bg-background text-foreground-title transition-colors duration-500">
      {/* Top accent line */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-lilita-one">
              Marko<span className="text-primary">Sudar</span>
            </h3>
            <p className="text-foreground-text/70 font-code text-sm leading-relaxed">
              <span className="text-primary/70">{`// `}</span>
              Full-stack developer passionate about building innovative digital experiences.
            </p>
          </div>

          {/* Navigation links */}
          <div className="space-y-4">
            <h4 className="font-code text-sm text-foreground-text/50">
              <span className="text-primary">{`{`}</span> navigation <span className="text-primary">{`}`}</span>
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground-text/70 hover:text-primary transition-colors duration-300 font-code text-sm"
                >
                  .{link.label.toLowerCase()}()
                </a>
              ))}
            </nav>
          </div>

          {/* Connect section */}
          <div className="space-y-4">
            <h4 className="font-code text-sm text-foreground-text/50">
              <span className="text-primary">{`{`}</span> connect <span className="text-primary">{`}`}</span>
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/msudar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-foreground-title/10 hover:bg-primary
                  text-foreground-text/70 hover:text-white
                  transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/markosudar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-foreground-title/10 hover:bg-primary
                  text-foreground-text/70 hover:text-white
                  transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@markosudar.com"
                className="p-2 rounded-lg bg-foreground-title/10 hover:bg-primary
                  text-foreground-text/70 hover:text-white
                  transition-all duration-300"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
            <p className="text-foreground-text/50 font-code text-xs">
              contact@markosudar.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-foreground-title/10 mb-6" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-text/50 font-code text-xs">
            <span className="text-primary/70">{`// `}</span>
            {currentYear} Marko Sudar. All rights reserved.
          </p>
          <p className="text-foreground-text/50 font-code text-xs flex items-center gap-1">
            Built with <FaHeart className="w-3 h-3 text-primary" /> using Next.js & Tailwind
          </p>
        </div>

        {/* Code-style closing tag */}
        <div className="text-center mt-8">
          <p className="text-foreground-text/30 font-code text-xs">
            {`</>`} <span className="text-primary/50">end of portfolio</span> {`</>`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
