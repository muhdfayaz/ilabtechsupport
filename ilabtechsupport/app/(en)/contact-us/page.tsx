import type { Metadata } from "next";
import { ContactPage, contactMetadata } from "@/components/pages/contact";

export const metadata: Metadata = contactMetadata("en");

export default function Page() {
  return <ContactPage locale="en" />;
}
