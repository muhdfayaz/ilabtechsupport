"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView, useReducedMotion } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { dropFilters, dropProducts, type DropFilter, type DropProduct } from "@/data/newDrops";
import { formatINR } from "@/data/products";
import { img } from "@/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;
const SCAN = 1.3; // seconds the scan line takes to sweep a card
const FRAME = 0.7; // seconds the outline takes to draw

/**
 * Signature animation: when a card enters the viewport its outline frame draws itself,
 * then a scan line sweeps top→bottom, "developing" the photo (ghosted B/W → full colour)
 * while a mono counter ticks 000→100%.
 */
function ScanCard({ product, index }: { product: DropProduct; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [wished, setWished] = useState(false);
  const [scanned, setScanned] = useState(false);
  const done = scanned || !!reduce;
  const delay = (index % 4) * 0.12;
  const start = reduce ? 0 : FRAME + delay;

  useEffect(() => {
    if (!inView) return;
    if (reduce) return;
    const controls = animate(0, 100, {
      duration: SCAN,
      delay: start,
      ease: "linear",
      onUpdate: (v) => {
        if (counter.current) counter.current.textContent = `${String(Math.round(v)).padStart(3, "0")}%`;
      },
      onComplete: () => setScanned(true),
    });
    return () => controls.stop();
  }, [inView, reduce, start]);

  const shown = reduce || inView;

  return (
    <article className="group">
      <div ref={ref} className="relative aspect-[4/5] overflow-hidden bg-[#e4e4e4] sm:aspect-[207/197]">
        {/* 1. ghost: desaturated "blueprint" of the photo, visible before the scan */}
        <Image
          src={img(product.image, 700)}
          alt=""
          aria-hidden
          fill
          sizes="(min-width: 1024px) 22vw, 50vw"
          style={{ objectPosition: product.position }}
          className="object-cover opacity-25 contrast-150 grayscale"
        />

        {/* 2. developed colour image, revealed by the scan line */}
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
          animate={shown ? { clipPath: "inset(0 0 0% 0)" } : undefined}
          transition={{ duration: SCAN, delay: start, ease: "linear" }}
        >
          <Link href={product.href} aria-label={`View ${product.name}`} className="absolute inset-0 block">
            <Image
              src={img(product.image, 700)}
              alt={`${product.name} — DPLAY`}
              fill
              sizes="(min-width: 1024px) 22vw, 50vw"
              style={{ objectPosition: product.position }}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </Link>
        </motion.div>

        {/* 3. scan line + live counter */}
        {!reduce && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 z-10"
            initial={{ top: "0%", opacity: 0 }}
            animate={shown ? { top: ["0%", "100%"], opacity: [0, 1, 1, 0] } : undefined}
            transition={{ duration: SCAN, delay: start, ease: "linear", opacity: { times: [0, 0.05, 0.95, 1] } }}
          >
            <div className="h-px bg-white shadow-[0_0_12px_2px_rgba(255,255,255,0.9)]" />
            <div className="h-8 -translate-y-full bg-gradient-to-t from-white/40 to-transparent mix-blend-overlay" />
            <span ref={counter} className="absolute right-2 top-1 bg-ink px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
              000%
            </span>
          </motion.div>
        )}

        {/* 4. outline frame that draws itself first */}
        {!reduce && (
          <svg aria-hidden className="pointer-events-none absolute inset-0 z-20 size-full">
            <motion.rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              fill="none"
              stroke="#0a0a0a"
              strokeWidth="2"
              strokeDasharray="6 5"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={shown ? { pathLength: 1, opacity: done ? 0 : 1 } : undefined}
              transition={{ pathLength: { duration: FRAME, delay, ease }, opacity: { duration: 0.5 } }}
            />
          </svg>
        )}

        {/* UI chrome */}
        <motion.span
          initial={reduce ? false : { opacity: 0, x: -10 }}
          animate={done || reduce ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.4 }}
          className="pointer-events-none absolute left-3 top-3 z-10 bg-ink px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white"
        >
          {product.badge}
        </motion.span>
        <button
          type="button"
          onClick={() => setWished((w) => !w)}
          aria-pressed={wished}
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          className="absolute right-3 top-3 z-30 grid size-8 place-items-center rounded-full text-ink transition-all hover:bg-white/80 active:scale-75"
        >
          <Heart size={20} strokeWidth={1.75} fill={wished ? "#0a0a0a" : "transparent"} />
        </button>

        {/* Quick add slides up on hover */}
        <button
          type="button"
          aria-label={`Quick add ${product.name}`}
          className="absolute inset-x-0 bottom-0 z-20 flex translate-y-full items-center justify-between bg-ink px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-wider text-white transition-transform duration-300 ease-out focus-visible:translate-y-0 group-hover:translate-y-0 max-lg:translate-y-0 max-lg:py-2"
        >
          QUICK ADD <Plus aria-hidden size={16} />
        </button>
      </div>

      <div className="px-0.5 pt-3">
        <p className="font-mono text-[10px] font-bold tracking-wider text-black/50">{product.drop}</p>
        <h3 className="font-display text-[15px] uppercase tracking-wide">{product.name}</h3>
        <p className="font-display text-[14px] text-black/80">{formatINR(product.price)}</p>
        <ul className="mt-2 flex gap-1.5" aria-label="Available colours">
          {product.swatches.map((s) => (
            <li key={s.name} title={s.name} className="size-3.5 rounded-full border border-black/20" style={{ background: s.color }}>
              <span className="sr-only">{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function ScanGrid() {
  const [filter, setFilter] = useState<DropFilter>("ALL");
  const items = filter === "ALL" ? dropProducts : dropProducts.filter((p) => p.category === filter);

  return (
    <section aria-labelledby="scan-heading" className="bg-[#f7f7f7] py-10 lg:py-[3vw]">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
        <div className="mb-8 flex flex-col gap-6 lg:mb-[2.5vw] lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 id="scan-heading" className="font-display text-[44px] uppercase leading-[0.95] lg:text-[3.6vw]">
              JUST
              <br />
              LANDED
            </h2>
            <p className="mt-4 font-mono text-[12px] text-black/70">
              {items.length} {items.length === 1 ? "PIECE" : "PIECES"} {"//"} LIMITED QUANTITIES
            </p>
          </div>
          <div role="tablist" aria-label="Filter new drops" className="hide-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:px-0">
            {dropFilters.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  className={`relative shrink-0 border border-ink px-4 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                    active ? "text-white" : "text-ink hover:bg-ink/5"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="drop-filter-pill"
                      className="absolute inset-0 bg-ink"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{f}</span>
                </button>
              );
            })}
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-x-3 gap-y-8 lg:grid-cols-4 lg:gap-x-[1.5vw] lg:gap-y-[3vw]" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.li key={p.id} layout exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35, ease }}>
                <ScanCard product={p} index={i} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
