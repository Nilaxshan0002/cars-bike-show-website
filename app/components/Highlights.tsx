import { Flame, Trophy, Users, Wind } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Flame, title: "Live stunts", text: "Freestyle riders and precision drivers perform daily on the main arena." },
  { icon: Wind, title: "Drift battles", text: "Pro drivers go sideways through a floodlit course every evening." },
  { icon: Trophy, title: "Show awards", text: "Judges crown the best builds across classic, custom and modern classes." },
  { icon: Users, title: "Meet owners", text: "Talk to builders and collectors who bring their pride and joy." },
];

export function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <h2 className="text-3xl font-bold md:text-4xl">Why <span className="text-primary">come</span></h2>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {items.map((it) => (
          <Reveal key={it.title}>
            <div className="h-full rounded-xl border border-border/50 bg-card p-5 transition-colors hover:border-primary/60">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}