import { VehicleWheel } from "./VehicleWheel";

export function CarArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} fill="none" role="img" aria-label="Sports car illustration">
      <ellipse cx="200" cy="176" rx="175" ry="8" className="fill-black/50" />
      <path
        d="M30 140 L40 112 Q46 100 64 96 L120 88 L158 58 Q166 52 180 52 L250 52 Q264 52 274 60 L306 88 L350 96 Q368 100 372 116 L376 140 Q376 150 366 150 L34 150 Q28 150 30 140Z"
        fill="currentColor"
      />
      <path d="M168 64 L250 64 L286 90 L132 90Z" className="fill-background/70" />
      <path d="M40 124 L360 124" className="stroke-background/30" strokeWidth="2" />
      <path d="M352 104 L372 108 L372 118 L350 114Z" className="fill-accent" />
      <path d="M32 112 L46 108 L46 120 L32 124Z" className="fill-destructive" />
      <VehicleWheel cx={110} cy={152} r={28} />
      <VehicleWheel cx={290} cy={152} r={28} />
    </svg>
  );
}