"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { timeline } from "@/data/newDrops";

const ease = [0.22, 1, 0.36, 1] as const;

export function DropTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section aria-labelledby="timeline-heading" className="border-t border-black/10 bg-white py-10 lg:py-[3.5vw]">
      <div className="mx-auto grid max-w-[1600px] gap-8 px-5 lg:grid-cols-[22.5%_1fr] lg:gap-0 lg:px-10">
        <h2 id="timeline-heading" className="font-display text-[44px] uppercase leading-[0.95] lg:text-[3.6vw]">
          DROP
          <br />
          CALENDAR
        </h2>

        <ol ref={ref} className="relative pl-10 lg:pl-16">
          <span aria-hidden className="absolute bottom-0 left-[11px] top-0 w-px bg-black/15 lg:left-[19px]" />
          <motion.span
            aria-hidden
            style={{ scaleY: reduce ? 1 : progress }}
            className="absolute bottom-0 left-[11px] top-0 w-px origin-top bg-ink lg:left-[19px]"
          />
          {timeline.map((t, i) => {
            const live = t.state === "LIVE NOW";
            const upcoming = t.state === "UPCOMING";
            return (
              <motion.li
                key={t.id}
                initial={reduce ? false : { opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.05, ease }}
                className="relative pb-12 last:pb-0 lg:pb-[4vw]"
              >
                <motion.span
                  aria-hidden
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.2 }}
                  className={`absolute -left-10 top-2 grid size-6 place-items-center rounded-full border-2 border-ink lg:-left-16 lg:top-3 lg:size-10 ${
                    live ? "bg-ink" : "bg-white"
                  }`}
                >
                  {live && <span className="size-2 animate-pulse rounded-full bg-white lg:size-3" />}
                  {upcoming && <span className="size-1.5 rounded-full bg-ink lg:size-2" />}
                </motion.span>

                <Link href={`/collections/drop-00${timeline.length - i}`} className="group block">
                  <p className="font-mono text-[11px] font-bold tracking-wider text-black/60 lg:text-[13px]">
                    {t.code} {"//"} {t.date}
                    <span
                      className={`ml-3 px-2 py-0.5 text-[10px] ${live ? "bg-ink text-white" : "border border-ink"}`}
                    >
                      {t.state}
                    </span>
                  </p>
                  <h3 className="mt-1 font-display text-[11vw] italic uppercase leading-[0.95] -skew-x-6 transition-transform duration-500 group-hover:translate-x-3 sm:text-[7vw] lg:text-[5vw]">
                    {t.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[13px] text-black/70 lg:text-[14px]">{t.text}</p>
                </Link>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
