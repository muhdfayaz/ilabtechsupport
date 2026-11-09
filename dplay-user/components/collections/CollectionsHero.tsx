"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { collections, marqueeWords } from "@/data/collections";
import { img } from "@/lib/images";
import { Marquee } from "@/components/ui/Marquee";
import { ArrowLink } from "@/components/ui/ArrowLink";

const ease = [0.22, 1, 0.36, 1] as const;
const SLIDE_SECONDS = 6;

function Letters({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <>
      {text.split("").map((ch, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pr-[0.02em] align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "115%", rotate: 6 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.045, ease }}
          >
            {ch === " " ? " " : ch}
          </motion.span>
        </span>
      ))}
    </>
  );
}

export function CollectionsHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const current = collections[index];
  const pad = (n: number) => String(n).padStart(2, "0");
  const next = () => setIndex((i) => (i + 1) % collections.length);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "18%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], reduce ? ["0vw", "0vw"] : ["0vw", "14vw"]);
  const xLeft = useTransform(scrollYProgress, [0, 1], reduce ? ["0vw", "0vw"] : ["0vw", "-12vw"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <section
        ref={ref}
        aria-labelledby="collections-heading"
        aria-roledescription="carousel"
        className="relative isolate h-[calc(100svh-6.5rem)] min-h-[600px] overflow-hidden bg-ink text-white lg:max-h-[960px]"
      >
        {/* Full-size background: every collection stacked, cross-fading with a slow zoom */}
        <motion.div style={{ y: bgY }} className="absolute -inset-y-[10%] inset-x-0 -z-10">
          {collections.map((c, i) => {
            const active = i === index;
            return (
              <motion.div
                key={c.id}
                aria-hidden={!active}
                initial={false}
                animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: reduce ? 1 : 1.14 }}
                transition={
                  active
                    ? { opacity: { duration: 1.1 }, scale: { duration: reduce ? 0 : SLIDE_SECONDS + 1, ease: "linear" } }
                    : { opacity: { duration: 1.1 }, scale: { duration: 0, delay: 1.1 } }
                }
                className="absolute inset-0"
              >
                <Image
                  src={img(c.image, 2200)}
                  alt={active ? `${c.name} collection campaign` : ""}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  style={{ objectPosition: c.position }}
                  className="object-cover"
                />
              </motion.div>
            );
          })}
        </motion.div>
        <div aria-hidden className="grain absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/25 to-black/55" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

        <div className="mx-auto flex h-full max-w-[1600px] flex-col justify-between px-5 pb-6 pt-8 lg:px-10 lg:pb-[2vw] lg:pt-[2.5vw]">
          {/* top row */}
          <div className="flex items-start justify-between font-mono text-[11px] font-bold uppercase tracking-wider lg:text-[13px]">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <span className="mr-3 inline-block size-2 animate-pulse rounded-full bg-white align-middle" />
              {"// ARCHIVE INDEX — DROP_003 IS LIVE"}
            </motion.p>
            <p aria-live="polite" className="tabular-nums">
              {pad(index + 1)} / {pad(collections.length)}
            </p>
          </div>

          {/* headline */}
          <h1
            id="collections-heading"
            aria-label="All the collections"
            className="font-display italic uppercase leading-[0.88] -skew-x-6"
          >
            <motion.span style={{ x: xRight, opacity: fade }} className="text-outline block text-[21vw] sm:text-[15vw] lg:text-[12vw]">
              <Letters text="ALL THE" delay={0.15} />
            </motion.span>
            <motion.span style={{ x: xLeft, opacity: fade }} className="block text-[21vw] sm:text-[15vw] lg:text-[12vw]">
              <Letters text="COLLECTIONS" delay={0.45} />
            </motion.span>
          </h1>

          {/* bottom: now-showing + selector */}
          <div className="grid gap-6 border-t border-white/40 pt-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="min-h-[132px] lg:min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease }}
                  className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-8"
                >
                  <div>
                    <p className="font-mono text-[11px] font-bold tracking-wider text-white/80 lg:text-[12px]">
                      NOW SHOWING {"//"} {current.kind} {"//"} {current.status}
                    </p>
                    <p className="font-display text-[34px] italic uppercase leading-none -skew-x-6 lg:text-[3vw]">
                      {current.number} — {current.name}
                    </p>
                    <p className="mt-2 max-w-md font-mono text-[12px] leading-snug text-white/85 lg:text-[13px]">{current.blurb}</p>
                  </div>
                  <ArrowLink href={current.href} variant="light" className="shrink-0 self-start sm:self-end">
                    VIEW {current.pieces} PIECES
                  </ArrowLink>
                </motion.div>
              </AnimatePresence>
            </div>

            <div role="tablist" aria-label="Choose featured collection" className="flex gap-2 lg:gap-3">
              {collections.map((c, i) => {
                const active = i === index;
                return (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={`Show ${c.name}`}
                    onClick={() => setIndex(i)}
                    className="group w-full min-w-9 text-left lg:w-24"
                  >
                    <span className={`block font-mono text-[10px] font-bold transition-opacity lg:text-[11px] ${active ? "opacity-100" : "opacity-50 group-hover:opacity-100"}`}>
                      {c.number}
                    </span>
                    <span className="relative mt-1.5 block h-[3px] overflow-hidden bg-white/30">
                      {active && (
                        <motion.span
                          key={`${c.id}-${index}`}
                          className="absolute inset-0 origin-left bg-white"
                          initial={{ scaleX: reduce ? 1 : 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: reduce ? 0 : SLIDE_SECONDS, ease: "linear" }}
                          onAnimationComplete={() => !reduce && next()}
                        />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Marquee
        words={marqueeWords}
        className="bg-ink py-3 font-display text-[22px] uppercase tracking-wide text-white lg:text-[28px]"
      />
    </>
  );
}
