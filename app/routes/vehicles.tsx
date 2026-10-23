import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { vehicles, type VehicleType } from "../lib/vehicles";
import { VehicleCard } from "../components/VehicleCard";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/vehicles")({
  head: () => ({
    meta: [
      { title: "Vehicles - Apex Motor Show" },
      { name: "description", content: "Browse the cars and bikes on display at the show." },
      { property: "og:title", content: "Vehicles - Apex Motor Show" },
    ],
  }),
  component: Vehicles,
});

const filters: { id: "all" | VehicleType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "car", label: "Cars" },
  { id: "bike", label: "Bikes" },
];

function Vehicles() {
  const [filter, setFilter] = useState<"all" | VehicleType>("all");
  const list = vehicles.filter((v) => filter === "all" || v.type === filter);
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold md:text-5xl">The <span className="text-primary">lineup</span></h1>
      <p className="mt-3 text-muted-foreground">Highlights from our 200+ vehicle display.</p>
      <div className="my-8 flex gap-2">
        {filters.map((f) => (
          <Button key={f.id} variant={filter === f.id ? "default" : "outline"} onClick={() => setFilter(f.id)}>
            {f.label}
          </Button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {list.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
      </div>
    </div>
  );
}