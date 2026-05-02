import { Check, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const REGISTER_URL = "https://forms.gle/DzFapsAQsXDwnaUt8";

const curriculum = [
  {
    week: "Week 1",
    title: "Identity & Positioning",
    description:
      "Self-assessment, career story, target role clarity, CV built from scratch, and an introduction to personal branding.",
  },
  {
    week: "Week 2",
    title: "Visibility & Digital Presence",
    description:
      "Full LinkedIn overhaul, online portfolio (where applicable), being discovered by recruiters, and a personal branding deep-dive.",
  },
  {
    week: "Week 3",
    title: "Outreach & Applications",
    description:
      "Cold emailing, networking scripts, application strategy for 2 guided roles, cover letters, and follow-up techniques.",
  },
  {
    week: "Week 4",
    title: "Interview Mastery",
    description:
      "Interview frameworks (STAR), common questions by industry, a 1-on-1 mock interview, plus body language and confidence.",
  },
  {
    week: "Week 5",
    title: "Offers, Decisions & Next Steps",
    description:
      "Evaluating and negotiating offers, choosing between opportunities, and building a long-term career trajectory.",
  },
];

const includes = [
  "Recruiter-ready CV built from scratch",
  "Full LinkedIn profile optimisation",
  "Guided mentorship on 2 target applications",
  "1-on-1 intensive interview prep (30 mins)",
  "Cold email & outreach training",
  "Offer evaluation coaching",
  "Personal branding & visibility training",
  "Private cohort WhatsApp community",
  "Free copy of The Global Signal Stack ebook",
];

const valueBreakdown = [
  { item: "The Global Signal Stack ebook", value: "Worth GHS 100" },
  { item: "1-on-1 intensive interview session", value: "Worth GHS 150+" },
  { item: "CV built from scratch", value: "GHS 200–400 elsewhere" },
  { item: "LinkedIn optimisation", value: "GHS 150–300 elsewhere" },
  { item: "5 weeks of group mentorship", value: "Premium coaching" },
];

const faqs = [
  {
    q: "Who is this for?",
    a: "Final year students at any Ghanaian university, students awaiting graduation without an NSS placement, and recent graduates (within 6 months) actively job-seeking.",
  },
  {
    q: "Are sessions live or pre-recorded?",
    a: "All group sessions are live on Zoom/Google Meet. Recordings are shared afterward for members who couldn't attend in real time.",
  },
  {
    q: "I already have a CV. Do I still need to join?",
    a: "Yes. Most CVs students come in with are not recruiter-ready. Week 1 includes a full review and rebuild where necessary.",
  },
  {
    q: "What if I cannot afford GHS 150?",
    a: "Reach out to Nicholas directly on WhatsApp before enrolling. We can't guarantee a discount, but we'll always have a conversation.",
  },
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
        <div className="mb-12 md:mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            NSS Ready · Cohort 1 · by InternAfrica
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            From final year to first placement.
          </h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-2xl">
            A 5-week paid mentorship program for final year students preparing for NSS and their
            first professional placement. Capped at 30 students per cohort.
          </p>
          <div className="mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>
      </AnimatedSection>

      {/* Curriculum */}
      <AnimatedSection>
        <h3 className="font-heading font-bold text-2xl text-foreground mb-6">5-Week Curriculum</h3>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {curriculum.map((m, i) => (
          <AnimatedSection key={m.title} delay={0.1 + i * 0.06}>
            <div className="group h-full p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover hover:border-accent/40 transition-all duration-300">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-3">
                {m.week}
              </span>
              <h4 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                {m.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* End-of-curriculum CTA */}
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16 p-6 rounded-xl bg-card border border-border">
          <div>
            <h4 className="font-heading font-bold text-lg text-foreground">
              Ready to commit to the next 5 weeks?
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Only 30 spots in Cohort 1 — payment confirms your seat.
            </p>
          </div>
          <RegisterButton label="Enroll Today" />
        </div>
      </AnimatedSection>

      {/* Pricing + Includes */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
        <AnimatedSection>
          <div className="h-full p-8 rounded-xl bg-card border border-border shadow-card">
            <h4 className="font-heading font-bold text-xl text-foreground mb-4">What You Get</h4>
            <ul className="space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="h-full p-8 rounded-xl bg-navy-gradient text-primary-foreground border border-border shadow-card-hover flex flex-col">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              Cohort 1 Enrollment Fee
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-heading text-5xl md:text-6xl font-bold text-gradient-gold">
                GHS 150
              </span>
            </div>
            <p className="text-sm opacity-80 mb-6">
              One-time payment. No payment plans. No pay-after-placement. Total estimated value:
              GHS 400+.
            </p>
            <ul className="space-y-2 text-sm opacity-90 mb-8">
              {valueBreakdown.map((v) => (
                <li key={v.item} className="flex items-start justify-between gap-3 border-b border-white/10 pb-2">
                  <span className="flex items-start gap-2">
                    <Check size={16} className="text-accent shrink-0 mt-0.5" /> {v.item}
                  </span>
                  <span className="text-xs opacity-70 whitespace-nowrap">{v.value}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs opacity-70 mb-4">
              Payment via Mobile Money (MoMo). Spot confirmed once payment is received and verified.
            </p>
            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <RegisterButton label="Register Now" />
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-accent/40 text-primary-foreground font-semibold text-sm hover:bg-accent/10 transition-colors"
              >
                Have questions?
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* FAQ */}
      <AnimatedSection>
        <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
          Frequently Asked Questions
        </h3>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((f, i) => (
          <AnimatedSection key={f.q} delay={0.1 + i * 0.06}>
            <div className="h-full p-6 rounded-xl bg-card border border-border shadow-card">
              <h4 className="font-heading font-bold text-base text-foreground mb-2">{f.q}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default NSSReadySection;
