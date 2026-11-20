import Image from "next/image";
import Link from "next/link";
import { BranchCard } from "@/components/branch-card";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { ArrowIcon, CheckIcon, ShieldIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { RepairFinder } from "@/components/repair-finder";
import { ButtonLink, Section } from "@/components/ui";
import {
  branchSchemas,
  faqSchema,
  graph,
  repairServiceSchema,
  webPageSchema,
} from "@/lib/seo";
import {
  BRANCHES,
  OTHER_LOCATIONS,
  REPAIR_SERVICES,
  SERVICE_KEYWORDS,
  SITE,
  waLink,
} from "@/lib/site";

const TRUST = [
  { k: "120", v: "tests on every ilab approved iPhone" },
  { k: "1 yr", v: "warranty on approved phones & batteries" },
  { k: "3", v: "service centers across Bahrain" },
  { k: "Genuine", v: "original Apple displays for iPhone screen repair" },
];

const PILLARS = [
  {
    title: "iPhone Screen Repair",
    body: "Genuine and original Apple display, fitted by professional technicians.",
  },
  {
    title: "Battery service & replacement",
    body: "Backed by a one-year waterproof warranty.",
  },
  {
    title: "iPhone memory upgrade",
    body: "Need more space? Upgrade your iPhone's memory without changing phones.",
  },
];

export function HomePage({ path }: { path: string }) {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema(
            "iLab Tech Support | iPhone & Apple Repair Bahrain",
            SITE.description,
            path,
          ),
          ...branchSchemas(),
          repairServiceSchema(),
          faqSchema(),
        )}
      />
      <Hero />

      {/* Trust strip */}
      <section aria-label="Why iLab" className="border-b border-black/5 bg-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-10 md:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t.k} className="px-2 py-3 text-center md:px-6">
              <dt className="font-display text-4xl font-semibold md:text-5xl">
                {t.k}
              </dt>
              <dd className="mx-auto mt-2 max-w-[16rem] text-sm text-charcoal">
                {t.v}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Trusted tech partner */}
      <Section
        eyebrow="Your trusted tech partner in Apple products"
        title="Repairs done right, the first time."
        intro="iLab professional technicians serve and satisfy you with fast, reliable service and genuine hospitality. Our main goal is to build trust with every customer."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <article
              key={p.title}
              className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm"
            >
              <span className="font-display text-sm font-semibold text-charcoal/50">
                0{i + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-charcoal">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* iLab approved iPhones */}
      <section
        aria-labelledby="approved-title"
        className="on-dark bg-[#0b0b0c] py-20 text-white md:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Buy from the iLab store
            </p>
            <h2
              id="approved-title"
              className="mt-3 text-3xl font-semibold md:text-5xl"
            >
              iLab approved iPhones
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              We provide one year iLab warranty for the iLab approved
              refurbished iPhone with iLab Shield protection package. Every
              device goes through 120 tests before it reaches you.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "120-point testing before sale",
                "One-year iLab warranty",
                "iLab Shield protection package",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-white text-black">
                    <CheckIcon width={14} height={14} strokeWidth={3} />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/ilab-approved-phone-1"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Shop ilab approved phones <ArrowIcon width={16} height={16} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-5">
            {[
              { src: "/images/badge-approved.png", alt: "ilab Approved Phones - One Year Warranty" },
              { src: "/images/badge-shield.png", alt: "ilab Shield protection package logo" },
              { src: "/images/badge-service.jpg", alt: "ilab Service logo" },
            ].map((b) => (
              <div
                key={b.src}
                className="relative aspect-square overflow-hidden rounded-3xl bg-white"
              >
                <Image
                  src={b.src}
                  alt={b.alt}
                  fill
                  sizes="(min-width:1024px) 200px, 30vw"
                  className="scale-[1.45] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        id="services"
        eyebrow="Service & repair"
        title="Every repair your device needs."
        intro="From cracked screens to water damage, iPhone, iPad, MacBook, Samsung, Google Pixel and PlayStation — handled by iLab professional technicians."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REPAIR_SERVICES.map((s) => (
            <li key={s.slug}>
              <a
                href={waLink(`Hi iLab, I need help with: ${s.title}`)}
                data-track="service-card"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-3xl border border-black/5 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal">
                    {s.blurb}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  Get a quote
                  <ArrowIcon
                    width={16}
                    height={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-3xl border border-black/5 bg-white p-8 md:p-10">
          <h3 className="text-xl font-semibold">Devices &amp; brands we service</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {SERVICE_KEYWORDS.map((k) => (
              <li
                key={k}
                className="rounded-full border border-black/10 px-4 py-2 text-sm text-charcoal"
              >
                {k}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Repair finder */}
      <section
        aria-labelledby="quote-title"
        className="bg-linear-to-b from-paper to-white py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal/70">
              Fast quote
            </p>
            <h2 id="quote-title" className="mt-3 text-3xl font-semibold md:text-5xl">
              Tell us what&apos;s wrong. We&apos;ll reply on WhatsApp.
            </h2>
          </div>
          <RepairFinder />
        </div>
      </section>

      {/* Locations */}
      <Section
        id="locations"
        eyebrow="iLab locations"
        title="Find an iLab service center near you."
        intro="Walk in during business hours or message us first. Three branches across Bahrain, plus partner locations abroad."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {BRANCHES.map((b) => (
            <BranchCard key={b.id} branch={b} />
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {OTHER_LOCATIONS.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-3xl border border-black/5 bg-white p-6 transition hover:shadow-lg"
            >
              <span>
                <span className="block font-display text-lg font-semibold">
                  {l.name}
                </span>
                <span className="text-sm text-charcoal">{l.detail}</span>
              </span>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        eyebrow="Questions"
        title="Frequently asked questions"
        className="bg-linear-to-b from-white to-paper"
      >
        <Faq />
      </Section>

      {/* Final CTA */}
      <section className="on-dark bg-[#0b0b0c] py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-white/10">
            <ShieldIcon width={26} height={26} />
          </span>
          <h2 className="mt-6 text-3xl font-semibold md:text-5xl">
            Ready to get your device fixed?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Message us or call. Our team will tell you exactly what&apos;s
            wrong and what it takes to fix it.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink
              variant="wa"
              href={waLink("Hi iLab, I'd like to book a repair.")}
              track="final-cta"
            >
              Chat on WhatsApp
            </ButtonLink>
            <ButtonLink
              variant="light"
              href={`tel:${SITE.phone.tel}`}
              track="final-cta"
            >
              Call {SITE.phone.display}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
