import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import speaking1 from "@/assets/speaking-1.jpg";
import speaking2 from "@/assets/speaking-2.jpg";
import speaking3 from "@/assets/speaking-3.jpg";
import speaking4 from "@/assets/speaking-4.jpg";

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

const photos = [
  { src: speaking1, alt: "Nicholas speaking to students at University of Ghana" },
  { src: speaking2, alt: "Nicholas facilitating a panel discussion" },
  { src: speaking3, alt: "Nicholas presenting at UG CEDI Conference Centre" },
  { src: speaking4, alt: "Nicholas delivering a workshop session" },
];

const EventsSection = () => (
  <section id="events" className="py-20 md:py-28">
    <div className="container">
      <AnimatedSection>
        <SectionHeading title="Events & Speaking" />
      </AnimatedSection>

      {/* Speaking Photos Gallery */}
      <AnimatedSection delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <div className="space-y-6">
        {events.map((e, i) => (
          <AnimatedSection key={e.name} delay={0.2 + i * 0.08}>
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
      <AnimatedSection delay={0.5}>
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
