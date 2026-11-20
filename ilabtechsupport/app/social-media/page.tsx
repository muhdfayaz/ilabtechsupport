import type { Metadata } from "next";
import { SocialIcons } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero, Section } from "@/components/ui";
import {
  breadcrumbSchema,
  buildMetadata,
  graph,
  webPageSchema,
} from "@/lib/seo";
import { SITE } from "@/lib/site";

const TITLE = "Social Media | iLab Tech Support Bahrain";
const DESC =
  "Follow iLab Tech Support on Instagram, TikTok, YouTube and Facebook for repair tips, new arrivals and updates from our Bahrain service centers.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: "/social-media",
});

const LIST = [
  { key: "instagram", label: "Instagram", href: SITE.social.instagram, handle: "@ilabtechsupport" },
  { key: "tiktok", label: "TikTok", href: SITE.social.tiktok, handle: "@ilabtechsupport" },
  { key: "youtube", label: "YouTube", href: SITE.social.youtube, handle: "@ilabtechsupport" },
  { key: "facebook", label: "Facebook", href: SITE.social.facebook, handle: "iLab Tech Support" },
] as const;

export default function SocialPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema(TITLE, DESC, "/social-media"),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Social media", path: "/social-media" },
          ]),
        )}
      />
      <PageHero
        title="Follow iLab"
        intro="Repair tips, new arrivals and behind-the-scenes from our Bahrain service centers."
        crumbs={[{ name: "Home", href: "/" }, { name: "Social media" }]}
      />
      <Section title="Find us online">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LIST.map(({ key, label, href, handle }) => {
            const Icon = SocialIcons[key];
            return (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="flex h-full flex-col rounded-3xl border border-black/5 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon width={28} height={28} />
                  <span className="mt-6 font-display text-xl font-semibold">
                    {label}
                  </span>
                  <span className="mt-1 text-sm text-charcoal">{handle}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </Section>
    </>
  );
}
