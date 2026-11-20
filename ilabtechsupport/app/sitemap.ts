import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

// Static dates (no `new Date()`): keep in sync when content changes.
const LAST_MOD = "2026-11-20";

export default function sitemap(): MetadataRoute.Sitemap {
  // /iphone-service-center is intentionally omitted: it canonicalizes to "/".
  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/ilab-approved-phone-1", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contact-us", priority: 0.8, changeFrequency: "monthly" },
    { path: "/get-directions-1", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/social-media", priority: 0.4, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
  ];

  return [
    ...pages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: LAST_MOD,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...POSTS.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: p.modified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
