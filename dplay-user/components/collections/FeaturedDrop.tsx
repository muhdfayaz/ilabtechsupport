"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { featuredCollection as f } from "@/data/collections";
import { img } from "@/lib/images";
import { ArrowLink } from "@/components/ui/ArrowLink";

const ease = [0.22, 1, 0.36, 1] as const;
const full = "inset(0% 0% 0% 0%)";

export function FeaturedDrop() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const imgY = useTransform(smooth, [0, 1], reduce ? ["0%", "0%"] : ["-10%", "10%"]);
  const imgScale = useTransform(smooth, [0, 0.5], reduce ? [1, 1] : [1.2, 1.05]);
  const bigNumX = useTransform(smooth, [0, 1], reduce ? ["0%", "0%"] : ["12%", "-18%"]);
  const clip = useTransform(smooth, [0, 0.3], reduce ? [full, full] : ["inset(14% 8% 14% 8%)", full]);

  return (
    <section
      ref={ref}
      aria-labelledby="featured-heading"
      className="relative isolate overflow-hidden bg-ink text-white"
    >
      <motion.div style={{ clipPath: clip }} className="grain relative h-[78svh] min-h-[560px] overflow-hidden lg:h-[clamp(520px,48vw,860px)]">
        <motion.div style={{ y: imgY, scale: imgScale }} className="absolute -inset-y-[12%] inset-x-0">
          <Image
            src={img(f.image, 2200)}
            alt="DROP_003 The Outline Collection campaign"
            fill
            sizes="100vw"
            style={{ objectPosition: f.position }}
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />

        <motion.span
          aria-hidden
          style={{ x: bigNumX, color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.6)" }}
          className="pointer-events-none absolute -bottom-[3vw] left-0 select-none whitespace-nowrap font-display text-[44vw] italic leading-none lg:text-[30vw]"
        >
          {f.number}
        </motion.span>

        <div className="absolute inset-0 z-10 mx-auto flex max-w-[1600px] flex-col justify-between px-5 py-8 lg:px-10 lg:py-[3vw]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wider lg:text-[13px]"
          >
            <span className="bg-white px-2 py-1 text-ink">● {f.status}</span>
            <span>
              FEATURED // {f.year}
            </span>
          </motion.div>

          <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-2 font-mono text-[12px] font-bold tracking-wider lg:text-[14px]">DROP_{f.number}</p>
              <h2
                id="featured-heading"
                className="font-display text-[18vw] italic uppercase leading-[0.9] -skew-x-6 sm:text-[12vw] lg:text-[8vw]"
              >
                {f.name.split(" ").map((w, i) => (
                  <span key={w} className="block overflow-hidden pr-4">
                    <motion.span
                      className="block"
                      initial={reduce ? false : { y: "110%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease }}
                    >
                      {w}
                    </motion.span>
                  </span>
                ))}
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              className="flex max-w-sm flex-col gap-5 lg:items-end lg:text-right"
            >
              <p className="font-mono text-[13px] leading-snug lg:text-[14px]">{f.blurb}</p>
              <p className="font-mono text-[11px] font-bold tracking-wider text-white/70">{f.pieces} PIECES</p>
              <ArrowLink href={f.href} variant="light">
                SHOP THE DROP
              </ArrowLink>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
