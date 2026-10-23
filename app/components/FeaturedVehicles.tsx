import { Link } from "@tanstack/react-router";
import { vehicles } from "../lib/vehicles";
import { VehicleCard } from "./VehicleCard";

export function FeaturedVehicles() {
  const featured = [vehicles[0], vehicles[6], vehicles[3]];
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-bold">Featured machines</h2>
        <Link to="/vehicles" className="text-sm font-medium text-primary hover:underline">View all</Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
      </div>
    </section>
  );
}