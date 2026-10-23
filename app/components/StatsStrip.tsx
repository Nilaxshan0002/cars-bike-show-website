const stats = [
  { value: "200+", label: "Vehicles on display" },
  { value: "3", label: "Days of shows" },
  { value: "40", label: "Live events" },
  { value: "25k", label: "Visitors expected" },
];

export function StatsStrip() {
  return (
    <section className="border-b border-border/50 bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-[Oswald] text-3xl font-bold text-primary md:text-4xl">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}