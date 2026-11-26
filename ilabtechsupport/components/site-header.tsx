"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LTR, localePath, UI, type Locale } from "@/lib/i18n";
import { SITE, waLink } from "@/lib/site";
import { LanguageSwitch } from "./language-switch";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "./icons";

const HERO_PATHS = new Set(["/", "/iphone-service-center", "/ar"]);

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const NAV_LINKS = [
    { href: localePath(locale, "/#services"), label: t.nav.services },
    { href: localePath(locale, "/ilab-approved-phone-1"), label: t.nav.approved },
    { href: localePath(locale, "/#locations"), label: t.nav.locations },
    { href: localePath(locale, "/blog"), label: t.nav.blog },
    { href: localePath(locale, "/contact-us"), label: t.nav.contact },
  ];
  const pathname = usePathname();
  const hasHero = HERO_PATHS.has(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !hasHero || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? `border-b border-black/5 text-ink shadow-sm backdrop-blur-xl ${hasHero ? "bg-white/90" : "bg-white"}`
          : "bg-linear-to-b from-black/50 to-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20">
        <Link
          href={localePath(locale, "/")}
          aria-label={t.homeAria}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo.png"
            alt={t.logoAlt}
            width={48}
            height={48}
            priority
            className="size-10 rounded-xl md:size-12"
          />
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            <bdi dir="ltr">
              iLab <span className="font-normal opacity-70">Tech Support</span>
            </bdi>
          </span>
        </Link>

        <nav aria-label={t.mainNav} className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium opacity-80 transition hover:opacity-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phone.tel}`}
            data-track="header"
            className={`hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition md:flex ${
              solid ? "hover:bg-black/5" : "hover:bg-white/10"
            }`}
          >
            <PhoneIcon width={16} height={16} />
            <bdi {...LTR}>{SITE.phone.display}</bdi>
          </a>
          <a
            href={waLink(t.waBook)}
            data-track="header"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-wa px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110 sm:flex"
          >
            <WhatsAppIcon width={16} height={16} />
            {t.bookWa}
          </a>
          <LanguageSwitch
            locale={locale}
            className={`rounded-full border px-3.5 py-2 text-sm font-medium transition ${
              solid
                ? "border-black/10 hover:bg-black/5"
                : "border-white/30 hover:bg-white/10"
            }`}
          />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label={t.mobileNav}
          className="border-t border-black/5 bg-white px-5 pb-6 pt-2 text-ink lg:hidden"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-black/5 py-4 font-display text-lg font-medium"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
