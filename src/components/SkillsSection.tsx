import AnimatedSection from "./AnimatedSection";
import bgImage from "@/assets/speaking-2.jpg";

const skills = [
  "Talent Development & Career Readiness",
  "Program Design & Facilitation",
  "Student Mentorship",
  "Opportunity Ecosystem Building",
  "Future of Work Research",
  "Community Building",
  "Talent Operations",
  "Strategic Thinking & Framework Development",
];

const SkillsSection = () => (
  <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0">
      <img src={bgImage} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy-dark/[0.93]" />
    </div>
    <div className="container relative z-10">
      <AnimatedSection>
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Areas of Expertise</h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-primary-foreground/[0.08] border border-primary-foreground/15 text-primary-foreground/80 hover:border-gold/50 hover:text-gold hover:bg-gold/10 transition-all duration-300"
            >
              {s}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SkillsSection;
