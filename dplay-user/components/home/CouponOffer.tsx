"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { couponOffer as offer } from "@/data/homepage";
import { img } from "@/lib/images";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";

export function CouponOffer() {
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(offer.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — code stays visible */
    }
  };

  return (
    <section
      aria-labelledby="offer-heading"
      className="group relative isolate flex min-h-[560px] items-end overflow-hidden bg-ink text-white lg:min-h-[clamp(460px,38vw,640px)] lg:items-center"
    >
      <Image
        src={img(offer.image, 2200)}
        alt="Young man in a camel blazer seated on a stool, DPLAY offer campaign"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[50%_8%] transition-transform duration-[1400ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/75 lg:via-black/25 lg:to-transparent" />
      {/* diagonal light sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 -z-10 w-1/3 -skew-x-12 bg-white/10 opacity-0 transition-all duration-[1200ms] ease-out group-hover:left-[110%] group-hover:opacity-100"
      />

      <Reveal className="mx-auto w-full max-w-[1600px] px-5 py-12 lg:px-10 lg:py-0">
        <p className="mb-4 font-mono text-[11px] tracking-widest lg:text-[13px]">{offer.eyebrow}</p>
        <h2
          id="offer-heading"
          className="font-display text-[15vw] italic uppercase leading-[0.9] -skew-x-6 sm:text-[11vw] lg:text-[6.2vw]"
        >
          {offer.title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </h2>
        <p className="mt-5 max-w-md text-[14px] text-white/90 lg:text-[15px]">{offer.text}</p>

        <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <motion.button
            type="button"
            onClick={copy}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            aria-label={`Copy coupon code ${offer.code}`}
            className="flex items-center gap-4 border-2 border-dashed border-white px-5 py-3 font-mono text-[15px] font-bold tracking-[0.2em] transition-colors hover:bg-white hover:text-ink"
          >
            {offer.code}
            {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
            <span className="sr-only" aria-live="polite">
              {copied ? "Copied" : ""}
            </span>
          </motion.button>
          <ArrowLink href={offer.cta.href} variant="light">
            {offer.cta.label}
          </ArrowLink>
        </div>
        <p className="mt-5 font-mono text-[10px] text-white/70">{offer.terms}</p>
      </Reveal>
    </section>
  );
}
