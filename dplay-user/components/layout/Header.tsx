"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { navLinks, shopMenu } from "@/data/homepage";
import { img } from "@/lib/images";
import { MobileMenu } from "./MobileMenu";

const linkClass =
  "relative font-mono text-[12px] font-bold uppercase tracking-wide after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100";

export function Header({ cartCount = 0 }: { cartCount?: number }) {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto grid h-16 max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-4 px-5 lg:px-10">
        <Link href="/" aria-label="DPLAY home" className="font-display text-[34px] leading-none lg:text-[38px]">
          DPLAY<sup className="ml-0.5 align-top text-[9px] font-sans">®</sup>
        </Link>

        <nav aria-label="Primary" className="hidden justify-center lg:flex">
          <ul className="flex items-center gap-12">
            <li
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
              onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setShopOpen(false)}
            >
              <button
                type="button"
                aria-expanded={shopOpen}
                aria-controls="shop-menu"
                onClick={() => setShopOpen((o) => !o)}
                onKeyDown={(e) => e.key === "Escape" && setShopOpen(false)}
                className={`${linkClass} py-5`}
              >
                SHOP +
              </button>
              <AnimatePresence>
                {shopOpen && (
                  <motion.div
                    id="shop-menu"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                    className="absolute inset-x-0 top-full border-b border-black/10 bg-white"
                  >
                    <div className="mx-auto grid max-w-[1600px] grid-cols-[repeat(3,1fr)_280px] gap-10 px-10 py-10">
                      {shopMenu.columns.map((col) => (
                        <div key={col.title}>
                          <p className="mb-4 font-mono text-[11px] text-black/50">{col.title}</p>
                          <ul className="space-y-2">
                            {col.links.map((l) => (
                              <li key={l.label}>
                                <Link
                                  href={l.href}
                                  onClick={() => setShopOpen(false)}
                                  className="font-display text-2xl uppercase transition-colors hover:text-black/50"
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link href={shopMenu.feature.href} onClick={() => setShopOpen(false)} className="group relative block h-44 overflow-hidden bg-ink">
                        <Image
                          src={img(shopMenu.feature.image, 600)}
                          alt="DROP_003 campaign"
                          fill
                          sizes="280px"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <span className="absolute bottom-3 left-3 bg-white px-2 py-1 font-mono text-[11px] font-bold">
                          {shopMenu.feature.label} ↗
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-start-3 flex items-center gap-1 sm:gap-3 lg:gap-5">
          <IconButton label="Search"><Search size={22} strokeWidth={1.6} /></IconButton>
          <IconButton label="Account" className="hidden sm:grid"><User size={22} strokeWidth={1.6} /></IconButton>
          <IconButton label="Wishlist" className="hidden sm:grid"><Heart size={22} strokeWidth={1.6} /></IconButton>
          <button
            type="button"
            aria-label={`Shopping bag, ${cartCount} items`}
            className="flex h-10 items-center gap-1.5 px-1.5 transition-transform hover:-translate-y-0.5"
          >
            <ShoppingBag size={22} strokeWidth={1.6} />
            <span className="font-mono text-[12px] font-bold">({cartCount})</span>
          </button>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(true)}
            className="grid size-10 place-items-center lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      <MobileMenu open={mobileOpen} onClose={closeMobile} />
    </header>
  );
}

function IconButton({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`size-10 place-items-center transition-transform duration-200 hover:-translate-y-0.5 ${className || "grid"}`}
    >
      {children}
    </button>
  );
}
