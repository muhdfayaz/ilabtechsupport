import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { AboutHero } from "@/components/about/AboutHero";
import { Manifesto } from "@/components/about/Manifesto";
import { StatsBand } from "@/components/about/StatsBand";
import { StoryScroll } from "@/components/about/StoryScroll";
import { Values } from "@/components/about/Values";
import { PhotoWall } from "@/components/about/PhotoWall";
import { MagneticCta } from "@/components/about/MagneticCta";
import { BenefitsStrip } from "@/components/home/BenefitsStrip";

export const metadata: Metadata = {
  title: "About — DPLAY Clothing",
  description: "DPLAY is experimental streetwear: loud graphics, limited runs, zero apologies. Read our story and what we stand for.",
};

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <AboutHero />
        <Manifesto />
        <StatsBand />
        <StoryScroll />
        <Values />
        <PhotoWall />
        <MagneticCta />
        <BenefitsStrip />
      </main>
    </>
  );
}
