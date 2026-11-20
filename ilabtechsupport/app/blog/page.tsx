import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero, Section } from "@/components/ui";
import {
  breadcrumbSchema,
  buildMetadata,
  graph,
  webPageSchema,
} from "@/lib/seo";
import { POSTS } from "@/lib/posts";

const TITLE = "Blog | iLab Tech Support Bahrain";
const DESC =
  "Repair guides, device care tips and news from iLab Tech Support's service centers in Bahrain.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: "/blog",
});

export default function BlogIndex() {
  return (
    <>
      <JsonLd
        data={graph(
          { ...webPageSchema(TITLE, DESC, "/blog"), "@type": "CollectionPage" },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        )}
      />
      <PageHero
        title="The iLab blog"
        intro="Repair guides, device care tips and news from our Bahrain service centers."
        crumbs={[{ name: "Home", href: "/" }, { name: "Blog" }]}
      />
      <Section title="Latest posts">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <Link
                href={p.path}
                className="group flex h-full flex-col justify-between rounded-3xl border border-black/5 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <time
                    dateTime={p.published}
                    className="text-xs uppercase tracking-widest text-charcoal/70"
                  >
                    {p.published}
                  </time>
                  <h2 className="mt-3 text-2xl font-semibold">{p.title}</h2>
                  <p className="mt-3 text-charcoal">{p.description}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                  Read more
                  <ArrowIcon
                    width={16}
                    height={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
