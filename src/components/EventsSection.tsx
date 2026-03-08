import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const events = [
  {
    name: "Access in Action Launch Event",
    type: "Program Launch",
    description: "Introductory session presenting the Access in Action initiative to students and early-career professionals.",
  },
  {
    name: "Transferable Skills Skill-Up Lab",
    type: "Workshop",
    description: "A hands-on session helping students identify, articulate, and leverage their transferable skills.",
  },
  {
    name: "Webinar: Navigating the Future of Work in Africa",
    type: "Panel / Webinar",
    description: "A panel discussion exploring career readiness and the evolving global labor market for African talent.",
  },
];

const EventsSection = () => (
  <section id="events" className="py-20 md:py-28">
    <div className="container">
      <AnimatedSection>
        <SectionHeading title="Events & Speaking" />
      </AnimatedSection>
      <div className="space-y-6">
        {events.map((e, i) => (
          <AnimatedSection key={e.name} delay={0.1 + i * 0.08}>
            <div className="relative pl-8 border-l-2 border-border hover:border-accent transition-colors">
              <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-accent" />
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-foreground mb-2">
                {e.type}
              </span>
              <h3 className="font-heading font-semibold text-lg text-foreground">{e.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection delay={0.4}>
        <a
          href="#contact"
          className="inline-block mt-10 text-sm font-semibold text-accent hover:underline"
        >
          Invite Nicholas to Speak or Facilitate →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default EventsSection;
