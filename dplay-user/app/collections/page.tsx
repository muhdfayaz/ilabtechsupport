import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { CollectionsHero } from "@/components/collections/CollectionsHero";
import { FeaturedDrop } from "@/components/collections/FeaturedDrop";
import { CollectionGrid } from "@/components/collections/CollectionGrid";
import { ArchiveList } from "@/components/collections/ArchiveList";
import { BenefitsStrip } from "@/components/home/BenefitsStrip";

export const metadata: Metadata = {
  title: "Collections — DPLAY Clothing",
  description:
    "Browse every DPLAY collection: DROP_003 The Outline, archive drops, core essentials and seasonal capsules.",
};

export default function CollectionsPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <CollectionsHero />
        <FeaturedDrop />
        <CollectionGrid />
        <ArchiveList />
        <BenefitsStrip />
      </main>
    </>
  );
}
