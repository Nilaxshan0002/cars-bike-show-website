import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Gauge, Zap } from "lucide-react";
import { vehicles } from "../lib/vehicles";
import { VehicleMedia } from "../components/VehicleMedia";
import { VehicleCard } from "../components/VehicleCard";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/vehicle/$vehicleId")({
  loader: ({ params }) => {
    const vehicle = vehicles.find((v) => v.id === params.vehicleId);
    if (!vehicle) throw notFound();
    return vehicle;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Vehicle"} - Apex Motor Show` },
      { name: "description", content: loaderData?.description ?? "Vehicle on display at the show." },
      { property: "og:title", content: `${loaderData?.name ?? "Vehicle"} - Apex Motor Show` },
    ],
  }),
  component: VehicleDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Vehicle not found</h1>
      <Link to="/vehicles" className="mt-4 inline-block text-primary hover:underline">Back to vehicles</Link>
    </div>
  ),
});

function VehicleDetail() {
  const vehicle = Route.useLoaderData();
  const related = vehicles.filter((v) => v.type === vehicle.type && v.id !== vehicle.id).slice(0, 3);
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Link to="/vehicles" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to vehicles
      </Link>
      <div className="group grid items-center gap-8 md:grid-cols-2">
        <VehicleMedia vehicle={vehicle} className="h-64 rounded-2xl border border-border/50 md:h-80" />
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{vehicle.maker} - {vehicle.year}</p>
          <h1 className="mt-1 text-4xl font-bold md:text-5xl">{vehicle.name}</h1>
          <p className="mt-4 text-muted-foreground">{vehicle.description}</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-border/50 bg-card p-4">
              <Zap className="h-5 w-5 text-accent" />
              <p className="mt-2 font-display text-2xl font-bold">{vehicle.power}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Power</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-4">
              <Gauge className="h-5 w-5 text-accent" />
              <p className="mt-2 font-display text-2xl font-bold">{vehicle.topSpeed}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Top speed</p>
            </div>
          </div>
          <Button asChild size="lg" className="mt-6"><Link to="/tickets">See it live - get tickets</Link></Button>
        </div>
      </div>
      <h2 className="mb-6 mt-16 text-2xl font-bold">More <span className="text-primary">{vehicle.type === "car" ? "cars" : "bikes"}</span></h2>
      <div className="grid gap-6 md:grid-cols-3">
        {related.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
      </div>
    </div>
  );
}