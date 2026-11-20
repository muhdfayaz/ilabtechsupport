"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE, waLink } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "./icons";

const HERO_PATHS = new Set(["/", "/iphone-service-center"]);

export function SiteHeader() {
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
          href="/"
          aria-label="iLab Tech Support — home"
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo.png"
            alt="iLab Tech Support logo"
            width={48}
            height={48}
            priority
            className="size-10 rounded-xl md:size-12"
          />
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            iLab <span className="font-normal opacity-70">Tech Support</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
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
            {SITE.phone.display}
          </a>
          <a
            href={waLink("Hi iLab, I'd like to book a repair.")}
            data-track="header"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-wa px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110 sm:flex"
          >
            <WhatsAppIcon width={16} height={16} />
            Book on WhatsApp
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
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
