import type { Metadata } from "next";
import { SocialPage, socialMetadata } from "@/components/pages/social";

export const metadata: Metadata = socialMetadata("ar");

export default function Page() {
  return <SocialPage locale="ar" />;
}
