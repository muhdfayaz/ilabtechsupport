import type { Metadata } from "next";
import { TermsPage, termsMetadata } from "@/components/pages/legal";

export const metadata: Metadata = termsMetadata("en");

export default function Page() {
  return <TermsPage locale="en" />;
}
