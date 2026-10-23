import type { VehicleType } from "../lib/vehicles";
import { BikeArt } from "./BikeArt";
import { CarArt } from "./CarArt";

export function VehicleArt({ type, className }: { type: VehicleType; className?: string }) {
  return type === "car" ? <CarArt className={className} /> : <BikeArt className={className} />;
}