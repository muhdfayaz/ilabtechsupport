import type { Metadata } from "next";
import { SocialPage, socialMetadata } from "@/components/pages/social";

export const metadata: Metadata = socialMetadata("en");

export default function Page() {
  return <SocialPage locale="en" />;
}
