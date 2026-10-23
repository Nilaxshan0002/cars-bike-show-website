import { Link } from "@tanstack/react-router";
import { Gauge } from "lucide-react";

const cols = [
  { title: "Explore", links: [{ to: "/vehicles", label: "Vehicles" }, { to: "/schedule", label: "Schedule" }, { to: "/tickets", label: "Tickets" }] },
  { title: "Company", links: [{ to: "/about", label: "About" }, { to: "/contact", label: "Contact" }] },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-sm text-muted-foreground sm:px-6 md:grid-cols-[2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-bold uppercase text-foreground">
            <Gauge className="h-5 w-5 text-primary" /> Apex Motor Show
          </p>
          <p className="mt-3 max-w-xs">Expo Grounds, 12 Speedway Avenue. Every year, three days of metal and noise.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="mb-3 font-semibold uppercase tracking-widest text-foreground">{c.title}</p>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.to}><Link to={l.to} className="transition-colors hover:text-primary">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/50 py-4 text-center text-xs text-muted-foreground">
        2026 Apex Motor Show. All rights reserved.
      </div>
    </footer>
  );
}