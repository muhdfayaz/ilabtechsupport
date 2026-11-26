import type { Metadata } from "next";
import { BlogPostPage, postMetadata } from "@/components/pages/blog";

export const metadata: Metadata = postMetadata("en");

export default function Page() {
  return <BlogPostPage locale="en" />;
}
