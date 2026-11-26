import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { ButtonLink, PageHero, Section } from "@/components/ui";
import { getServices } from "@/lib/content";
import { localePath, UI, type Locale } from "@/lib/i18n";
import { getPosts } from "@/lib/posts";
import {
  breadcrumbSchema,
  buildMetadata,
  graph,
  ORG_ID,
  webPageSchema,
} from "@/lib/seo";
import { SITE_URL, waLink } from "@/lib/site";

const COPY = {
  en: {
    title: "iLab Blog | iPhone & Apple Repair Tips from Bahrain",
    desc: "Repair guides, device care tips and news about iPhone, iPad, Samsung and PlayStation service from iLab Tech Support's Bahrain service centers.",
    h1: "The iLab blog",
    intro: "Repair guides, device care tips and news from our Bahrain service centers.",
    crumb: "Blog",
    latest: "Latest posts",
    more: "Read more",
  },
  ar: {
    title: "مدونة iLab | نصائح إصلاح iPhone وأجهزة آبل من البحرين",
    desc: "أدلة إصلاح ونصائح للعناية بالأجهزة وأخبار عن خدمة iPhone وiPad وسامسونج وPlayStation من مراكز خدمة iLab Tech Support في البحرين.",
    h1: "مدونة iLab",
    intro: "أدلة إصلاح ونصائح للعناية بالأجهزة وأخبار من مراكز خدمتنا في البحرين.",
    crumb: "المدونة",
    latest: "أحدث المقالات",
    more: "اقرأ المزيد",
  },
} as const;

export const blogMetadata = (locale: Locale) =>
  buildMetadata({
    title: COPY[locale].title,
    description: COPY[locale].desc,
    path: "/blog",
    locale,
  });

export function BlogIndexPage({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const t = UI[locale];
  const path = localePath(locale, "/blog");
  return (
    <>
      <JsonLd
        data={graph(
          { ...webPageSchema(c.title, c.desc, path, locale), "@type": "CollectionPage" },
          breadcrumbSchema([
            { name: t.home, path: localePath(locale, "/") },
            { name: c.crumb, path },
          ]),
        )}
      />
      <PageHero
        title={c.h1}
        intro={c.intro}
        crumbs={[{ name: t.home, href: localePath(locale, "/") }, { name: c.crumb }]}
      />
      <Section title={c.latest}>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {getPosts(locale).map((p) => (
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
                  {c.more}
                  <ArrowIcon
                    width={16}
                    height={16}
                    className="transition group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
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

const POST = {
  en: {
    intro:
      "iLab Tech Support is a dedicated Apple service centre in Bahrain. Our professional technicians serve you with fast, reliable service and real hospitality — our main goal is to build trust with every customer.",
    h1: "What we repair",
    h2: "Apple, Samsung, Google Pixel & PlayStation",
    p2: "Beyond iPhone, we service iPad, MacBook, Apple AirPods and headsets, Samsung phones (including foldables), Google Pixel phones and PlayStation consoles.",
    h3: "ilab approved phones",
    p3a: "Looking to buy? Our",
    p3link: "ilab approved refurbished iPhones",
    p3b: "go through 120 tests and include a one-year ilab warranty with the ilab Shield protection package.",
    h4: "Visit a service center",
    p4a: "Find us at Dana Mall (Seef), Exhibition Avenue (Hoora) and Umm Al Hassam in Manama.",
    dir: "Get directions",
    or: "or",
    contact: "contact us",
    published: "Published",
    cta: "Book a repair on WhatsApp",
    wa: "Hi iLab, I read your blog and need a repair.",
    brand: "iLab Tech Support Bahrain",
  },
  ar: {
    intro:
      "iLab Tech Support مركز خدمة متخصص بمنتجات آبل في البحرين. يخدمك فنيونا المحترفون بسرعة وموثوقية وحسن ضيافة — فهدفنا الأول هو بناء الثقة مع كل عميل.",
    h1: "ما الذي نصلحه",
    h2: "آبل وسامسونج وGoogle Pixel وPlayStation",
    p2: "إضافة إلى iPhone، نخدم أجهزة iPad وMacBook وسماعات آبل AirPods وهواتف سامسونج (بما فيها القابلة للطي) وهواتف Google Pixel وأجهزة PlayStation.",
    h3: "هواتف iLab المعتمدة",
    p3a: "تفكر في الشراء؟ تخضع",
    p3link: "هواتف iPhone المجددة والمعتمدة من iLab",
    p3b: "لـ120 اختباراً، وتأتي مع ضمان iLab لمدة سنة وباقة الحماية iLab Shield.",
    h4: "زر أحد مراكز الخدمة",
    p4a: "تجدنا في دانة مول (السيف) وشارع المعارض (الحورة) وأم الحصم في المنامة.",
    dir: "احصل على الاتجاهات",
    or: "أو",
    contact: "تواصل معنا",
    published: "نُشر في",
    cta: "احجز إصلاحك عبر واتساب",
    wa: "مرحباً iLab، قرأت مدونتكم وأحتاج إلى إصلاح جهازي.",
    brand: "iLab Tech Support البحرين",
  },
} as const;

export function postMetadata(locale: Locale) {
  const p = getPosts(locale)[0];
  return buildMetadata({
    title: `${p.title} | ${POST[locale].brand}`,
    description: p.description,
    path: "/blog/f/explore-ilab-mobile-services",
    locale,
    type: "article",
  });
}

export function BlogPostPage({ locale }: { locale: Locale }) {
  const c = POST[locale];
  const t = UI[locale];
  const post = getPosts(locale)[0];
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "BlogPosting",
            "@id": `${SITE_URL}${post.path}`,
            mainEntityOfPage: `${SITE_URL}${post.path}`,
            headline: post.title,
            description: post.description,
            datePublished: post.published,
            dateModified: post.modified,
            image: `${SITE_URL}/opengraph-image`,
            author: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
            inLanguage: locale,
          },
          breadcrumbSchema([
            { name: t.home, path: localePath(locale, "/") },
            { name: COPY[locale].crumb, path: localePath(locale, "/blog") },
            { name: post.title, path: post.path },
          ]),
        )}
      />
      <PageHero
        title={post.heading}
        intro={post.title}
        crumbs={[
          { name: t.home, href: localePath(locale, "/") },
          { name: COPY[locale].crumb, href: localePath(locale, "/blog") },
          { name: post.title },
        ]}
      />
      <article className="mx-auto max-w-3xl px-5 py-16 text-lg leading-relaxed text-charcoal [&_a]:font-medium [&_a]:text-ink [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-ink">
        <p>
          <time dateTime={post.published} className="text-sm">
            {c.published} {post.published}
          </time>
        </p>
        <p className="mt-6">{c.intro}</p>

        <h2>{c.h1}</h2>
        <ul className="ms-5 list-disc space-y-2">
          {getServices(locale).map((s) => (
            <li key={s.slug}>
              <strong className="text-ink">{s.title}</strong> — {s.blurb}
            </li>
          ))}
        </ul>

        <h2>{c.h2}</h2>
        <p>{c.p2}</p>

        <h2>{c.h3}</h2>
        <p>
          {c.p3a}{" "}
          <Link href={localePath(locale, "/ilab-approved-phone-1")}>{c.p3link}</Link>{" "}
          {c.p3b}
        </p>

        <h2>{c.h4}</h2>
        <p>
          {c.p4a}{" "}
          <Link href={localePath(locale, "/get-directions-1")}>{c.dir}</Link> {c.or}{" "}
          <Link href={localePath(locale, "/contact-us")}>{c.contact}</Link>.
        </p>

        <div className="mt-12">
          <ButtonLink variant="wa" href={waLink(c.wa)} track="blog-post">
            {c.cta}
          </ButtonLink>
        </div>
      </article>
    </>
  );
}
