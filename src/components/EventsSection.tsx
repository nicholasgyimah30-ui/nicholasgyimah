import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import speaking1 from "@/assets/speaking-1.jpg";
import speaking2 from "@/assets/speaking-2.jpg";
import speaking3 from "@/assets/speaking-3.jpg";
import speaking4 from "@/assets/speaking-4.jpg";
import flierUgass from "@/assets/flier-ugass.jpg";
import flierBestAsset from "@/assets/flier-best-asset.jpg";
import flierFireside from "@/assets/flier-fireside.jpg";
import flierGamechanger from "@/assets/flier-gamechanger.jpg";
import flierApsuhopsa from "@/assets/flier-apsuhopsa.jpg";

const events = [
  {
    name: "LinkedIn 101",
    type: "Workshop",
    description: "Biochemistry Department — Helping students build professional LinkedIn profiles for career visibility.",
  },
  {
    name: "Career Development Summit",
    type: "Summit",
    description: "Statistics and Actuarial Science Department — A comprehensive career readiness event for students.",
  },
  {
    name: "Personal Branding",
    type: "Workshop",
    description: "Accounting Department — Guiding students on building a strong personal brand for career success.",
  },
  {
    name: "Starting It Right",
    type: "Speaking",
    description: "Economics Department, CEDI Conference Centre — Keynote on starting your career journey with intention.",
  },
  {
    name: "Career Development",
    type: "Speaking",
    description: "UGBS-RS, Amegashie — Career development session for business school students.",
  },
  {
    name: "LinkedIn Essentials with Caleb Shalley",
    type: "Workshop",
    description: "A collaborative workshop on leveraging LinkedIn for professional growth and opportunity access.",
  },
  {
    name: "Teens In AI Hackathon — Accra",
    type: "Hackathon",
    description: "Supporting young talent at the intersection of AI and innovation in Accra.",
  },
  {
    name: "Grad School 101",
    type: "Workshop",
    description: "Helping students navigate the graduate school application process and positioning strategies.",
  },
  {
    name: "First Ghanaian Presenter — UNIV Nigeria",
    type: "International",
    description: "First Ghanaian presenter at the event, representing Ghana on an international stage in Nigeria.",
  },
  {
    name: "Best Camp Tutor — HSE Cultural and Art Camp",
    type: "Recognition",
    description: "Recognized as the Best Camp Tutor at the HSE Cultural and Art Camp.",
  },
];

const speakingPhotos = [
  { src: speaking1, alt: "Nicholas speaking to students at University of Ghana" },
  { src: speaking2, alt: "Nicholas facilitating a panel discussion" },
  { src: speaking3, alt: "Nicholas presenting at UG CEDI Conference Centre" },
  { src: speaking4, alt: "Nicholas delivering a workshop session" },
];

const eventFliers = [
  { src: flierGamechanger, alt: "The Game Changer — International Kingdom Leadership Summit" },
  { src: flierUgass, alt: "UGASS Career Fair 2024/2025" },
  { src: flierBestAsset, alt: "Becoming Your Best Asset — UGBS Accounting Students" },
  { src: flierFireside, alt: "APSU-HOPSA Fireside Chat & Games" },
  { src: flierApsuhopsa, alt: "APSUHOPSA UG — Faith, Humility & New Leadership" },
];

const EventsSection = () => (
  <section id="events" className="py-20 md:py-28">
    <div className="container">
      <AnimatedSection>
        <SectionHeading title="Events & Speaking" />
      </AnimatedSection>

      {/* Speaking Photos */}
      <AnimatedSection delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {speakingPhotos.map((photo, i) => (
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

      {/* Event Fliers */}
      <AnimatedSection delay={0.4}>
        <h3 className="font-heading font-semibold text-lg text-foreground mt-16 mb-6">Featured Event Fliers</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {eventFliers.map((flier, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
            >
              <img
                src={flier.src}
                alt={flier.alt}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </AnimatedSection>

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
