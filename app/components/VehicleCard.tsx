import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Vehicle } from "../lib/vehicles";
import { Badge } from "./ui/badge";
import { VehicleMedia } from "./VehicleMedia";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link
      to="/vehicle/$vehicleId"
      params={{ vehicleId: vehicle.id }}
      className="group block overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-elegant)]"
    >
      <VehicleMedia vehicle={vehicle} className="h-44" />
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{vehicle.maker} - {vehicle.year}</p>
            <h3 className="text-xl font-bold">{vehicle.name}</h3>
          </div>
          <Badge variant="secondary" className="capitalize">{vehicle.type}</Badge>
        </div>
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <div><dt className="text-muted-foreground">Power</dt><dd className="font-semibold">{vehicle.power}</dd></div>
          <div><dt className="text-muted-foreground">Top speed</dt><dd className="font-semibold">{vehicle.topSpeed}</dd></div>
        </dl>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
          View details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}