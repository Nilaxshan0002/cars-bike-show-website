import { Link } from "@tanstack/react-router";
import { events } from "../lib/events";
import { EventRow } from "./EventRow";

export function SchedulePreview() {
  return (
    <section className="border-t border-border/50 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-bold">Highlights</h2>
          <Link to="/schedule" className="text-sm font-medium text-primary hover:underline">Full schedule</Link>
        </div>
        <div className="space-y-4">
          {[events[1], events[2], events[5]].map((e) => <EventRow key={e.id} event={e} />)}
        </div>
      </div>
    </section>
  );
}