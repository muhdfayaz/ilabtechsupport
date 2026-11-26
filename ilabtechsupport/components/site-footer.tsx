import Image from "next/image";
import Link from "next/link";
import { getBranches } from "@/lib/content";
import { SERVICE_PAGES, SERVICES_LABEL } from "@/lib/landing";
import { LTR, localePath, UI, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { EmailLink } from "./email-link";
import { SocialIcons } from "./icons";
import { LanguageSwitch } from "./language-switch";

const SOCIALS = [
  { key: "facebook", label: "Facebook", href: SITE.social.facebook },
  { key: "instagram", label: "Instagram", href: SITE.social.instagram },
  { key: "tiktok", label: "TikTok", href: SITE.social.tiktok },
  { key: "youtube", label: "YouTube", href: SITE.social.youtube },
  { key: "x", label: "X", href: SITE.social.x },
  { key: "linkedin", label: "LinkedIn", href: SITE.social.linkedin },
] as const;

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const f = t.footer;
  return (
    <footer className="on-dark bg-[#0b0b0c] pb-28 pt-16 text-white/70 md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link href={localePath(locale, "/")} className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={t.logoAlt}
              width={56}
              height={56}
              className="size-14 rounded-2xl"
            />
            <span className="font-display text-lg font-semibold text-white">
              <bdi dir="ltr">iLab Tech Support</bdi>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {f.blurb}
          </p>
          <ul className="mt-6 flex gap-3">
            {SOCIALS.filter((s) => s.href).map(({ key, label, href }) => {
              const Icon = SocialIcons[key];
              return (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={key === "x" ? f.x : label}
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
            {f.explore}
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {f.links.map(([href, label]) => (
              <li key={href}>
                <Link
                  href={localePath(locale, href)}
                  className="transition hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <LanguageSwitch
                locale={locale}
                className="transition hover:text-white"
              />
            </li>
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            {f.branches}
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            {getBranches(locale).map((b) => (
              <li key={b.id}>
                <a
                  href={b.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white transition hover:underline"
                >
                  {b.area}
                </a>
                <address className="mt-1 not-italic leading-relaxed">
                  {b.streetAddress}, {b.locality}
                  <br />
                  {f.country}
                </address>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            {f.contact}
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={`tel:${SITE.phone.tel}`} className="transition hover:text-white">
                <bdi {...LTR}>{SITE.phone.display}</bdi>
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phone2.tel}`} className="transition hover:text-white">
                <bdi {...LTR}>{SITE.phone2.display}</bdi>
              </a>
            </li>
            <li>
              <EmailLink
                label={t.email}
                className="break-all text-start transition hover:text-white"
              />
            </li>
          </ul>
        </div>
      </div>

      <nav
        aria-label={SERVICES_LABEL[locale]}
        className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-8"
      >
        <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
          {SERVICES_LABEL[locale]}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {SERVICE_PAGES.map((s) => (
            <li key={s.slug}>
              <Link
                href={localePath(locale, `/services/${s.slug}`)}
                className="transition hover:text-white"
              >
                {s.text[locale].nav}
              </Link>
            </li>
          ))}
          {getBranches(locale).map((b) => (
            <li key={b.id}>
              <Link
                href={localePath(locale, `/locations/${b.id}`)}
                className="transition hover:text-white"
              >
                {b.area}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-white/10 px-5 pt-6 text-xs md:flex-row md:justify-between">
        <p>
          © {SITE.year} iLab Tech Support, {f.bahrain}. {f.rights}
        </p>
        <p>
          {f.poweredBy} <bdi dir="ltr">{SITE.poweredBy}</bdi>
        </p>
      </div>
    </footer>
  );
}
