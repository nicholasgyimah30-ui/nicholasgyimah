import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile-placeholder.jpg";

const roles = [
  "Talent Ecosystem Builder",
  "Future of Work Advocate",
  "Student Opportunity Strategist",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-dot-pattern overflow-hidden">
      <div className="container relative z-10 py-32 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              📍 Accra, Ghana
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Nicholas<br />
              <span className="text-gradient-gold">Gyimah</span>
            </h1>
            <div className="mt-4 h-8">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="text-lg md:text-xl text-muted-foreground font-medium"
              >
                {roles[roleIndex]}
              </motion.p>
            </div>
            <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
              Building opportunity pathways for African talent in a globally competitive world.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity"
              >
                Book a Call / Collaborate
              </a>
              <a
                href="https://nicholasgyimah.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Read My Writing →
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={profileImg}
                alt="Nicholas Gyimah"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
