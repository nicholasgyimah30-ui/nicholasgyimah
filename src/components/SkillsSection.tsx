import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

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
  <section id="skills" className="py-20 md:py-28 bg-card">
    <div className="container">
      <AnimatedSection>
        <SectionHeading title="Areas of Expertise" />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-background border border-border text-foreground hover:border-accent hover:shadow-gold/20 transition-all duration-300"
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
