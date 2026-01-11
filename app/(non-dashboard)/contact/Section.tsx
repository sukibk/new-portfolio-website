"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import ArticleCard from "@/app/components/layout/ArticleCard";
import Button from "@/app/components/layout/Button";
import ScrollWrapper from "@/app/components/layout/ScrollWrapper";
import AngledText from "@/app/components/shared/AngledText";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-[4rem] md:py-[6rem] flex flex-col
        items-center px-5 transition-colors duration-500 w-full
        flex-1 font-lilita-one"
    >
      <ScrollWrapper className="relative pt-5 w-auto mb-8">
        <AngledText side="left" className="left-0 absolute top-[8px]">
          async
        </AngledText>
        <h4 className="text-3xl md:text-4xl lg:text-6xl text-foreground-title">
          <span className="text-sm lg:text-md text-foreground-text/50 font-code">
            await{" "}
          </span>
          send<span className="text-primary">Message</span>
          <span className="text-sm lg:text-md text-foreground-text/50 font-code">
            ()
          </span>
        </h4>
      </ScrollWrapper>

      {/* Code-like description */}
      <ScrollWrapper>
        <motion.div
          className="font-code text-foreground-text/60 dark:text-foreground-text/50 text-xs md:text-sm mb-8 space-y-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <p className="text-center">
            <span className="text-primary/70">{`// `}</span>
            Let&apos;s build something amazing together
          </p>
        </motion.div>
      </ScrollWrapper>

      <div className="w-full max-w-2xl px-4">
        <ArticleCard className="p-6 md:p-8 relative overflow-hidden">
          {/* Subtle gradient accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {submitted ? (
            <div className="text-center py-8 font-code">
              <p className="text-primary text-xl mb-2">
                {`{ status: "success" }`}
              </p>
              <p className="text-foreground-text/70">
                <span className="text-primary/70">{`// `}</span>
                Message sent! I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 font-code">
              {/* Name field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <label className="block text-foreground-text/70 text-sm mb-2">
                  <span className="text-primary/70">const </span>
                  <span className="text-foreground-title">name</span>
                  <span className="text-foreground-text/50"> = </span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder='"Your Name"'
                  className="w-full px-4 py-3 rounded-xl bg-background/50 dark:bg-background/30
                    border-2 border-dashed border-foreground-title/20 dark:border-white/20
                    focus:border-primary focus:border-solid focus:outline-none
                    text-foreground-title placeholder:text-foreground-text/40
                    transition-all duration-300"
                />
              </motion.div>

              {/* Email field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <label className="block text-foreground-text/70 text-sm mb-2">
                  <span className="text-primary/70">const </span>
                  <span className="text-foreground-title">email</span>
                  <span className="text-foreground-text/50"> = </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder='"your@email.com"'
                  className="w-full px-4 py-3 rounded-xl bg-background/50 dark:bg-background/30
                    border-2 border-dashed border-foreground-title/20 dark:border-white/20
                    focus:border-primary focus:border-solid focus:outline-none
                    text-foreground-title placeholder:text-foreground-text/40
                    transition-all duration-300"
                />
              </motion.div>

              {/* Message field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <label className="block text-foreground-text/70 text-sm mb-2">
                  <span className="text-primary/70">const </span>
                  <span className="text-foreground-title">message</span>
                  <span className="text-foreground-text/50"> = </span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder='"Your message here..."'
                  className="w-full px-4 py-3 rounded-xl bg-background/50 dark:bg-background/30
                    border-2 border-dashed border-foreground-title/20 dark:border-white/20
                    focus:border-primary focus:border-solid focus:outline-none
                    text-foreground-title placeholder:text-foreground-text/40
                    transition-all duration-300 resize-none"
                />
              </motion.div>

              {/* Submit button */}
              <motion.div
                className="pt-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Button
                  type="submit"
                  variant="primary"
                  loading={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "sending..." : "submit()"}
                </Button>
              </motion.div>

              {/* Code comment */}
              <motion.p
                className="text-foreground-text/40 text-xs text-center pt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <span className="text-primary/50">{`// `}</span>
                or reach out directly via social links below
              </motion.p>
            </form>
          )}
        </ArticleCard>

        {/* Social links */}
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <a
            href="https://github.com/sukibk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-background/50 dark:bg-background/30
              border-2 border-dashed border-foreground-title/20 dark:border-white/20
              hover:border-primary hover:border-solid hover:bg-primary hover:text-white
              text-foreground-title transition-all duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/marko-sudar-00918221b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-background/50 dark:bg-background/30
              border-2 border-dashed border-foreground-title/20 dark:border-white/20
              hover:border-primary hover:border-solid hover:bg-primary hover:text-white
              text-foreground-title transition-all duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:contact@markosudar.com"
            className="p-3 rounded-xl bg-background/50 dark:bg-background/30
              border-2 border-dashed border-foreground-title/20 dark:border-white/20
              hover:border-primary hover:border-solid hover:bg-primary hover:text-white
              text-foreground-title transition-all duration-300"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
