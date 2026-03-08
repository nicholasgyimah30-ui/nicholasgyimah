import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImg from "@/assets/nicholas-gyimah.jpg";

const roles = [
  "Talent Ecosystem Builder",
  "Future of Work Advocate",
  "Student Opportunity Strategist",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Work", "Skills", "Events", "Media", "Blog", "Testimonials", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/90 backdrop-blur-md shadow-card border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2">
          <img src={profileImg} alt="Nicholas Gyimah" className="w-8 h-8 rounded-full object-cover border border-accent" />
          <span className="font-heading font-bold text-lg text-foreground">N<span className="text-accent">G</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-b border-border px-6 pb-4"
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {l}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
