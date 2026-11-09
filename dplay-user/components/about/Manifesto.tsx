"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { manifesto } from "@/data/about";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <motion.span style={{ opacity, y }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
}

/** Scroll-scrubbed manifesto: each word "lights up" as you scroll past it. */
export function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = manifesto.split(" ");

  return (
    <section aria-labelledby="manifesto-heading" className="bg-white py-14 lg:py-[6vw]">
      <div className="mx-auto grid max-w-[1600px] gap-6 px-5 lg:grid-cols-[22.5%_1fr] lg:gap-0 lg:px-10">
        <h2 id="manifesto-heading" className="font-mono text-[12px] font-bold tracking-wider lg:text-[13px]">
          {"// MANIFESTO"}
        </h2>
        {reduce ? (
          <p className="font-display text-[8vw] uppercase leading-[1.05] sm:text-[6vw] lg:text-[3.6vw]">{manifesto}</p>
        ) : (
          <p
            ref={ref}
            aria-label={manifesto}
            className="font-display text-[8vw] uppercase leading-[1.05] sm:text-[6vw] lg:text-[3.6vw]"
          >
            {words.map((w, i) => {
              const start = i / words.length;
              return <Word key={i} word={w} progress={scrollYProgress} range={[start, Math.min(start + 1.5 / words.length, 1)]} />;
            })}
          </p>
        )}
      </div>
    </section>
  );
}
