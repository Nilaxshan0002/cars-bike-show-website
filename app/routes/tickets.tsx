import { createFileRoute } from "@tanstack/react-router";
import { TicketForm } from "../components/TicketForm";

export const Route = createFileRoute("/tickets")({
  head: () => ({
    meta: [
      { title: "Tickets - Apex Motor Show" },
      { name: "description", content: "Book day, weekend or VIP passes for the Apex Motor Show." },
      { property: "og:title", content: "Tickets - Apex Motor Show" },
    ],
  }),
  component: Tickets,
});

function Tickets() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold md:text-5xl">Get your <span className="text-primary">tickets</span></h1>
      <p className="mb-8 mt-3 text-muted-foreground">Choose a pass and reserve your spot.</p>
      <TicketForm />
    </div>
  );
}