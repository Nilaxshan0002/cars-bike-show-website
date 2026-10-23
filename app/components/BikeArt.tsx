import { VehicleWheel } from "./VehicleWheel";

export function BikeArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} fill="none" role="img" aria-label="Motorcycle illustration">
      <ellipse cx="200" cy="184" rx="170" ry="7" className="fill-black/50" />
      <line x1="310" y1="142" x2="280" y2="80" className="stroke-foreground/70" strokeWidth="7" strokeLinecap="round" />
      <line x1="90" y1="142" x2="170" y2="120" className="stroke-foreground/70" strokeWidth="7" strokeLinecap="round" />
      <rect x="168" y="108" width="62" height="34" rx="6" className="fill-muted stroke-foreground/30" strokeWidth="2" />
      <path d="M130 110 Q150 70 210 78 L270 86 L250 112 Q200 120 130 110Z" fill="currentColor" />
      <path d="M122 104 L92 92 Q80 90 84 100 L132 120Z" fill="currentColor" />
      <path d="M262 74 L304 98 L276 102Z" fill="currentColor" />
      <line x1="280" y1="80" x2="262" y2="66" className="stroke-foreground/70" strokeWidth="6" strokeLinecap="round" />
      <path d="M300 92 L312 96 L304 100Z" className="fill-accent" />
      <VehicleWheel cx={90} cy={142} r={40} />
      <VehicleWheel cx={310} cy={142} r={40} />
    </svg>
  );
}