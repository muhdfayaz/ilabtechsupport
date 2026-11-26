import type { Metadata } from "next";
import { BlogPostPage, postMetadata } from "@/components/pages/blog";

export const metadata: Metadata = postMetadata("ar");

export default function Page() {
  return <BlogPostPage locale="ar" />;
}
