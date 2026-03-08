import AnimatedSection from "./AnimatedSection";
import bgImage from "@/assets/speaking-3.jpg";
import linkedinPost1 from "@/assets/linkedin-post-1.png";
import linkedinPost2 from "@/assets/linkedin-post-2.png";
import linkedinPost3 from "@/assets/linkedin-post-3.png";

const substackPosts = [
  { title: "The Global Competitiveness Signal Stack™", teaser: "Why the signals that make talent visible globally are broken — and a framework to fix them." },
  { title: "Why Many African Graduates Are Globally Invisible", teaser: "Exploring the structural gaps that keep talented graduates off the global radar." },
  { title: "Transferable Skills for the Future of Work", teaser: "The skills that matter most in a rapidly changing global labor market." },
];

const linkedinPosts = [
  {
    src: linkedinPost1,
    alt: "Top 3 LinkedIn Hacks Using AI You Haven't Tried Yet",
    title: "Top 3 LinkedIn Hacks Using AI You Haven't Tried Yet",
    url: "https://www.linkedin.com/posts/nicholas-gyimah001_i-used-to-think-linkedin-optimization-updating-activity-7373664295559086080-_VyI",
  },
  {
    src: linkedinPost2,
    alt: "I Was Spending 2+ Hours Optimizing Every CV… Then This Hack Saved Me",
    title: "CV Optimization Hack That Saved Me 2+ Hours",
    url: "https://www.linkedin.com/posts/nicholas-gyimah001_i-used-to-spend-2-hours-every-single-day-activity-7372564513742659584-YHGu",
  },
  {
    src: linkedinPost3,
    alt: "5 Free Job Simulations That Can Replace No Internship Experience",
    title: "5 Free Job Simulations to Replace "No Internship Experience"",
    url: "https://www.linkedin.com/posts/nicholas-gyimah001_students-internships-careergrowth-activity-7419794363746013184-X91n",
  },
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

      {/* LinkedIn Featured Posts */}
      <AnimatedSection delay={0.1}>
        <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-6">
          Featured LinkedIn Posts
        </h3>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {linkedinPosts.map((post, i) => (
          <AnimatedSection key={post.title} delay={0.12 + i * 0.08}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden border border-primary-foreground/10 bg-primary-foreground/[0.06] backdrop-blur-sm hover:border-gold/30 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={post.src}
                  alt={post.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-heading font-semibold text-sm text-primary-foreground group-hover:text-gold transition-colors leading-snug">
                  {post.title}
                </h4>
                <span className="mt-2 inline-block text-xs font-semibold text-gold">
                  View on LinkedIn →
                </span>
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>

      {/* Substack Writing */}
      <AnimatedSection delay={0.3}>
        <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-6">
          The Global Competitiveness Field Manual — Substack
        </h3>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {substackPosts.map((p, i) => (
          <AnimatedSection key={p.title} delay={0.32 + i * 0.08}>
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
