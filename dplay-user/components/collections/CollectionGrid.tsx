"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type PointerEvent } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { collectionFilters, collections, type Collection, type CollectionFilter } from "@/data/collections";
import { img } from "@/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;

function CollectionCard({ c, index }: { c: Collection; index: number }) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });
  const tall = index === 0;
  const soon = c.status === "COMING SOON";

  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.li
      layout={!reduce}
      initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduce ? undefined : { opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.6, ease, delay: Math.min(index, 5) * 0.06 }}
      className={tall ? "sm:col-span-2 lg:row-span-2" : ""}
      style={{ perspective: 1200 }}
    >
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="h-full">
        <Link
          href={c.href}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          aria-label={`${c.name} — ${c.status}, ${c.pieces} pieces`}
          className={`group relative block overflow-hidden bg-ink text-white ${
            tall ? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[640px]" : "aspect-[4/5]"
          }`}
        >
          <Image
            src={img(c.image, tall ? 1400 : 900)}
            alt={`${c.name} collection`}
            fill
            sizes={tall ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
            style={{ objectPosition: c.position }}
            className="object-cover transition-all duration-[900ms] ease-out group-hover:scale-110 group-hover:saturate-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30 transition-opacity duration-500 group-hover:from-black/95" />

          {/* top meta */}
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 font-mono text-[10px] font-bold uppercase tracking-wider lg:p-5 lg:text-[11px]">
            <span className="bg-ink/80 px-2 py-1 backdrop-blur-sm">{c.number}</span>
            <span className={`px-2 py-1 ${c.status === "LIVE NOW" ? "bg-white text-ink" : "border border-white/70"}`}>
              {c.status === "LIVE NOW" && <span className="mr-1.5 inline-block size-1.5 animate-pulse rounded-full bg-ink align-middle" />}
              {c.status}
            </span>
          </div>

          {/* bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5">
            <p className="mb-1 font-mono text-[10px] font-bold tracking-wider text-white/70 lg:text-[11px]">
              {c.kind} {"//"} {c.year}
            </p>
            <div className="flex items-end justify-between gap-4">
              <h3
                className={`font-display italic uppercase leading-[0.92] -skew-x-6 ${
                  tall ? "text-[13vw] sm:text-[8vw] lg:text-[4.6vw]" : "text-[11vw] sm:text-[5vw] lg:text-[2.6vw]"
                }`}
              >
                {c.name}
              </h3>
              <span
                aria-hidden
                className="grid size-11 shrink-0 place-items-center rounded-full border border-white/80 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-ink"
              >
                <ArrowUpRight size={20} strokeWidth={1.75} />
              </span>
            </div>
            <div className="grid grid-rows-[1fr] transition-all duration-500 ease-out lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] lg:group-focus-visible:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <p className="max-w-md pt-3 text-[13px] leading-snug text-white/85">{c.blurb}</p>
                <p className="pt-2 font-mono text-[11px] font-bold tracking-wider">
                  {c.pieces} PIECES {soon ? "// NOTIFY ME" : "// SHOP NOW"}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.li>
  );
}

export function CollectionGrid() {
  const [filter, setFilter] = useState<CollectionFilter>("ALL");
  const items = filter === "ALL" ? collections : collections.filter((c) => c.kind === filter);
  const count = (f: CollectionFilter) => (f === "ALL" ? collections.length : collections.filter((c) => c.kind === f).length);

  return (
    <section aria-labelledby="grid-heading" className="bg-[#f4f4f4] py-10 lg:py-[3vw]">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
        <div className="mb-8 flex flex-col gap-6 lg:mb-[2.5vw] lg:flex-row lg:items-end lg:justify-between">
          <h2 id="grid-heading" className="font-display text-[44px] uppercase leading-[0.95] lg:text-[3.6vw]">
            PICK YOUR
            <br />
            WORLD
          </h2>
          <div role="tablist" aria-label="Filter collections" className="hide-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:px-0">
            {collectionFilters.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  className={`relative shrink-0 border border-ink px-5 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                    active ? "text-white" : "text-ink hover:bg-ink/5"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 -z-0 bg-ink"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">
                    {f} <sup className="text-[9px]">{String(count(f)).padStart(2, "0")}</sup>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {items.map((c, i) => (
              <CollectionCard key={c.id} c={c} index={i} />
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
