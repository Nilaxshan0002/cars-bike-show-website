import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="rounded-2xl bg-gradient-primary p-8 text-center text-primary-foreground md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">Don't miss the start</h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/85">Tickets are limited. Book your pass today.</p>
          <Button asChild size="lg" variant="secondary" className="mt-6">
            <Link to="/tickets">Book tickets</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}