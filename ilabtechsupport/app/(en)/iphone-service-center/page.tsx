import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

// Same content as the homepage (as on the original site). Canonical points at
// "/" so search engines consolidate signals on a single URL.
export const metadata: Metadata = buildMetadata({
  title: SITE.fullName,
  description: SITE.description,
  path: "/iphone-service-center",
  canonical: "/",
});

export default function Page() {
  return <HomePage locale="en" />;
}
