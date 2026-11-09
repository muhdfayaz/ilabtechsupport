"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { chapters, type Chapter } from "@/data/about";
import { img } from "@/lib/images";

function Panel({ c, i, progress }: { c: Chapter; i: number; progress: MotionValue<number> }) {
  const n = chapters.length;
  const center = i / (n - 1);
  // image drifts opposite to the track for depth
  const imgX = useTransform(progress, [center - 0.35, center + 0.35], ["8%", "-8%"]);
  const numX = useTransform(progress, [center - 0.35, center + 0.35], ["20%", "-20%"]);
  return (
    <article className="relative grid h-full w-screen shrink-0 grid-rows-[auto_1fr] gap-4 px-5 py-6 sm:grid-cols-2 sm:grid-rows-1 sm:items-center sm:gap-10 lg:px-[6vw]">
      <motion.span
        aria-hidden
        style={{ x: numX, color: "transparent", WebkitTextStroke: "1.5px rgba(0,0,0,0.22)" }}
        className="pointer-events-none absolute -top-[2vw] left-[2vw] select-none font-display text-[40vw] italic leading-none sm:text-[28vw]"
      >
        {c.year}
      </motion.span>
      <div className="relative z-10">
        <p className="font-mono text-[12px] font-bold tracking-wider lg:text-[14px]">
          {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")} {"//"} {c.year}
        </p>
        <h3 className="mt-2 font-display text-[16vw] italic uppercase leading-[0.9] -skew-x-6 sm:text-[9vw] lg:text-[6.4vw]">{c.title}</h3>
        <p className="mt-4 hidden max-w-md font-mono text-[13px] leading-snug sm:block lg:text-[1.05vw]">{c.text}</p>
      </div>
      <div className="relative z-10 min-h-0 sm:h-[60svh]">
        <div className="relative size-full overflow-hidden bg-ink shadow-2xl">
          <motion.div style={{ x: imgX }} className="absolute -inset-x-[12%] inset-y-0">
            <Image
              src={img(c.image, 1200)}
              alt={`${c.title} — DPLAY ${c.year}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              style={{ objectPosition: c.position }}
              className="object-cover"
            />
          </motion.div>
        </div>
        <p className="mt-3 font-mono text-[12px] leading-snug sm:hidden">{c.text}</p>
      </div>
    </article>
  );
}

/** Pinned section: vertical scroll drives a horizontal journey through the brand's chapters. */
export function StoryScroll() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const n = chapters.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 });
  const x = useTransform(smooth, [0, 1], ["0%", `-${((n - 1) / n) * 100}%`]);

  if (reduce) {
    return (
      <section aria-labelledby="story-heading" className="bg-[#f4f4f4] py-10">
        <h2 id="story-heading" className="mb-6 px-5 font-display text-[44px] uppercase">OUR STORY</h2>
        <div className="space-y-10">
          {chapters.map((c, i) => (
            <div key={c.id} className="h-[70svh]">
              <Panel c={c} i={i} progress={scrollYProgress} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      aria-labelledby="story-heading"
      style={{ height: `${n * 100}svh` }}
      className="relative bg-[#f4f4f4]"
    >
      <div className="sticky top-16 flex h-[calc(100svh-4rem)] flex-col overflow-hidden">
        <div className="flex items-center justify-between px-5 pt-5 lg:px-10">
          <h2 id="story-heading" className="font-display text-[28px] uppercase leading-none lg:text-[2.2vw]">
            OUR STORY
          </h2>
          <p className="font-mono text-[11px] font-bold tracking-wider">SCROLL →</p>
        </div>
        <motion.div style={{ x, width: `${n * 100}vw` }} className="flex min-h-0 flex-1">
          {chapters.map((c, i) => (
            <Panel key={c.id} c={c} i={i} progress={smooth} />
          ))}
        </motion.div>
        <div aria-hidden className="mx-5 mb-5 h-px bg-black/15 lg:mx-10">
          <motion.div style={{ scaleX: smooth }} className="h-[3px] -translate-y-px origin-left bg-ink" />
        </div>
      </div>
    </section>
  );
}
