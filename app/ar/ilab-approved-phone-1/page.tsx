import type { Metadata } from "next";
import { ApprovedPhonePage, approvedMetadata } from "@/components/pages/approved";

export const metadata: Metadata = approvedMetadata("ar");

export default function Page() {
  return <ApprovedPhonePage locale="ar" />;
}
