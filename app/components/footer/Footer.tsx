"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";

import ScrollWrapper from "@/app/components/layout/ScrollWrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#home", label: "home" },
    { href: "#about", label: "about" },
    { href: "#timeline", label: "timeline" },
    { href: "#projects", label: "projects" },
    { href: "#contact", label: "contact" },
    { href: "/blog", label: "blog" },
  ];

  return (
    <footer className="relative w-full bg-background text-foreground-title transition-colors duration-500">
      {/* Top accent line */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand section */}
          <ScrollWrapper>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold font-lilita-one">
                Marko<span className="text-primary">Sudar</span>
              </h3>
              <p className="text-foreground-text/70 font-code text-sm leading-relaxed">
                <span className="text-primary/70">{`// `}</span>
                Full-stack developer passionate about building innovative
                digital experiences.
              </p>
            </motion.div>
          </ScrollWrapper>

          {/* Navigation links */}
          <ScrollWrapper>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <h4 className="font-code text-sm text-foreground-text/50">
                <span className="text-primary">{`{`}</span> navigation{" "}
                <span className="text-primary">{`}`}</span>
              </h4>
              <nav className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-foreground-text/70 hover:text-primary transition-colors duration-300 font-code text-sm"
                  >
                    .{link.label}()
                  </a>
                ))}
              </nav>
            </motion.div>
          </ScrollWrapper>

          {/* Connect section */}
          <ScrollWrapper>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <h4 className="font-code text-sm text-foreground-text/50">
                <span className="text-primary">{`{`}</span> connect{" "}
                <span className="text-primary">{`}`}</span>
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/marcosudar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-foreground-title/10 hover:bg-primary
                    text-foreground-text/70 hover:text-white
                    transition-all duration-300"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/marcosudar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-foreground-title/10 hover:bg-primary
                    text-foreground-text/70 hover:text-white
                    transition-all duration-300"
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@MarcoSudar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-foreground-title/10 hover:bg-primary
                    text-foreground-text/70 hover:text-white
                    transition-all duration-300"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@marcosudar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-foreground-title/10 hover:bg-primary
                    text-foreground-text/70 hover:text-white
                    transition-all duration-300"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marko-sudar-00918221b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-foreground-title/10 hover:bg-primary
                    text-foreground-text/70 hover:text-white
                    transition-all duration-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://linktr.ee/marcosudar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-foreground-title/10 hover:bg-primary
                    text-foreground-text/70 hover:text-white
                    transition-all duration-300"
                >
                  <SiLinktree className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/sukibk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-foreground-title/10 hover:bg-primary
                    text-foreground-text/70 hover:text-white
                    transition-all duration-300"
                >
                  <FaGithub className="w-5 h-5" />
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
            </motion.div>
          </ScrollWrapper>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-foreground-title/10 mb-6" />

        {/* Bottom section */}
        <ScrollWrapper>
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <p className="text-foreground-text/50 font-code text-xs">
              <span className="text-primary/70">{`// `}</span>
              {currentYear} Marko Sudar. All rights reserved.
            </p>
          </motion.div>
        </ScrollWrapper>

        {/* Code-style closing tag */}
        <ScrollWrapper>
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <p className="text-foreground-text/30 font-code text-xs">
              {`</>`} <span className="text-primary/50">end of portfolio</span>{" "}
              {`</>`}
            </p>
          </motion.div>
        </ScrollWrapper>
      </div>
    </footer>
  );
};

export default Footer;
