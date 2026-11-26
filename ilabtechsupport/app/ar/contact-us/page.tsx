import type { Metadata } from "next";
import { ContactPage, contactMetadata } from "@/components/pages/contact";

export const metadata: Metadata = contactMetadata("ar");

export default function Page() {
  return <ContactPage locale="ar" />;
}
