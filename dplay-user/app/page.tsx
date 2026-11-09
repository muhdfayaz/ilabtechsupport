import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { CategorySection } from "@/components/home/CategorySection";
import { NewArrivals } from "@/components/home/NewArrivals";
import { CouponOffer } from "@/components/home/CouponOffer";
import { CampaignBanner } from "@/components/home/CampaignBanner";
import { BenefitsStrip } from "@/components/home/BenefitsStrip";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <NewArrivals />
        <CouponOffer />
        <CampaignBanner />
        <BenefitsStrip />
      </main>
    </>
  );
}
