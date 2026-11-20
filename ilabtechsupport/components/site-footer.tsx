import Image from "next/image";
import Link from "next/link";
import { BRANCHES, SITE } from "@/lib/site";
import { SocialIcons } from "./icons";

const SOCIALS = [
  { key: "facebook", label: "Facebook", href: SITE.social.facebook },
  { key: "instagram", label: "Instagram", href: SITE.social.instagram },
  { key: "tiktok", label: "TikTok", href: SITE.social.tiktok },
  { key: "youtube", label: "YouTube", href: SITE.social.youtube },
] as const;

export function SiteFooter() {
  return (
    <footer className="on-dark bg-[#0b0b0c] pb-28 pt-16 text-white/70 md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="iLab Tech Support logo"
              width={56}
              height={56}
              className="size-14 rounded-2xl"
            />
            <span className="font-display text-lg font-semibold text-white">
              iLab Tech Support
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Your trusted tech partner in Apple products. Professional iPhone,
            iPad, MacBook, Samsung, Google Pixel and PlayStation repairs across
            Bahrain.
          </p>
          <ul className="mt-6 flex gap-3">
            {SOCIALS.map(({ key, label, href }) => {
              const Icon = SocialIcons[key];
              return (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white hover:text-black"
                  >
                    <Icon width={18} height={18} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Explore
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["/", "iPhone Service Center"],
              ["/ilab-approved-phone-1", "iLab Approved Phone"],
              ["/get-directions-1", "Get Directions"],
              ["/blog", "Blog"],
              ["/social-media", "Social Media"],
              ["/contact-us", "Contact Us"],
              ["/privacy-policy", "Privacy Policy"],
              ["/terms-and-conditions", "Terms and Conditions"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Bahrain branches
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {BRANCHES.map((b) => (
              <li key={b.id}>
                <a
                  href={b.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {b.area}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={`tel:${SITE.phone.tel}`} className="transition hover:text-white">
                {SITE.phone.display}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phone2.tel}`} className="transition hover:text-white">
                {SITE.phone2.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="break-all transition hover:text-white">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-2 border-t border-white/10 px-5 pt-6 text-xs md:flex-row md:justify-between">
        <p>
          © {SITE.year} iLab Tech Support, Bahrain. All rights reserved.
        </p>
        <p>Powered by {SITE.poweredBy}</p>
      </div>
    </footer>
  );
}
