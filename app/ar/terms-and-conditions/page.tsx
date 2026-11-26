import type { Metadata } from "next";
import { TermsPage, termsMetadata } from "@/components/pages/legal";

export const metadata: Metadata = termsMetadata("ar");

export default function Page() {
  return <TermsPage locale="ar" />;
}
