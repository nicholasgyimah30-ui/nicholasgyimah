import AnimatedSection from "./AnimatedSection";
import bgImage from "@/assets/speaking-3.jpg";

const posts = [
  { title: "The Global Competitiveness Signal Stack™", teaser: "Why the signals that make talent visible globally are broken — and a framework to fix them." },
  { title: "Why Many African Graduates Are Globally Invisible", teaser: "Exploring the structural gaps that keep talented graduates off the global radar." },
  { title: "Transferable Skills for the Future of Work", teaser: "The skills that matter most in a rapidly changing global labor market." },
];

const BlogSection = () => (
  <section id="blog" className="relative py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0">
      <img src={bgImage} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy-dark/[0.92]" />
    </div>
    <div className="container relative z-10">
      <AnimatedSection>
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Thoughts & Writing</h2>
          <p className="mt-3 text-primary-foreground/50 text-lg max-w-2xl">
            Exploring the future of work, talent visibility, and opportunity access for African students.
          </p>
          <div className="mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <AnimatedSection key={p.title} delay={0.1 + i * 0.08}>
            <a
              href="https://nicholasgyimah.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/[0.1] hover:border-gold/30 transition-all duration-300"
            >
              <h3 className="font-heading font-semibold text-primary-foreground group-hover:text-gold transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/50">{p.teaser}</p>
              <span className="mt-4 inline-block text-xs font-semibold text-gold">
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
