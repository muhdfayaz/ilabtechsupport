import type { Metadata } from "next";
import { BlogIndexPage, blogMetadata } from "@/components/pages/blog";

export const metadata: Metadata = blogMetadata("ar");

export default function Page() {
  return <BlogIndexPage locale="ar" />;
}
