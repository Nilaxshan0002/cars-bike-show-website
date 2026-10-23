export type VehicleType = "car" | "bike";

export interface Vehicle {
  id: string;
  name: string;
  maker: string;
  type: VehicleType;
  year: number;
  power: string;
  topSpeed: string;
  tone: string;
  color: string;
  description: string;
  /** Optional photo URL. When set, it replaces the illustrated artwork. */
  image?: string;
}

export const vehicles: Vehicle[] = [
  { id: "gt-r", name: "GT-R Nismo", maker: "Nissan", type: "car", year: 2023, power: "600 hp", topSpeed: "315 km/h", tone: "from-orange-600/40", color: "text-orange-500", description: "Godzilla returns with a hand-built twin-turbo V6 and aggressive aero that lives on the track." },
  { id: "911", name: "911 GT3 RS", maker: "Porsche", type: "car", year: 2024, power: "518 hp", topSpeed: "296 km/h", tone: "from-red-600/40", color: "text-red-500", description: "A naturally aspirated flat-six screaming to 9,000 rpm, wrapped in motorsport-grade downforce." },
  { id: "mustang", name: "Mustang GT500", maker: "Ford", type: "car", year: 1968, power: "355 hp", topSpeed: "210 km/h", tone: "from-amber-500/40", color: "text-amber-400", description: "A muscle car legend with a big-block rumble and pure Detroit attitude." },
  { id: "huracan", name: "Huracan STO", maker: "Lamborghini", type: "car", year: 2022, power: "631 hp", topSpeed: "310 km/h", tone: "from-yellow-500/40", color: "text-yellow-400", description: "A road-legal race car with a screaming V10 and a shark-fin rear deck." },
  { id: "supra", name: "Supra A80", maker: "Toyota", type: "car", year: 1998, power: "320 hp", topSpeed: "250 km/h", tone: "from-rose-600/40", color: "text-rose-500", description: "The iconic 2JZ turbo coupe that became a tuning legend worldwide." },
  { id: "m3", name: "M3 Competition", maker: "BMW", type: "car", year: 2024, power: "503 hp", topSpeed: "290 km/h", tone: "from-sky-600/40", color: "text-sky-500", description: "Twin-turbo straight-six power with daily-driver manners and track-day talent." },
  { id: "panigale", name: "Panigale V4 R", maker: "Ducati", type: "bike", year: 2023, power: "240 hp", topSpeed: "299 km/h", tone: "from-red-600/40", color: "text-red-500", description: "Superbike homologation special with a Desmosedici engine and winglets." },
  { id: "h2r", name: "Ninja H2R", maker: "Kawasaki", type: "bike", year: 2022, power: "310 hp", topSpeed: "400 km/h", tone: "from-lime-500/40", color: "text-lime-400", description: "Supercharged and track-only. One of the fastest production bikes ever built." },
  { id: "s1000", name: "S 1000 RR", maker: "BMW", type: "bike", year: 2024, power: "205 hp", topSpeed: "299 km/h", tone: "from-blue-600/40", color: "text-blue-500", description: "Razor-sharp inline-four with shift-cam tech and class-leading electronics." },
  { id: "fatboy", name: "Fat Boy 114", maker: "Harley-Davidson", type: "bike", year: 2021, power: "92 hp", topSpeed: "180 km/h", tone: "from-zinc-500/40", color: "text-zinc-300", description: "Solid disc wheels, chrome and a deep V-twin thump. Cruiser royalty." },
  { id: "r1", name: "YZF-R1M", maker: "Yamaha", type: "bike", year: 2023, power: "200 hp", topSpeed: "299 km/h", tone: "from-indigo-600/40", color: "text-indigo-400", description: "MotoGP-derived crossplane crank engine with Ohlins electronic suspension." },
  { id: "bonneville", name: "Bonneville T120", maker: "Triumph", type: "bike", year: 1972, power: "47 hp", topSpeed: "170 km/h", tone: "from-emerald-600/40", color: "text-emerald-400", description: "Classic British twin with timeless lines and a gentle burble." },
];