import { Mail, Linkedin, PenLine } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const contactOptions = [
  {
    label: "Email",
    href: "mailto:nicholasgyimah30@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicholas-gyimah001/",
    icon: Linkedin,
  },
  {
    label: "Substack",
    href: "https://nicholasgyimah.substack.com",
    icon: PenLine,
  },
];

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-card">
    <div className="container max-w-3xl text-center">
      <AnimatedSection>
        <SectionHeading title="Let's Build Together" subtitle="Let's build opportunity pathways for African talent." />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="flex justify-center gap-5 mb-12">
          {contactOptions.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full border border-border bg-background text-muted-foreground hover:text-accent hover:border-accent hover:shadow-gold transition-all duration-300"
              aria-label={c.label}
            >
              <c.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="text-sm text-muted-foreground space-y-2 mb-10">
          <p className="font-medium text-foreground">Reach out to:</p>
          <p>Collaborate on talent development programs</p>
          <p>Invite Nicholas to speak or facilitate workshops</p>
          <p>Partner on initiatives improving student opportunity access</p>
        </div>
        <a
          href="mailto:nicholasgyimah30@gmail.com"
          className="inline-flex items-center px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity"
        >
          Book a Call / Collaborate
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
