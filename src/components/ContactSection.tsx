import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const contactOptions = [
  { label: "Email", value: "nicholasgyimah30@gmail.com", href: "mailto:nicholasgyimah30@gmail.com" },
  { label: "LinkedIn", value: "nicholas-gyimah001", href: "https://www.linkedin.com/in/nicholas-gyimah001/" },
  { label: "Newsletter", value: "nicholasgyimah.substack.com", href: "https://nicholasgyimah.substack.com" },
];

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-card">
    <div className="container max-w-3xl text-center">
      <AnimatedSection>
        <SectionHeading title="Let's Build Together" subtitle="Let's build opportunity pathways for African talent." />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {contactOptions.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-5 rounded-xl bg-background border border-border shadow-card hover:shadow-card-hover hover:border-accent/40 transition-all"
            >
              <span className="text-2xl mb-2">{c.icon}</span>
              <span className="text-xs font-medium text-muted-foreground">{c.label}</span>
              <span className="text-sm font-medium text-foreground mt-1 break-all">{c.value}</span>
            </a>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="text-left text-sm text-muted-foreground space-y-1 mb-8">
          <p>Reach out to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Collaborate on talent development programs</li>
            <li>Invite Nicholas to speak or facilitate workshops</li>
            <li>Partner on initiatives improving student opportunity access</li>
          </ul>
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
