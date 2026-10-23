import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { CtaBanner } from "../components/CtaBanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Apex Motor Show" },
      { name: "description", content: "The story behind Apex Motor Show and what we stand for." },
      { property: "og:title", content: "About - Apex Motor Show" },
    ],
  }),
  component: About,
});

const values = [
  { title: "Community", text: "We bring owners, riders and fans together in one place." },
  { title: "Craft", text: "We celebrate the people who build, restore and tune." },
  { title: "Safety", text: "Every stunt and display follows strict safety standards." },
];

const numbers = [
  { v: "12", l: "Years running" },
  { v: "200+", l: "Vehicles" },
  { v: "45k", l: "Visitors" },
];

function About() {
  return (
    <>
      <PageHeader title="Our" highlight="story" subtitle="A small meetup that grew into a three-day festival of speed." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Apex Motor Show started in a car park with thirty enthusiasts and a borrowed sound system. Today it fills the Expo Grounds with supercars, classics and superbikes, and the same spirit: come for the machines, stay for the people.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          {numbers.map((n) => (
            <Reveal key={n.l}>
              <div className="rounded-xl border border-border/50 bg-card p-5">
                <p className="font-display text-3xl font-bold text-primary md:text-4xl">{n.v}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{n.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <Reveal key={v.title}>
              <div className="h-full rounded-xl border border-border/50 bg-card p-6">
                <h3 className="text-xl font-bold text-accent">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}