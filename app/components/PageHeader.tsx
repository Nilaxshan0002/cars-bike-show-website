export function PageHeader({ title, highlight, subtitle }: { title: string; highlight: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(50%_80%_at_80%_0%,hsl(var(--primary)/0.22),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <h1 className="animate-fade-in text-4xl font-bold md:text-5xl">
          {title} <span className="text-primary">{highlight}</span>
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">{subtitle}</p>
      </div>
    </section>
  );
}