import { createFileRoute } from "@tanstack/react-router";
import { events } from "../lib/events";
import { EventRow } from "../components/EventRow";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule - Apex Motor Show" },
      { name: "description", content: "Full three-day schedule of parades, stunts, drifts and awards." },
      { property: "og:title", content: "Schedule - Apex Motor Show" },
    ],
  }),
  component: Schedule,
});

const days = ["Friday", "Saturday", "Sunday"];

function Schedule() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold md:text-5xl">Event <span className="text-primary">schedule</span></h1>
      {days.map((day) => (
        <section key={day} className="mt-10">
          <h2 className="mb-4 text-2xl font-bold">{day}</h2>
          <div className="space-y-4">
            {events.filter((e) => e.day === day).map((e) => <EventRow key={e.id} event={e} />)}
          </div>
        </section>
      ))}
    </div>
  );
}