import Link from "next/link";
import { BranchCard } from "@/components/branch-card";
import { ArrowIcon, CheckIcon, PlusIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import type { PhotoName } from "@/components/photo";
import { ButtonLink, PageHero, Section } from "@/components/ui";
import { getBranches } from "@/lib/content";
import { LTR, localePath, UI, type Locale } from "@/lib/i18n";
import {
  BRANCH_TEXT,
  SERVICE_PAGES,
  SERVICES_LABEL,
  getServicePage,
} from "@/lib/landing";
import {
  ORG_ID,
  branchSchemas,
  breadcrumbSchema,
  buildMetadata,
  graph,
  webPageSchema,
} from "@/lib/seo";
import { BRANCHES, SITE, SITE_URL, waLink } from "@/lib/site";

const flip = "rtl:-scale-x-100";

/** Banner image per service page; pages without a fitting image have none. */
const SERVICE_PHOTOS: Partial<Record<string, PhotoName>> = {
  "iphone-screen-repair": "showcase",
  "iphone-battery-replacement": "warranty",
  "iphone-water-damage-repair": "water",
};

const L = {
  en: {
    issues: "Problems we fix",
    how: "How it works",
    why: "Why iLab",
    faq: "Frequently asked questions",
    related: "Related services",
    visit: "Visit an iLab service center",
    book: "Book on WhatsApp",
    call: "Call",
    wa: (s: string) => `Hi iLab, I need help with: ${s}`,
    schemaName: (s: string) => `${s} | iLab Tech Support`,
    area: "Bahrain",
  },
  ar: {
    issues: "المشاكل التي نصلحها",
    how: "كيف نعمل",
    why: "لماذا iLab",
    faq: "الأسئلة الشائعة",
    related: "خدمات ذات صلة",
    visit: "زر أحد مراكز خدمة iLab",
    book: "احجز عبر واتساب",
    call: "اتصل",
    wa: (s: string) => `مرحباً iLab، أحتاج مساعدة في: ${s}`,
    schemaName: (s: string) => `${s} | iLab Tech Support`,
    area: "البحرين",
  },
} as const;

function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-black/10 rounded-3xl border border-black/5 bg-white">
      {items.map((f) => (
        <details key={f.q} className="group px-6 py-5 md:px-8">
          <summary className="flex cursor-pointer items-center justify-between gap-6 font-display text-base font-medium md:text-lg">
            {f.q}
            <PlusIcon className="shrink-0 transition group-open:rotate-45" />
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-charcoal">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

function CtaBar({ locale, topic }: { locale: Locale; topic: string }) {
  const l = L[locale];
  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <ButtonLink variant="wa" href={waLink(l.wa(topic))} track="landing">
        {l.book}
      </ButtonLink>
      <ButtonLink variant="light" href={`tel:${SITE.phone.tel}`} track="landing">
        {l.call} <bdi {...LTR}>{SITE.phone.display}</bdi>
      </ButtonLink>
    </div>
  );
}

/* ------------------------------ service pages ----------------------------- */

export const serviceStaticParams = () =>
  SERVICE_PAGES.map((s) => ({ slug: s.slug }));

export function serviceMetadata(locale: Locale, slug: string) {
  const s = getServicePage(slug);
  if (!s) return {};
  return buildMetadata({
    title: s.text[locale].title,
    description: s.text[locale].desc,
    path: `/services/${slug}`,
    locale,
  });
}

export function ServiceLandingPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const s = getServicePage(slug)!;
  const c = s.text[locale];
  const l = L[locale];
  const t = UI[locale];
  const path = localePath(locale, `/services/${slug}`);
  const related = s.related
    .map((r) => getServicePage(r))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema(c.title, c.desc, path, locale),
          {
            "@type": "Service",
            "@id": `${SITE_URL}${path}#service`,
            name: c.h1,
            serviceType: c.nav,
            description: c.desc,
            provider: { "@id": ORG_ID },
            areaServed: { "@type": "Country", name: l.area },
            inLanguage: locale,
          },
          {
            "@type": "FAQPage",
            inLanguage: locale,
            mainEntity: c.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          breadcrumbSchema([
            { name: t.home, path: localePath(locale, "/") },
            { name: SERVICES_LABEL[locale], path: localePath(locale, "/#services") },
            { name: c.nav, path },
          ]),
        )}
      />
      <PageHero
        title={c.h1}
        intro={c.intro}
        photo={
          SERVICE_PHOTOS[slug] ? { name: SERVICE_PHOTOS[slug], locale } : undefined
        }
        crumbs={[
          { name: t.home, href: localePath(locale, "/") },
          { name: SERVICES_LABEL[locale], href: localePath(locale, "/#services") },
          { name: c.nav },
        ]}
      />
      <Section title={l.issues}>
        <div className="grid gap-10 lg:grid-cols-2">
          <ul className="space-y-3">
            {c.issues.map((x) => (
              <li key={x} className="flex items-start gap-3 text-lg text-charcoal">
                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-ink text-white">
                  <CheckIcon width={14} height={14} strokeWidth={3} />
                </span>
                {x}
              </li>
            ))}
          </ul>
          <div className="reveal rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">{l.how}</h2>
            <p className="mt-3 leading-relaxed text-charcoal">{c.process}</p>
            <h3 className="mt-6 text-lg font-semibold">{l.why}</h3>
            <ul className="mt-3 space-y-2 text-charcoal">
              {c.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckIcon width={16} height={16} strokeWidth={3} className="mt-1.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <CtaBar locale={locale} topic={c.nav} />
      </Section>

      <Section title={l.faq} className="bg-white">
        <FaqList items={c.faq} />
      </Section>

      <Section title={l.related}>
        <ul className="grid gap-4 md:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <Link
                href={localePath(locale, `/services/${r.slug}`)}
                className="group card-lift flex items-center justify-between rounded-3xl border border-black/5 bg-white p-6 font-display text-lg font-semibold"
              >
                {r.text[locale].nav}
                <ArrowIcon className={`transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1 ${flip}`} />
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="mb-6 mt-16 text-2xl font-semibold md:text-3xl">{l.visit}</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {getBranches(locale).map((b) => (
            <BranchCard key={b.id} branch={b} locale={locale} />
          ))}
        </div>
      </Section>
    </>
  );
}

/* ------------------------------ branch pages ------------------------------ */

export const branchStaticParams = () => BRANCHES.map((b) => ({ slug: b.id }));

export function branchMetadata(locale: Locale, slug: string) {
  const b = getBranches(locale).find((x) => x.id === slug);
  if (!b) return {};
  const c = BRANCH_TEXT[locale];
  return buildMetadata({
    title: c.title(b.area),
    description: c.desc(b.area),
    path: `/locations/${slug}`,
    locale,
  });
}

export const isService = (slug: string) => Boolean(getServicePage(slug));
export const isBranch = (slug: string) => BRANCHES.some((b) => b.id === slug);

export function BranchLandingPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const branches = getBranches(locale);
  const b = branches.find((x) => x.id === slug)!;
  const c = BRANCH_TEXT[locale];
  const t = UI[locale];
  const path = localePath(locale, `/locations/${slug}`);
  const title = c.title(b.area);
  const desc = c.desc(b.area);
  const faq = [{ q: c.faqQ(b.area), a: c.faqA(b.streetAddress, b.locality) }];
  const others = branches.filter((x) => x.id !== slug);
  const rawBranch = BRANCHES.find((x) => x.id === slug)!;

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema(title, desc, path, locale),
          // Same @id as the home page node, so the branch entity is one thing.
          ...branchSchemas(locale).filter((n) => n["@id"].endsWith(`#branch-${slug}`)),
          {
            "@type": "FAQPage",
            inLanguage: locale,
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          breadcrumbSchema([
            { name: t.home, path: localePath(locale, "/") },
            { name: c.crumbLocations, path: localePath(locale, "/#locations") },
            { name: b.area, path },
          ]),
        )}
      />
      <PageHero
        title={c.h1(b.area)}
        intro={c.intro(b.area)}
        crumbs={[
          { name: t.home, href: localePath(locale, "/") },
          { name: c.crumbLocations, href: localePath(locale, "/#locations") },
          { name: b.area },
        ]}
      />
      <Section title={c.findUs}>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <BranchCard branch={b} locale={locale} />
            <CtaBar locale={locale} topic={b.area} />
          </div>
          <figure className="overflow-hidden rounded-3xl border border-black/5 bg-white">
            <iframe
              title={b.area}
              src={`https://www.google.com/maps?q=${encodeURIComponent(rawBranch.mapsEmbedQuery)}&hl=${locale}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full border-0"
            />
          </figure>
        </div>
      </Section>

      <Section title={c.services} className="bg-white">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_PAGES.map((s) => (
            <li key={s.slug}>
              <Link
                href={localePath(locale, `/services/${s.slug}`)}
                className="group flex items-center justify-between rounded-2xl border border-black/5 px-5 py-4 font-medium transition hover:shadow-lg"
              >
                {s.text[locale].nav}
                <ArrowIcon width={16} height={16} className={`transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1 ${flip}`} />
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="mt-14 text-2xl font-semibold">{c.why}</h2>
        <ul className="mt-4 space-y-2 text-charcoal">
          {c.whyPoints.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <CheckIcon width={16} height={16} strokeWidth={3} className="mt-1.5 shrink-0" />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <FaqList items={faq} />
        </div>
      </Section>

      <Section title={c.otherBranches}>
        <div className="grid gap-5 md:grid-cols-2">
          {others.map((o) => (
            <Link
              key={o.id}
              href={localePath(locale, `/locations/${o.id}`)}
              className="group flex items-center justify-between rounded-3xl border border-black/5 bg-white p-6 transition hover:shadow-lg"
            >
              <span className="font-display text-lg font-semibold">{o.area}</span>
              <ArrowIcon className={`transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1 ${flip}`} />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

