const brands = ["Porsche", "Ducati", "Lamborghini", "Kawasaki", "BMW M", "Yamaha", "Nissan", "Triumph", "Ford", "Harley-Davidson"];

export function Marquee() {
  const row = [...brands, ...brands];
  return (
    <div className="overflow-hidden border-b border-border/50 bg-card py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {row.map((b, i) => (
          <span key={i} className="font-display text-2xl font-bold uppercase tracking-widest text-muted-foreground/60">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}