import type { Metadata } from "next";
import { getBranches, getFaqs, getServices, SITE_TEXT } from "./content";
import { localePath, type Locale } from "./i18n";
import { OTHER_LOCATIONS, SITE, SITE_URL } from "./site";

type PageSeo = {
  title: string;
  description: string;
  /** Unlocalized path of this page, e.g. "/contact-us". */
  path: string;
  locale?: Locale;
  /** Canonical path if it differs from `path` (duplicate/alias URLs). */
  canonical?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  locale = "en",
  canonical,
  type = "website",
  noindex,
}: PageSeo): Metadata {
  const base = canonical ?? path;
  const canonicalPath = localePath(locale, base);
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: canonicalPath,
      // Reciprocal hreflang pair + x-default pointing at English.
      languages: {
        en: localePath("en", base),
        ar: localePath("ar", base),
        "x-default": localePath("en", base),
      },
    },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type,
      url: canonicalPath,
      siteName: SITE_TEXT[locale].fullName,
      title,
      description,
      locale: locale === "ar" ? "ar_BH" : SITE.locale,
      alternateLocale: locale === "ar" ? [SITE.locale] : ["ar_BH"],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** Bump when page content changes (static: no `new Date()` under Cache Components). */
export const LAST_UPDATED = "2026-11-23";

const abs = (path: string) => `${SITE_URL}${path}`;

export const ORG_ID = abs("/#organization");
export const WEBSITE_ID = abs("/#website");
const websiteId = (locale: Locale) =>
  locale === "ar" ? abs("/ar#website") : WEBSITE_ID;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.fullName,
    url: abs("/"),
    logo: { "@type": "ImageObject", url: abs("/images/logo.png"), width: 272, height: 273 },
    image: abs("/opengraph-image"),
    telephone: [SITE.phone.tel, SITE.phone2.tel],
    sameAs: [
      ...Object.values(SITE.social).filter(Boolean),
      SITE.youtubeChannel,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: SITE.phone.tel,
        areaServed: "BH",
        availableLanguage: ["en", "ar"],
      },
    ],
  };
}

export function websiteSchema(locale: Locale = "en") {
  return {
    "@type": "WebSite",
    "@id": websiteId(locale),
    url: abs(localePath(locale, "/")),
    name: SITE.name,
    description: SITE_TEXT[locale].description,
    inLanguage: locale,
    publisher: { "@id": ORG_ID },
  };
}

/** One LocalBusiness node per Bahrain branch. */
export function branchSchemas(locale: Locale = "en") {
  const services = getServices(locale);
  return getBranches(locale).map((b) => ({
    "@type": ["ElectronicsStore", "LocalBusiness"],
    "@id": abs(`/#branch-${b.id}`),
    name: b.name,
    url: abs(localePath(locale, "/")),
    image: abs("/opengraph-image"),
    telephone: SITE.phone.tel,
    priceRange: "$$",
    description:
      locale === "ar"
        ? "إصلاح وصيانة أجهزة iPhone وiPad وMacBook وسامسونج وGoogle Pixel وPlayStation في البحرين."
        : "Apple iPhone, iPad, MacBook, Samsung, Google Pixel and PlayStation repair and service in Bahrain.",
    address: {
      "@type": "PostalAddress",
      streetAddress: b.streetAddress,
      addressLocality: b.locality,
      addressRegion: b.region,
      addressCountry: b.country,
    },
    hasMap: b.mapsUrl,
    parentOrganization: { "@id": ORG_ID },
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  }));
}

export function repairServiceSchema(locale: Locale = "en") {
  const ar = locale === "ar";
  return {
    "@type": "Service",
    "@id": abs(ar ? "/ar#service" : "/#service"),
    serviceType: ar ? "إصلاح الهواتف وأجهزة آبل" : "Phone and Apple device repair",
    name: ar ? "إصلاح iPhone وأجهزة آبل في البحرين" : "iPhone & Apple repair in Bahrain",
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: ar ? "البحرين" : "Bahrain" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: ar ? "خدمات الإصلاح" : "Repair services",
      itemListElement: getServices(locale).map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
      })),
    },
  };
}

export function faqSchema(locale: Locale = "en") {
  return {
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: getFaqs(locale).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** `path` is the already-localized path (e.g. "/ar/contact-us"). */
export function webPageSchema(
  name: string,
  description: string,
  path: string,
  locale: Locale = "en",
) {
  return {
    "@type": "WebPage",
    "@id": abs(path),
    url: abs(path),
    name,
    description,
    isPartOf: { "@id": websiteId(locale) },
    dateModified: LAST_UPDATED,
    about: { "@id": ORG_ID },
    inLanguage: locale,
  };
}

export const OTHER_LOCATION_NAMES = OTHER_LOCATIONS.map((l) => l.name);

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
