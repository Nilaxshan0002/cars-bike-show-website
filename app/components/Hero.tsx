import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { CarArt } from "./CarArt";

export function Hero() {
  return (
    <section className="group relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_75%_40%,hsl(var(--primary)/0.28),transparent)]" />
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-[58%] h-0.5 w-40 animate-speed bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="absolute left-0 top-[68%] h-0.5 w-56 animate-speed bg-gradient-to-r from-transparent via-primary to-transparent [animation-delay:0.8s] [animation-duration:2s]" />
        <div className="absolute left-0 top-[78%] h-0.5 w-32 animate-speed bg-gradient-to-r from-transparent via-accent to-transparent [animation-delay:1.5s] [animation-duration:2.8s]" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Annual Edition
          </p>
          <h1 className="animate-fade-in text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            Cars and bikes.
            <span className="block bg-gradient-primary bg-clip-text text-transparent">Pure adrenaline.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Three days with supercars, classics, superbikes and custom builds. Live stunts, drift shows and awards.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/tickets">Get Tickets <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/vehicles">Browse Vehicles</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-accent" /> 14 - 16 August</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Expo Grounds, Speedway Ave</span>
          </div>
        </div>
        <div className="animate-float">
          <CarArt className="w-full text-primary drop-shadow-[0_20px_40px_hsl(var(--primary)/0.35)]" />
        </div>
      </div>
    </section>
  );
}