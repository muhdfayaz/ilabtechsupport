"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/data/collections";
import { img } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export function ArchiveList() {
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 26, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 26, mass: 0.5 });
  const current = collections.find((c) => c.id === active);

  return (
    <section aria-labelledby="archive-heading" className="border-t border-black/10 bg-white py-10 lg:py-[3.5vw]">
      <div
        className="mx-auto max-w-[1600px] px-5 lg:px-10"
        onPointerMove={(e) => {
          if (e.pointerType !== "mouse") return;
          x.set(e.clientX);
          y.set(e.clientY);
        }}
        onPointerLeave={() => setActive(null)}
      >
        <Reveal className="mb-8 flex items-end justify-between lg:mb-[2.5vw]">
          <h2 id="archive-heading" className="font-display text-[44px] uppercase leading-[0.95] lg:text-[3.6vw]">
            THE INDEX
          </h2>
          <p className="max-w-[16rem] text-right font-mono text-[11px] leading-snug text-black/60 lg:text-[12px]">
            Every collection we have ever made, in one list.
          </p>
        </Reveal>

        <ul className="border-t border-ink">
          {collections.map((c, i) => {
            return (
              <motion.li
                key={c.id}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-ink"
              >
                <Link
                  href={c.href}
                  onPointerEnter={(e) => e.pointerType === "mouse" && setActive(c.id)}
                  onFocus={() => setActive(c.id)}
                  onBlur={() => setActive(null)}
                  className="group relative flex items-center gap-4 overflow-hidden py-5 lg:gap-8 lg:py-[1.6vw]"
                >
                  <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100" />
                  <span className="relative w-14 shrink-0 font-mono text-[12px] font-bold transition-colors duration-300 group-hover:text-white group-focus-visible:text-white lg:w-24 lg:pl-4 lg:text-[14px]">
                    {c.number}
                  </span>
                  <span className="relative flex-1 font-display text-[9vw] uppercase leading-none transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:text-white group-focus-visible:translate-x-3 group-focus-visible:text-white sm:text-[7vw] lg:text-[5vw]">
                    {c.name}
                  </span>
                  <span className="relative hidden font-mono text-[12px] font-bold uppercase tracking-wider transition-colors duration-300 group-hover:text-white sm:block">
                    {c.kind}
                  </span>
                  <span className="relative hidden w-28 text-right font-mono text-[12px] transition-colors duration-300 group-hover:text-white md:block">
                    {c.year}
                  </span>
                  <span className="relative grid size-9 shrink-0 place-items-center transition-all duration-500 group-hover:rotate-45 group-hover:text-white lg:mr-4 lg:size-12">
                    <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-6 lg:size-8" />
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* Cursor-following preview (desktop, pointer devices only) */}
      <AnimatePresence>
        {current && !reduce && (
          <motion.div
            key="preview"
            aria-hidden
            style={{ x: sx, y: sy }}
            className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block"
          >
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative -ml-[140px] -mt-[180px] h-[360px] w-[280px] overflow-hidden bg-ink shadow-2xl"
            >
              <Image
                src={img(current.image, 600)}
                alt=""
                fill
                sizes="280px"
                style={{ objectPosition: current.position }}
                className="object-cover"
              />
              <span className="absolute bottom-2 left-2 bg-white px-2 py-1 font-mono text-[10px] font-bold">
                {current.pieces} PIECES
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
