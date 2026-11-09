"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/homepage";
import { img } from "@/lib/images";
import { ArrowLink } from "@/components/ui/ArrowLink";

const ease = [0.22, 1, 0.36, 1] as const;

function RegMark({ className }: { className: string }) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" className={`absolute z-20 hidden size-8 text-ink md:block ${className}`}>
      <path d="M16 0v32M0 16h32" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const slide = heroSlides[index];
  const go = (dir: number) => setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured drops"
      className="grain relative h-[600px] overflow-hidden bg-[#c4c4c4] sm:h-[520px] lg:h-[clamp(430px,32.5vw,640px)]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 20% 15%, #e2e2e2 0%, transparent 55%), radial-gradient(ellipse at 85% 30%, #d6d6d6 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, #9a9a9a 0%, transparent 60%)",
      }}
    >
      <RegMark className="left-3 top-3" />
      <RegMark className="right-3 top-3" />
      <RegMark className="bottom-3 left-3" />
      <RegMark className="bottom-3 right-3" />

      {/* Oversized wordmark behind the model */}
      <motion.div
        aria-hidden
        initial={reduce ? false : { opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease }}
        className="distress pointer-events-none absolute -left-[2%] top-[2%] z-0 select-none font-display italic leading-[0.9] text-ink -skew-x-6 text-[58vw] sm:text-[40vw] lg:top-[-1%] lg:origin-left lg:scale-x-[0.88] lg:text-[27vw]"
      >
        DPLAY
        <span className="absolute -right-[4vw] top-[3vw] hidden text-[4.4vw] font-sans not-italic font-light leading-none lg:inline">
          <span className="grid size-[4.4vw] place-items-center rounded-full border-[0.3vw] border-ink text-[2.4vw] font-bold">R</span>
        </span>
      </motion.div>

      {/* Photograph */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={reduce ? false : { opacity: 0, scale: 1.08, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease }}
          className="absolute inset-y-0 left-1/2 z-10 w-[130%] -translate-x-1/2 sm:w-[80%] lg:left-[50%] lg:w-[40%]"
          style={{
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
            maskImage: "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          }}
        >
          <Image
            src={img(slide.image, 1400)}
            alt={`DPLAY model wearing streetwear from ${slide.eyebrow[0]}`}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 40vw, 100vw"
            style={{ objectPosition: slide.position }}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Headline */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex bg-gradient-to-t from-black/85 via-black/50 to-transparent pt-24 lg:bg-none lg:pt-0 flex-col items-start gap-5 px-5 pb-16 sm:pb-20 lg:inset-auto lg:right-[5.5%] lg:top-[14%] lg:bottom-auto lg:w-[40%] lg:px-0 lg:pb-0">
        <AnimatePresence mode="wait">
          <motion.h1
            key={slide.id}
            className="font-display italic -skew-x-6 uppercase leading-[0.92] text-white lg:text-ink text-[17vw] sm:text-[11vw] lg:text-[6.2vw]"
            aria-label={slide.headline.join(" ")}
          >
            {slide.headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pr-4">
                <motion.span
                  aria-hidden
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-110%" }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>
        </AnimatePresence>
        <svg aria-hidden viewBox="0 0 300 20" className="-mt-3 hidden h-4 w-[22vw] lg:block" fill="none">
          <motion.path
            d="M4 14 C 60 4, 120 16, 170 8 S 260 6, 296 10 M60 18 C 110 10, 190 14, 240 12"
            stroke="#0a0a0a"
            strokeWidth="3"
            strokeLinecap="round"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
          />
        </svg>
        <ArrowLink href={slide.cta.href}>{slide.cta.label}</ArrowLink>
      </div>

      {/* Supporting text */}
      <p className="absolute bottom-6 left-5 z-20 hidden font-mono text-[13px] font-normal leading-snug tracking-wide text-ink sm:block lg:bottom-[8%] lg:left-[3.4%] lg:text-[1.15vw]">
        {slide.eyebrow.map((l) => (
          <span key={l} className="block">
            {l}
          </span>
        ))}
      </p>

      {/* Controls */}
      <div className="absolute bottom-5 right-5 z-20 flex items-center gap-3 font-mono text-[12px] text-ink lg:bottom-[8%] lg:right-[3.5%]">
        <span aria-live="polite">
          {pad(slide.id)} / {pad(heroSlides.length)}
        </span>
        <button type="button" onClick={() => go(-1)} aria-label="Previous slide" className="grid size-7 place-items-center transition-transform hover:-translate-x-0.5">
          <ChevronLeft size={18} />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next slide" className="grid size-7 place-items-center transition-transform hover:translate-x-0.5">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
