import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import bgImage from "@/assets/speaking-1.jpg";

const stats = [
  { label: "Mission", text: "Closing the opportunity gap for African talent" },
  { label: "Focus", text: "Future of Work in Africa" },
  { label: "Approach", text: "Programs, Mentorship & Thought Leadership" },
];

const AboutSection = () => (
  <section id="about" className="relative py-20 md:py-28 overflow-hidden">
    {/* Background image with dark overlay */}
    <div className="absolute inset-0">
      <img src={bgImage} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy-dark/[0.92]" />
    </div>

    <div className="container relative z-10">
      <AnimatedSection>
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">About Nicholas</h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-3xl">
          Nicholas Gyimah is a Ghana-based talent ecosystem builder focused on helping African students translate their skills into globally competitive opportunities. His work sits at the intersection of career development, opportunity access, and the future of work in Africa. Through mentorship, programs, and thought leadership, he supports students in securing internships and building signals that make them visible in global talent markets. Nicholas is particularly interested in solving the structural gaps that make many talented African graduates globally invisible.
        </p>
      </AnimatedSection>
      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={0.2 + i * 0.1}>
            <div className="p-6 rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/[0.1] transition-all">
              <div className="h-1 w-8 rounded-full bg-accent mb-4" />
              <h3 className="font-heading font-semibold text-primary-foreground">{s.label}</h3>
              <p className="mt-1 text-sm text-primary-foreground/60">{s.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
