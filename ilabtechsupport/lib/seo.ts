import type { Metadata } from "next";
import {
  BRANCHES,
  FAQS,
  OTHER_LOCATIONS,
  REPAIR_SERVICES,
  SITE,
  SITE_URL,
} from "./site";

type PageSeo = {
  title: string;
  description: string;
  /** Path of this page, e.g. "/contact-us". */
  path: string;
  /** Canonical path if it differs from `path` (duplicate/alias URLs). */
  canonical?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  canonical,
  type = "website",
  noindex,
}: PageSeo): Metadata {
  const canonicalPath = canonical ?? path;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalPath },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type,
      url: canonicalPath,
      siteName: SITE.fullName,
      title,
      description,
      locale: SITE.locale,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

const abs = (path: string) => `${SITE_URL}${path}`;

export const ORG_ID = abs("/#organization");
export const WEBSITE_ID = abs("/#website");

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.fullName,
    url: abs("/"),
    logo: { "@type": "ImageObject", url: abs("/images/logo.png"), width: 272, height: 273 },
    image: abs("/opengraph-image"),
    email: SITE.email,
    telephone: [SITE.phone.tel, SITE.phone2.tel],
    sameAs: Object.values(SITE.social),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: SITE.phone.tel,
        email: SITE.email,
        areaServed: "BH",
        availableLanguage: ["en", "ar"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: abs("/"),
    name: SITE.name,
    description: SITE.description,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

/** One LocalBusiness node per Bahrain branch. */
export function branchSchemas() {
  return BRANCHES.map((b) => ({
    "@type": ["ElectronicsStore", "LocalBusiness"],
    "@id": abs(`/#branch-${b.id}`),
    name: b.name,
    url: abs("/"),
    image: abs("/opengraph-image"),
    telephone: SITE.phone.tel,
    email: SITE.email,
    priceRange: "$$",
    description:
      "Apple iPhone, iPad, MacBook, Samsung, Google Pixel and PlayStation repair and service in Bahrain.",
    address: {
      "@type": "PostalAddress",
      streetAddress: b.streetAddress,
      addressLocality: b.locality,
      addressCountry: b.country,
    },
    hasMap: b.mapsUrl,
    parentOrganization: { "@id": ORG_ID },
    makesOffer: REPAIR_SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  }));
}

export function repairServiceSchema() {
  return {
    "@type": "Service",
    "@id": abs("/#service"),
    serviceType: "Phone and Apple device repair",
    name: "iPhone & Apple repair in Bahrain",
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Bahrain" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Repair services",
      itemListElement: REPAIR_SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
      })),
    },
  };
}

export function faqSchema() {
  return {
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
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

export function webPageSchema(name: string, description: string, path: string) {
  return {
    "@type": "WebPage",
    "@id": abs(path),
    url: abs(path),
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export const OTHER_LOCATION_NAMES = OTHER_LOCATIONS.map((l) => l.name);

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
