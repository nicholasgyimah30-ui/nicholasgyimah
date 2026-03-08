import AnimatedSection from "./AnimatedSection";
import logoNestle from "@/assets/logo-nestle.jpeg";
import logoSecondLife from "@/assets/logo-secondlife.jpeg";
import logoInternAfrica from "@/assets/logo-internafrica.jpeg";
import logoInternshala from "@/assets/logo-internshala.jpeg";
import logoOQD from "@/assets/logo-oqd.jpeg";
import logoObraLegal from "@/assets/logo-obralegal.jpeg";
import logoUMB from "@/assets/logo-umb.jpeg";
import logoJadaad from "@/assets/logo-jadaad.jpeg";
import logoBMSR from "@/assets/logo-bmsr.jpeg";
import logoPaxRomana from "@/assets/logo-paxromana.jpeg";
import logoYoungo from "@/assets/logo-youngo.jpg";
import logoBlueApp from "@/assets/logo-blue-app.jpg";
import logoClimateReality from "@/assets/logo-climate-reality.jpg";
import logoCrest from "@/assets/logo-crest.jpg";
import logoUGASS from "@/assets/logo-ugass.jpg";
import logoHSE from "@/assets/logo-hse.jpg";
import logoHSBC from "@/assets/logo-hsbc.png";

const companies = [
  { name: "Nestlé", logo: logoNestle },
  { name: "HSBC", logo: logoHSBC },
  { name: "Second Life", logo: logoSecondLife },
  { name: "InternAfrica", logo: logoInternAfrica },
  { name: "Internshala", logo: logoInternshala },
  { name: "Only Quality Data", logo: logoOQD },
  { name: "OBRA LEGAL LP", logo: logoObraLegal },
  { name: "Universal Merchant Bank", logo: logoUMB },
  { name: "Jadaad Technologies", logo: logoJadaad },
  { name: "Bureau of Market & Social Research", logo: logoBMSR },
  { name: "IMCS Pax Romana", logo: logoPaxRomana },
  { name: "YOUNGO UNFCCC", logo: logoYoungo },
  { name: "Blue App", logo: logoBlueApp },
  { name: "The Climate Reality Project", logo: logoClimateReality },
  { name: "University Crest", logo: logoCrest },
  { name: "UGASS", logo: logoUGASS },
  { name: "HSE", logo: logoHSE },
];

const CompaniesSection = () => (
  <section className="py-14 md:py-20 bg-secondary/50 overflow-hidden">
    <div className="container">
      <AnimatedSection>
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent">Experience</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
            Organisations I've Worked With
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((c) => (
            <img
              key={c.name}
              src={c.logo}
              alt={c.name}
              className="h-10 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CompaniesSection;
