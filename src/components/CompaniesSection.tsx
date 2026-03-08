import AnimatedSection from "./AnimatedSection";

const companies = [
  { name: "Nestlé", role: "Financial Services Trainee", period: "Nov 2025 – Present", type: "Contract", location: "Central & West African Region" },
  { name: "Second Life", role: "Coordinator – Ghana", period: "Jul 2025 – Present", type: "Full-time", location: "Ravensburg, Germany · Remote" },
  { name: "InternAfrica", role: "Founder", period: "May 2025 – Present", type: "Full-time", location: "Hybrid" },
  { name: "Internshala", role: "Student Partner", period: "Jan – Apr 2025", type: "Contract", location: "" },
  { name: "Only Quality Data", role: "Data Analyst", period: "Mar – Oct 2024", type: "Internship", location: "Accra · Remote" },
  { name: "OBRA LEGAL LP", role: "Legal Data & Technology Analyst", period: "Aug – Sep 2024", type: "Internship", location: "Enugu, Nigeria" },
  { name: "Universal Merchant Bank", role: "FX Dealer Intern", period: "Mar – May 2024", type: "Internship", location: "Accra" },
  { name: "Jadaad Technologies", role: "Sales & Market Researcher", period: "Feb – Apr 2024", type: "Internship", location: "Accra · Remote" },
  { name: "Bureau of Market & Social Research", role: "Marketing Researcher", period: "Feb – Mar 2024", type: "Internship", location: "Accra" },
  { name: "IMCS Pax Romana – UG", role: "General Secretary", period: "Jul 2023 – Jul 2024", type: "Full-time", location: "Accra" },
];

const CompaniesSection = () => (
  <section className="py-16 md:py-20 bg-secondary/50">
    <div className="container">
      <AnimatedSection>
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent">Experience</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">Companies I've Worked With</h2>
        </div>
      </AnimatedSection>

      {/* Logo strip */}
      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-14">
          {["Nestlé", "Second Life", "InternAfrica", "Universal Merchant Bank", "OBRA LEGAL LP", "Jadaad Technologies"].map((name) => (
            <div
              key={name}
              className="px-5 py-3 rounded-lg bg-card border border-border shadow-card text-sm font-heading font-semibold text-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto space-y-0">
        {companies.map((c, i) => (
          <AnimatedSection key={c.name + c.role} delay={0.15 + i * 0.05}>
            <div className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0 hover:border-accent transition-colors">
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-heading font-semibold text-foreground">{c.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent-foreground font-medium">{c.type}</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">{c.role}</p>
              <p className="text-xs text-muted-foreground/70 mt-0.5">
                {c.period}{c.location ? ` · ${c.location}` : ""}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CompaniesSection;
