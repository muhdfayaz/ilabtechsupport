import type { Metadata } from "next";
import { BranchCard } from "@/components/branch-card";
import { JsonLd } from "@/components/json-ld";
import { PageHero, Section } from "@/components/ui";
import {
  breadcrumbSchema,
  buildMetadata,
  graph,
  webPageSchema,
} from "@/lib/seo";
import { BRANCHES } from "@/lib/site";

const TITLE = "Get Directions";
const DESC =
  "Expert Apple iPhone repair at iLab Tech Support. Visit our service center for fast, reliable iPhone repair services in Bahrain. Book your appointment now!";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: "/get-directions-1",
});

export default function DirectionsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema(TITLE, DESC, "/get-directions-1"),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Get directions", path: "/get-directions-1" },
          ]),
        )}
      />
      <PageHero
        title="Get directions"
        intro="iLab Tech Support is a dedicated Apple service centre, specializing in iPhone repair and providing comprehensive iPhone service, including battery replacement and maintenance of all Apple products."
        crumbs={[{ name: "Home", href: "/" }, { name: "Get directions" }]}
      />
      <Section title="Our Bahrain service centers">
        <div className="grid gap-5 md:grid-cols-3">
          {BRANCHES.map((b) => (
            <BranchCard key={b.id} branch={b} />
          ))}
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {BRANCHES.map((b) => (
            <figure
              key={b.id}
              className="overflow-hidden rounded-3xl border border-black/5 bg-white"
            >
              <iframe
                title={`Map of ${b.area}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(b.mapsEmbedQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full border-0"
              />
              <figcaption className="p-4 text-sm font-medium">
                {b.area}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
