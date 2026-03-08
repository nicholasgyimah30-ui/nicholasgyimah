import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const posts = [
  { title: "The Global Competitiveness Signal Stack™", teaser: "Why the signals that make talent visible globally are broken — and a framework to fix them." },
  { title: "Why Many African Graduates Are Globally Invisible", teaser: "Exploring the structural gaps that keep talented graduates off the global radar." },
  { title: "Transferable Skills for the Future of Work", teaser: "The skills that matter most in a rapidly changing global labor market." },
  { title: "Opportunity Access for African Students", teaser: "How to create pathways that actually connect students to meaningful opportunities." },
  { title: "Rethinking Career Readiness in African Universities", teaser: "Why the current approach isn't working — and what could." },
];

const BlogSection = () => (
  <section id="blog" className="py-20 md:py-28 bg-card">
    <div className="container">
      <AnimatedSection>
        <SectionHeading
          title="Thoughts & Writing"
          subtitle="Exploring the future of work, talent visibility, and opportunity access for African students."
        />
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((p, i) => (
          <AnimatedSection key={p.title} delay={0.1 + i * 0.08}>
            <a
              href="https://nicholasgyimah.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl bg-background border border-border shadow-card hover:shadow-card-hover hover:border-accent/40 transition-all duration-300"
            >
              <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.teaser}</p>
              <span className="mt-4 inline-block text-xs font-semibold text-accent">
                Read on Substack →
              </span>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
