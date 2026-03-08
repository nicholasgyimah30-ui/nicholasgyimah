const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 md:mb-16">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground text-lg max-w-2xl">{subtitle}</p>}
    <div className="mt-4 h-1 w-12 rounded-full bg-accent" />
  </div>
);

export default SectionHeading;
