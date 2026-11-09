"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { img, IMG } from "@/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;

/** Photograph painted *inside* the letters. White fallback if the image fails to load. */
const photoText = (src: string) => ({
  backgroundColor: "#ffffff",
  backgroundImage: `url(${img(src, 1600)})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 30%",
  WebkitBackgroundClip: "text" as const,
  backgroundClip: "text" as const,
  WebkitTextFillColor: "transparent",
  color: "transparent",
});

function SpinBadge() {
  const text = "DPLAY® • EST 2025 • NOT MADE TO BLEND IN • ";
  return (
    <div aria-hidden className="absolute -top-12 right-[6%] z-10 size-24 lg:-top-[4vw] lg:size-[8vw]">
      <svg viewBox="0 0 200 200" className="size-full animate-[spin_16s_linear_infinite] motion-reduce:animate-none">
        <defs>
          <path id="badge-circle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
        </defs>
        <circle cx="100" cy="100" r="98" fill="#ffffff" />
        <text fill="#0a0a0a" fontFamily="var(--font-mono)" fontSize="15" fontWeight="700" letterSpacing="2.2">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center font-display text-2xl text-ink lg:text-[2.4vw]">D</span>
    </div>
  );
}

const lines: { text: string; src: string; outline?: boolean }[][] = [
  [
    { text: "NOT", src: IMG.heroTee },
    { text: "MADE", src: IMG.heroJacket },
  ],
  [
    { text: "TO", src: IMG.heroBrick },
    { text: "BLEND", src: IMG.campaign },
    { text: "IN.", src: "", outline: true },
  ],
];

export function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  // the wide photo grows from a narrow slit to full-bleed as you scroll
  const clip = useTransform(smooth, [0.05, 0.55], reduce ? ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"] : ["inset(0% 34% 0% 34%)", "inset(0% 0% 0% 0%)"]);
  const imgScale = useTransform(smooth, [0, 1], reduce ? [1, 1] : [1.35, 1]);
  const imgY = useTransform(smooth, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);
  const headY = useTransform(smooth, [0, 0.5], reduce ? ["0%", "0%"] : ["0%", "-12%"]);

  return (
    <section ref={ref} aria-labelledby="about-heading" className="relative bg-ink text-white">
      <div className="grain relative overflow-hidden px-5 pb-10 pt-8 lg:px-10 lg:pb-[2vw] lg:pt-[2.5vw]">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-start justify-between font-mono text-[11px] font-bold uppercase tracking-wider text-white/70 lg:text-[13px]">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <span className="mr-3 inline-block size-2 animate-pulse rounded-full bg-white align-middle" />
              {"// ABOUT DPLAY"}
            </motion.p>
            <p>EST. 2025</p>
          </div>

          <motion.h1
            id="about-heading"
            aria-label="Not made to blend in."
            style={{ y: headY }}
            className="mt-6 font-display text-[26vw] italic uppercase leading-[0.86] -skew-x-6 sm:text-[19vw] lg:text-[13.4vw]"
          >
            {lines.map((line, li) => (
              <span key={li} className="flex flex-wrap gap-x-[0.2em] overflow-hidden pr-4">
                {line.map((w, wi) => (
                  <motion.span
                    key={w.text}
                    aria-hidden
                    className={`inline-block pr-[0.04em] ${w.outline ? "text-outline" : ""}`}
                    style={w.outline ? undefined : photoText(w.src)}
                    initial={reduce ? false : { y: "110%", rotate: 4 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 + li * 0.25 + wi * 0.12, ease }}
                  >
                    {w.text}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <div className="mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-end lg:mt-[1.5vw]">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="max-w-md font-mono text-[13px] leading-snug text-white/85 lg:max-w-[30vw] lg:text-[1.05vw]"
            >
              DPLAY is experimental streetwear: loud graphics, limited runs, zero apologies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-wider"
            >
              SCROLL <ArrowDown aria-hidden size={14} className="animate-bounce motion-reduce:animate-none" />
            </motion.p>
          </div>
        </div>
      </div>

      {/* Wide photograph that opens up on scroll */}
      <div className="relative bg-ink px-0 pb-0">
        <div className="relative mx-auto max-w-[1600px]">
          <SpinBadge />
        </div>
        <motion.div
          style={{ clipPath: clip }}
          className="relative h-[70svh] min-h-[420px] overflow-hidden bg-ink lg:h-[clamp(480px,44vw,820px)]"
        >
          <motion.div style={{ y: imgY, scale: imgScale }} className="absolute -inset-y-[10%] inset-x-0">
            <Image
              src={img(IMG.campaign, 2200)}
              alt="DPLAY crew in streetwear looking out over the hills"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_30%]"
            />
          </motion.div>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <p className="absolute bottom-5 left-5 font-mono text-[11px] font-bold tracking-wider lg:bottom-8 lg:left-10 lg:text-[13px]">
            DROP_003 {"//"} THE OUTLINE COLLECTION
          </p>
        </motion.div>
      </div>
    </section>
  );
}
