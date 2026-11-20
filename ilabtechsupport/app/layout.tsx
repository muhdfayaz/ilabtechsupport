import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { CookieConsent } from "@/components/cookie-consent";
import { JsonLd } from "@/components/json-ld";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { graph, organizationSchema, websiteSchema } from "@/lib/seo";
import { SITE, SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE.fullName,
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.fullName }],
  creator: SITE.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.fullName,
    title: SITE.fullName,
    description: SITE.description,
    url: "/",
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.fullName,
    description: SITE.description,
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={graph(organizationSchema(), websiteSchema())} />
        <a
          href="#main"
          className="sr-only z-70 rounded-full bg-white px-4 py-2 text-sm font-medium focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileCta />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
