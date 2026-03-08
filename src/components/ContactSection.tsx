import { Mail, Linkedin, PenLine, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:nicholasgyimah30@gmail.com",
    icon: Mail,
    hint: "Send a message",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicholas-gyimah001/",
    icon: Linkedin,
    hint: "Let's connect",
  },
  {
    label: "Substack",
    href: "https://nicholasgyimah.substack.com",
    icon: PenLine,
    hint: "Read my writing",
  },
];

const ContactSection = () => (
  <section id="contact" className="relative py-24 md:py-32 bg-navy-gradient overflow-hidden">
    {/* Subtle dot pattern overlay */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: "radial-gradient(white 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }} />

    <div className="container relative z-10 max-w-4xl">
      <AnimatedSection>
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
            Let's Build Together
          </h2>
          <p className="mt-4 text-primary-foreground/60 text-lg max-w-xl mx-auto">
            Building opportunity pathways for African talent — one conversation at a time.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {contactLinks.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/[0.12] hover:border-gold/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/10 group-hover:bg-gold/20 transition-colors">
                <c.icon className="w-5 h-5 text-primary-foreground/70 group-hover:text-gold transition-colors" />
              </div>
              <span className="font-heading font-semibold text-primary-foreground text-sm">{c.label}</span>
              <span className="text-xs text-primary-foreground/40 group-hover:text-primary-foreground/60 transition-colors">{c.hint}</span>
            </a>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-sm text-primary-foreground/50 mb-8">
            <span>Collaborate on programs</span>
            <span className="hidden sm:inline text-primary-foreground/20">·</span>
            <span>Speaking & facilitation</span>
            <span className="hidden sm:inline text-primary-foreground/20">·</span>
            <span>Partnership opportunities</span>
          </div>
          <div>
            <a
              href="mailto:nicholasgyimah30@gmail.com"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-navy font-heading font-bold text-sm shadow-gold hover:shadow-[0_6px_28px_-4px_hsl(40_90%_55%_/_0.5)] hover:scale-[1.02] transition-all duration-300"
            >
              Book a Call / Collaborate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
