import type { Metadata } from "next";
import { BranchCard } from "@/components/branch-card";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { ButtonLink, PageHero, Section } from "@/components/ui";
import {
  breadcrumbSchema,
  buildMetadata,
  graph,
  webPageSchema,
} from "@/lib/seo";
import { BRANCHES, SITE, waLink } from "@/lib/site";

const TITLE = "Contact us";
const DESC =
  "Contact ilab tech support for customer service and support services. Visit us in person or call us for assistance.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(
          { ...webPageSchema(TITLE, DESC, "/contact-us"), "@type": "ContactPage" },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact us", path: "/contact-us" },
          ]),
        )}
      />
      <PageHero
        title="Contact us"
        intro="Better yet, see us in person! We love our customers, so feel free to visit during normal business hours."
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact us" }]}
      />
      <Section title="Talk to a real technician">
        <div className="grid gap-5 md:grid-cols-3">
          <a
            href={waLink("Hi iLab, I have a question.")}
            data-track="contact"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-wa p-8 text-black transition hover:brightness-105"
          >
            <WhatsAppIcon width={28} height={28} />
            <h3 className="mt-6 text-xl font-semibold">WhatsApp</h3>
            <p className="mt-1 text-sm">{SITE.phone.display} · fastest reply</p>
          </a>
          <a
            href={`tel:${SITE.phone.tel}`}
            data-track="contact"
            className="rounded-3xl bg-ink p-8 text-white transition hover:bg-black"
          >
            <PhoneIcon width={28} height={28} />
            <h3 className="mt-6 text-xl font-semibold">Call us</h3>
            <p className="mt-1 text-sm text-white/70">
              {SITE.phone.display} · {SITE.phone2.display}
            </p>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-3xl border border-black/10 bg-white p-8 transition hover:shadow-lg"
          >
            <span className="grid size-7 place-items-center font-display text-2xl">@</span>
            <h3 className="mt-6 text-xl font-semibold">Email</h3>
            <p className="mt-1 break-all text-sm text-charcoal">{SITE.email}</p>
          </a>
        </div>

        <h2 className="mb-8 mt-20 text-2xl font-semibold md:text-3xl">
          Visit a branch
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {BRANCHES.map((b) => (
            <BranchCard key={b.id} branch={b} />
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/get-directions-1" variant="light">
            Get directions
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
