export interface ShowEvent {
  id: string;
  day: string;
  time: string;
  title: string;
  place: string;
  description: string;
}

export const events: ShowEvent[] = [
  { id: "e1", day: "Friday", time: "10:00", title: "Gates Open and Static Display", place: "Main Hall", description: "Walk the floor and meet the owners of over 200 cars and bikes." },
  { id: "e2", day: "Friday", time: "14:00", title: "Classic Cars Parade", place: "Outdoor Track", description: "Vintage icons from the 1960s to the 1990s take a slow lap." },
  { id: "e3", day: "Saturday", time: "11:00", title: "Superbike Stunt Show", place: "Arena", description: "Wheelies, stoppies and burnouts from a professional stunt team." },
  { id: "e4", day: "Saturday", time: "15:00", title: "Drift Exhibition", place: "Outdoor Track", description: "Pro drivers slide through the course in tuned machines." },
  { id: "e5", day: "Sunday", time: "12:00", title: "Custom Build Awards", place: "Main Hall", description: "Judges crown the best custom car and bike of the year." },
  { id: "e6", day: "Sunday", time: "16:00", title: "Grand Finale Rev Battle", place: "Arena", description: "Engines roar in a closing show that ends with fireworks." },
];