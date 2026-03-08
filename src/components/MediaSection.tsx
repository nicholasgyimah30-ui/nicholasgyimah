import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import flierPodcast from "@/assets/flier-podcast.jpg";
import flierZedfm from "@/assets/flier-zedfm.jpg";
import flierNews from "@/assets/flier-apsuhopsa-news.jpg";

const appearances = [
  {
    src: flierPodcast,
    alt: "Voices of Innovation Podcast — Youth, Internships & Africa's Employment Future",
    type: "Podcast",
    title: "Voices of Innovation Podcast",
    description: "Guest on Episode #10 discussing youth, internships, and Africa's employment future.",
  },
  {
    src: flierZedfm,
    alt: "Next Gen Connect — Zed 101.9 FM with Prof. George Acheampong",
    type: "Radio",
    title: "Next Gen Connect — Zed 101.9 FM",
    description: "From Invisible to Indispensable: Mastering the Art of Securing Internships and Career Opportunities.",
  },
  {
    src: flierNews,
    alt: "Catholic Standard — APSUHOPSA UG Leadership Transition",
    type: "News",
    title: "Catholic Standard Feature",
    description: "Featured in Catholic Standard for leadership transition as outgoing President of APSU-HOPSA UG.",
  },
];

const MediaSection = () => (
  <section id="media" className="py-20 md:py-28 bg-card">
    <div className="container">
      <AnimatedSection>
        <SectionHeading title="Media & Appearances" subtitle="Podcast, radio, and press features." />
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-6">
        {appearances.map((item, i) => (
          <AnimatedSection key={item.title} delay={0.1 + i * 0.1}>
            <div className="group rounded-xl overflow-hidden border border-border bg-background shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-foreground mb-2">
                  {item.type}
                </span>
                <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default MediaSection;
