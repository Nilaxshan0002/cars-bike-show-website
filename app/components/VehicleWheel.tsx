export function VehicleWheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const ri = r * 0.68;
  const spokes = [0, 60, 120].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: Math.cos(rad) * ri, y: Math.sin(rad) * ri };
  });
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} className="fill-background stroke-foreground/30" strokeWidth="4" />
      <g className="origin-center animate-none [transform-box:fill-box] group-hover:animate-spin [animation-duration:0.8s]">
        <circle cx={cx} cy={cy} r={ri} className="fill-muted stroke-foreground/40" strokeWidth="2" />
        {spokes.map((s, i) => (
          <line
            key={i}
            x1={cx - s.x}
            y1={cy - s.y}
            x2={cx + s.x}
            y2={cy + s.y}
            className="stroke-foreground/60"
            strokeWidth="3"
          />
        ))}
      </g>
      <circle cx={cx} cy={cy} r={r * 0.14} className="fill-foreground/70" />
    </g>
  );
}