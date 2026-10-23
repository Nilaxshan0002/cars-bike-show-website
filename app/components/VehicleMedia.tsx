import type { Vehicle } from "../lib/vehicles";
import { cn } from "../lib/utils";
import { VehicleArt } from "./VehicleArt";

export function VehicleMedia({ vehicle, className }: { vehicle: Vehicle; className?: string }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br to-card",
        vehicle.tone,
        className,
      )}
    >
      {vehicle.image ? (
        <img src={vehicle.image} alt={vehicle.name} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <VehicleArt
          type={vehicle.type}
          className={cn("w-4/5 transition-transform duration-500 group-hover:-translate-y-1", vehicle.color)}
        />
      )}
    </div>
  );
}