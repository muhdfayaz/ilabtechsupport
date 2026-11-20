import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: SITE.fullName,
  description: SITE.description,
  path: "/",
});

export default function Page() {
  return <HomePage path="/" />;
}
