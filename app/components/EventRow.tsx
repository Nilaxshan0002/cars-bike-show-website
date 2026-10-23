import { Clock, MapPin } from "lucide-react";
import type { ShowEvent } from "../lib/events";

export function EventRow({ event }: { event: ShowEvent }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border/50 bg-card p-5 sm:flex-row sm:items-center">
      <div className="flex items-center gap-2 font-[Oswald] text-2xl font-bold text-primary sm:w-28">
        <Clock className="h-5 w-5" /> {event.time}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold">{event.title}</h3>
        <p className="text-sm text-muted-foreground">{event.description}</p>
      </div>
      <p className="flex items-center gap-1 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4" /> {event.place}
      </p>
    </div>
  );
}