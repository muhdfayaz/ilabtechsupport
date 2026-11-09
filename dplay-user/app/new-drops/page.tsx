import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { NewDropsHero } from "@/components/newdrops/NewDropsHero";
import { ScanGrid } from "@/components/newdrops/ScanGrid";
import { DropTimeline } from "@/components/newdrops/DropTimeline";
import { Marquee } from "@/components/ui/Marquee";
import { BenefitsStrip } from "@/components/home/BenefitsStrip";
import { dropMarquee } from "@/data/newDrops";

export const metadata: Metadata = {
  title: "New Drops — DPLAY Clothing",
  description: "Fresh DPLAY drops in limited quantities. Shop DROP_003 and get notified before DROP_004 goes live.",
};

export default function NewDropsPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <NewDropsHero />
        <Marquee
          words={dropMarquee}
          reverse
          className="bg-ink py-3 font-display text-[22px] uppercase tracking-wide text-white lg:text-[28px]"
        />
        <ScanGrid />
        <DropTimeline />
        <BenefitsStrip />
      </main>
    </>
  );
}
