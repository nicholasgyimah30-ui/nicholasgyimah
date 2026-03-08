import AnimatedSection from "./AnimatedSection";

const companies = [
  {
    name: "Nestlé",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Nestl%C3%A9.svg/188px-Nestl%C3%A9.svg.png",
  },
  {
    name: "Second Life",
    logo: null,
  },
  {
    name: "InternAfrica",
    logo: null,
  },
  {
    name: "Internshala",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Internshala_logo.svg/200px-Internshala_logo.svg.png",
  },
  {
    name: "Only Quality Data",
    logo: null,
  },
  {
    name: "OBRA LEGAL LP",
    logo: null,
  },
  {
    name: "Universal Merchant Bank",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Universal_Merchant_Bank_logo.png",
  },
  {
    name: "Jadaad Technologies",
    logo: null,
  },
  {
    name: "Bureau of Market & Social Research",
    logo: null,
  },
  {
    name: "IMCS Pax Romana",
    logo: null,
  },
];

const CompaniesSection = () => (
  <section className="py-14 md:py-20 bg-secondary/50 overflow-hidden">
    <div className="container">
      <AnimatedSection>
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent">Experience</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
            Companies I've Worked With
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {companies.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-center h-20 md:h-24 px-4 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300"
            >
              {c.logo ? (
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-10 md:max-h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="font-heading font-bold text-xs md:text-sm text-foreground/70 text-center leading-tight">
                  {c.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CompaniesSection;
