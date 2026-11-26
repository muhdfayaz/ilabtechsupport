import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { SITE_TEXT } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: SITE_TEXT.ar.fullName,
  description: SITE_TEXT.ar.description,
  path: "/",
  locale: "ar",
});

export default function Page() {
  return <HomePage locale="ar" />;
}
