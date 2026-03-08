import AnimatedSection from "./AnimatedSection";
import bgImage from "@/assets/speaking-4.jpg";

const testimonials = [
  {
    quote: "Nicholas has a unique ability to break down career development concepts in ways that make them practical and actionable.",
    author: "Program Participant",
  },
  {
    quote: "Through Nicholas's mentorship, I gained clarity on how to position my skills and pursue internship opportunities more strategically.",
    author: "Student Mentee",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0">
      <img src={bgImage} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy-dark/[0.91]" />
    </div>
    <div className="container relative z-10 max-w-3xl">
      <AnimatedSection>
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">What People Say</h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>
      </AnimatedSection>
      <div className="space-y-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={0.1 + i * 0.1}>
            <blockquote className="p-8 rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 backdrop-blur-sm text-center">
              <p className="text-primary-foreground/90 text-lg leading-relaxed italic">"{t.quote}"</p>
              <cite className="mt-4 block text-sm text-gold not-italic">— {t.author}</cite>
            </blockquote>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
