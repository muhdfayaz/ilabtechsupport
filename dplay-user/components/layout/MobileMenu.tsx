"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navLinks, shopMenu } from "@/data/homepage";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col bg-ink text-white lg:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-16 items-center justify-between px-5">
            <span className="font-display text-3xl">DPLAY</span>
            <button type="button" onClick={onClose} aria-label="Close menu" className="grid size-10 place-items-center">
              <X size={26} />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-10 pt-4">
            <ul className="space-y-1">
              {[{ label: "SHOP", href: "/shop" }, ...navLinks].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={onClose}
                    className="block border-b border-white/15 py-4 font-display text-4xl uppercase"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mb-3 mt-8 font-mono text-xs text-white/50">SHOP BY CATEGORY</p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
              {shopMenu.columns[0].links.concat(shopMenu.columns[1].links.slice(0, 1)).map((l) => (
                <li key={l.label}>
                  <Link href={l.href} onClick={onClose} className="block border border-white/20 px-3 py-3 hover:bg-white hover:text-ink">
                    {l.label.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
