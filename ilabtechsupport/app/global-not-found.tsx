import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SITE_URL } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "Page not found | iLab Tech Support" },
  robots: { index: false, follow: true },
};

// Used for URLs that match no route (the app has two root layouts: English
// and Arabic), so this renders its own <html> and shows both languages.
export default function GlobalNotFound() {
  const btn =
    "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition";
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="grid min-h-screen place-items-center bg-[#0b0b0c] px-5 text-white">
        <main className="max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">404</p>
          <h1 className="text-silver-gradient mt-4 text-4xl font-semibold md:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-white/70">
            The page you&apos;re looking for has moved or doesn&apos;t exist.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {/* Plain anchors: a full load is needed to cross root layouts. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className={`${btn} bg-white text-black hover:bg-white/90`}>
              Back to home
            </a>
            <a
              href="/contact-us"
              className={`${btn} border border-white/30 hover:bg-white/10`}
            >
              Contact us
            </a>
          </div>
          <p dir="rtl" lang="ar" className="mt-10 text-sm text-white/60">
            الصفحة غير موجودة.{" "}
            <a href="/ar" className="underline">
              العودة إلى الصفحة الرئيسية
            </a>
          </p>
        </main>
      </body>
    </html>
  );
}
