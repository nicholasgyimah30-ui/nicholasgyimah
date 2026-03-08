import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

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
  <section id="testimonials" className="py-20 md:py-28">
    <div className="container max-w-3xl">
      <AnimatedSection>
        <SectionHeading title="What People Say" />
      </AnimatedSection>
      <div className="space-y-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={0.1 + i * 0.1}>
            <blockquote className="p-8 rounded-xl bg-card border border-border shadow-card text-center">
              <p className="text-foreground text-lg leading-relaxed italic">"{t.quote}"</p>
              <cite className="mt-4 block text-sm text-muted-foreground not-italic">— {t.author}</cite>
            </blockquote>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
