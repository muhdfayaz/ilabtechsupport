"use client";

import Link from "next/link";
import { useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function MagneticCta() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.5 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.5 });

  const onMove = (e: PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      aria-labelledby="join-heading"
      className="grain relative isolate overflow-hidden bg-ink py-16 text-white lg:py-[6vw]"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-10 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <h2
          id="join-heading"
          className="font-display text-[20vw] italic uppercase leading-[0.88] -skew-x-6 sm:text-[14vw] lg:text-[9vw]"
        >
          {["JOIN THE", "OUTLINE."].map((l, i) => (
            <span key={l} className="block overflow-hidden pr-4">
              <motion.span
                className={`block ${i === 1 ? "text-outline" : ""}`}
                initial={reduce ? false : { y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.9, delay: i * 0.15, ease }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h2>

        <div className="flex flex-col gap-6 lg:items-center">
          <motion.div ref={ref} style={{ x, y }}>
            <Link
              href="/new-drops"
              className="group grid size-40 place-items-center rounded-full bg-white text-ink transition-colors duration-300 hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-white lg:size-[13vw]"
            >
              <span className="flex flex-col items-center gap-1 text-center font-mono text-[12px] font-bold uppercase leading-tight tracking-wider lg:text-[1vw]">
                SHOP NEW
                <br />
                DROPS
                <ArrowUpRight aria-hidden className="mt-1 size-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 lg:size-[2vw]" />
              </span>
            </Link>
          </motion.div>
          <Link
            href="/collections"
            className="font-mono text-[12px] font-bold uppercase tracking-wider underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            Browse all collections
          </Link>
        </div>
      </div>
    </section>
  );
}
