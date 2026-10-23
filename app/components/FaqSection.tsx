import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "Is there parking?", a: "Yes. Free parking is available at the Expo Grounds with a shuttle to the main gate." },
  { q: "Can I bring my own vehicle?", a: "Owners can register a vehicle for the show. Contact us with photos and details." },
  { q: "Are kids welcome?", a: "Children under 10 enter free with an adult. Ear protection is recommended near the arena." },
  { q: "What if it rains?", a: "The show runs rain or shine. Stunt shows may be adjusted for safety." },
];

export function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <h2 className="text-3xl font-bold md:text-4xl">Good to <span className="text-primary">know</span></h2>
        <Accordion type="single" collapsible className="mt-6">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}