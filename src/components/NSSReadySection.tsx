import { Check, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const REGISTER_URL = "https://forms.gle/DzFapsAQsXDwnaUt8";

const curriculum = [
  {
    week: "Module 1",
    title: "Positioning & Personal Brand",
    description: "Define your professional identity and craft a story that stands out to employers and global opportunities.",
  },
  {
    week: "Module 2",
    title: "CV, LinkedIn & Digital Presence",
    description: "Build a recruiter-ready CV and an optimized LinkedIn profile that signals competence at a global standard.",
  },
  {
    week: "Module 3",
    title: "Opportunity Discovery & Applications",
    description: "Find high-quality internships, fellowships, and roles — and apply with strategy, not guesswork.",
  },
  {
    week: "Module 4",
    title: "Interviews & Workplace Readiness",
    description: "Practice interview frameworks, professional communication, and workplace habits that win offers and trust.",
  },
];

const includes = [
  "Live group mentorship sessions",
  "Personalized CV & LinkedIn review",
  "Opportunity database & weekly leads",
  "Private community of NSS personnel",
  "Certificate of completion",
  "Direct access to Nicholas & guest mentors",
];

const RegisterButton = ({
  label = "Register Now",
  variant = "primary",
  className = "",
}: {
  label?: string;
  variant?: "primary" | "outline";
  className?: string;
}) => {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-foreground shadow-gold hover:opacity-90"
      : "border border-border text-foreground hover:bg-secondary";
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {label}
      <ArrowRight size={16} />
    </a>
  );
};

const NSSReadySection = () => (
  <section id="nss-ready" className="py-20 md:py-28 bg-secondary/40">
    <div className="container">
      <AnimatedSection>
        <SectionHeading
          title="NSS Ready Mentorship Program"
          subtitle="A focused mentorship program built for National Service personnel ready to turn their service year into a launchpad for global opportunities."
        />
      </AnimatedSection>

      {/* Curriculum */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {curriculum.map((m, i) => (
          <AnimatedSection key={m.title} delay={0.1 + i * 0.08}>
            <div className="group h-full p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover hover:border-accent/40 transition-all duration-300">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-3">
                {m.week}
              </span>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                {m.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* End-of-curriculum CTA */}
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16 p-6 rounded-xl bg-card border border-border">
          <div>
            <h4 className="font-heading font-bold text-lg text-foreground">Ready to commit to the next 4 weeks?</h4>
            <p className="text-sm text-muted-foreground mt-1">Spots are limited each cohort — secure yours today.</p>
          </div>
          <RegisterButton label="Enroll Today" />
        </div>
      </AnimatedSection>

      {/* Pricing */}
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="p-8 rounded-xl bg-card border border-border shadow-card">
            <h4 className="font-heading font-bold text-xl text-foreground mb-4">What's Included</h4>
            <ul className="space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-navy-gradient text-primary-foreground border border-border shadow-card-hover flex flex-col">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              Cohort Pricing
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-heading text-5xl md:text-6xl font-bold text-gradient-gold">
                GHS 150
              </span>
            </div>
            <p className="text-sm opacity-80 mb-6">
              One-time payment for the full 4-module program. No hidden fees.
            </p>
            <ul className="space-y-2 text-sm opacity-90 mb-8">
              <li className="flex items-center gap-2"><Check size={16} className="text-accent" /> Full program access</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-accent" /> Lifetime community access</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-accent" /> Certificate on completion</li>
            </ul>
            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <RegisterButton label="Register Now" />
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-accent/40 text-accent-foreground/90 font-semibold text-sm hover:bg-accent/10 transition-colors"
              >
                Have questions?
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default NSSReadySection;
