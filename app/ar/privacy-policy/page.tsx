import type { Metadata } from "next";
import { PrivacyPage, privacyMetadata } from "@/components/pages/legal";

export const metadata: Metadata = privacyMetadata("ar");

export default function Page() {
  return <PrivacyPage locale="ar" />;
}
