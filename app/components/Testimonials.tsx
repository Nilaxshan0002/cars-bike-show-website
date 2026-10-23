import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const quotes = [
  { name: "Marcus L.", role: "Collector", text: "The best lineup I have seen in years. The classics hall alone was worth the trip." },
  { name: "Priya S.", role: "Rider", text: "The stunt show was unreal. We stayed until the last drift battle under the lights." },
  { name: "Tom R.", role: "Builder", text: "Great crowd, great organisation. I met three people who helped finish my project." },
];

export function Testimonials() {
  return (
    <section className="border-y border-border/50 bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">What visitors <span className="text-primary">say</span></h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {quotes.map((q) => (
            <Reveal key={q.name}>
              <figure className="h-full rounded-xl border border-border/50 bg-card p-6">
                <Quote className="h-6 w-6 text-accent" />
                <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">{q.text}</blockquote>
                <figcaption className="mt-4 text-sm font-semibold">
                  {q.name} <span className="font-normal text-muted-foreground">- {q.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}