import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { StatsStrip } from "../components/StatsStrip";
import { FeaturedVehicles } from "../components/FeaturedVehicles";
import { Highlights } from "../components/Highlights";
import { SchedulePreview } from "../components/SchedulePreview";
import { Testimonials } from "../components/Testimonials";
import { FaqSection } from "../components/FaqSection";
import { CtaBanner } from "../components/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex Motor Show - Cars and Bike Show" },
      { name: "description", content: "Three days of supercars, classics, superbikes, stunts and awards. Get your tickets." },
      { property: "og:title", content: "Apex Motor Show - Cars and Bike Show" },
      { property: "og:description", content: "Supercars, superbikes, live stunts and custom builds." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <StatsStrip />
      <FeaturedVehicles />
      <Highlights />
      <SchedulePreview />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
    </>
  );
}