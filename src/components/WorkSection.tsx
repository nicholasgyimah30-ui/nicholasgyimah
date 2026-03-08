import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "Intern Africa",
    role: "Founder",
    description: "A platform and community connecting African students with internship opportunities and building career readiness across the continent.",
  },
  {
    name: "Access in Action Program",
    role: "Program Lead / Organizer",
    description: "A student-focused initiative improving access to career opportunities, mentorship, and skill-building resources for early-career African talent.",
  },
  {
    name: "Skill-Up Labs",
    role: "Facilitator",
    description: "Practical workshops helping students identify and develop transferable skills needed for the modern, global workplace.",
  },
  {
    name: "The Global Competitiveness Signal Stack™",
    role: "Author & Researcher",
    description: "A research framework exploring why many Sub-Saharan African graduates remain invisible in global talent markets — and how to fix it.",
  },
];

const WorkSection = () => (
  <section id="work" className="py-20 md:py-28">
    <div className="container">
      <AnimatedSection>
        <SectionHeading title="Work & Ventures" />
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.name} delay={0.1 + i * 0.08}>
            <div className="group p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover hover:border-accent/40 transition-all duration-300">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-3">
                {p.role}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
