import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const stats = [
  { label: "Mission", text: "Closing the opportunity gap for African talent" },
  { label: "Focus", text: "Future of Work in Africa" },
  { label: "Approach", text: "Programs, Mentorship & Thought Leadership" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-card">
    <div className="container">
      <AnimatedSection>
        <SectionHeading title="About Nicholas" />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
          Nicholas Gyimah is a Ghana-based talent ecosystem builder focused on helping African students translate their skills into globally competitive opportunities. His work sits at the intersection of career development, opportunity access, and the future of work in Africa. Through mentorship, programs, and thought leadership, he supports students in securing internships and building signals that make them visible in global talent markets. Nicholas is particularly interested in solving the structural gaps that make many talented African graduates globally invisible.
        </p>
      </AnimatedSection>
      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={0.2 + i * 0.1}>
            <div className="p-6 rounded-xl bg-background border border-border shadow-card hover:shadow-card-hover transition-shadow">
              <span className="text-2xl">{s.icon}</span>
              <h3 className="mt-3 font-heading font-semibold text-foreground">{s.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
