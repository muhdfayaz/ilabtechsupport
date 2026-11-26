import type { Metadata, Viewport } from "next";
import { Cairo, Noto_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { Analytics } from "@/components/analytics";
import { CookieConsent } from "@/components/cookie-consent";
import { JsonLd } from "@/components/json-ld";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_TEXT } from "@/lib/content";
import { UI } from "@/lib/i18n";
import { graph, organizationSchema, websiteSchema } from "@/lib/seo";
import { SITE, SITE_URL } from "@/lib/site";

const body = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
});

const display = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TEXT.ar.fullName,
  description: SITE_TEXT.ar.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.fullName }],
  creator: SITE.name,
  category: "technology",
  alternates: { canonical: "/ar" },
  openGraph: {
    type: "website",
    siteName: SITE_TEXT.ar.fullName,
    title: SITE_TEXT.ar.fullName,
    description: SITE_TEXT.ar.description,
    url: "/ar",
    locale: "ar_BH",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TEXT.ar.fullName,
    description: SITE_TEXT.ar.description,
  },
  verification: {
    google: SITE.verification.google,
    other: { "facebook-domain-verification": SITE.verification.facebookDomain },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: SITE.themeColor,
};

export default function ArabicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${body.variable} ${display.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <JsonLd data={graph(organizationSchema(), websiteSchema("ar"))} />
        <a
          href="#main"
          className="sr-only z-70 rounded-full bg-white px-4 py-2 text-sm font-medium focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
        >
          {UI.ar.skip}
        </a>
        <SiteHeader locale="ar" />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter locale="ar" />
        <MobileCta locale="ar" />
        <CookieConsent locale="ar" />
        <Analytics />
      </body>
    </html>
  );
}
