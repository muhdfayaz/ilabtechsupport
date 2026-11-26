import type { MetadataRoute } from "next";
import { localePath } from "@/lib/i18n";
import { SERVICE_PAGES } from "@/lib/landing";
import { POSTS } from "@/lib/posts";
import { BRANCHES, SITE_URL } from "@/lib/site";

// Static dates (no `new Date()`): keep in sync when content changes.
const LAST_MOD = "2026-11-23";

type Entry = MetadataRoute.Sitemap[number];

// Every page exists in English and Arabic; each entry lists both as hreflang
// alternates so search engines pair them.
function pair(
  path: string,
  lastModified: string,
  changeFrequency: Entry["changeFrequency"],
  priority: number,
): Entry[] {
  const en = `${SITE_URL}${localePath("en", path)}`;
  const ar = `${SITE_URL}${localePath("ar", path)}`;
  const languages = { en, ar };
  return [
    { url: en, lastModified, changeFrequency, priority, alternates: { languages } },
    {
      url: ar,
      lastModified,
      changeFrequency,
      priority: Math.max(priority - 0.1, 0.1),
      alternates: { languages },
    },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  // /iphone-service-center is intentionally omitted: it canonicalizes to "/".
  return [
    ...pair("/", LAST_MOD, "weekly", 1),
    ...pair("/ilab-approved-phone-1", LAST_MOD, "weekly", 0.9),
    ...pair("/contact-us", LAST_MOD, "monthly", 0.8),
    ...pair("/get-directions-1", LAST_MOD, "monthly", 0.8),
    ...SERVICE_PAGES.flatMap((p) => pair(`/services/${p.slug}`, LAST_MOD, "monthly", 0.8)),
    ...BRANCHES.flatMap((b) => pair(`/locations/${b.id}`, LAST_MOD, "monthly", 0.8)),
    ...pair("/blog", LAST_MOD, "weekly", 0.7),
    ...pair("/social-media", LAST_MOD, "monthly", 0.4),
    ...pair("/privacy-policy", LAST_MOD, "yearly", 0.3),
    ...pair("/terms-and-conditions", LAST_MOD, "yearly", 0.3),
    ...POSTS.flatMap((p) => pair(p.path, p.modified, "monthly", 0.6)),
  ];
}
