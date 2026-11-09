"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { nextDrop } from "@/data/newDrops";

const ease = [0.22, 1, 0.36, 1] as const;
const GLYPHS = "▒░█▓/\\<>_-+=#@%&01";

/** Mono text that decodes from noise into the final string. */
function Scramble({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      el.textContent = text;
      return;
    }
    let raf = 0;
    const start = performance.now() + delay * 1000;
    const dur = 1100;
    const tick = (now: number) => {
      const p = Math.min(Math.max((now - start) / dur, 0), 1);
      const fixed = Math.floor(p * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        out += ch === " " || i < fixed ? ch : p === 0 ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      el.textContent = out;
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, delay, reduce]);

  return (
    <>
      <span ref={ref} aria-hidden>
        {" "}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}

function Digit({ value }: { value: string }) {
  return (
    <span className="relative inline-block h-[1em] w-[0.62em] overflow-hidden">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.4, ease }}
          className="absolute inset-0 text-center"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function useCountdown(target: string) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const t = new Date(target).getTime();
    const tick = () => setLeft(Math.max(t - Date.now(), 0));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return left;
}

function Countdown() {
  const left = useCountdown(nextDrop.date);
  const s = left === null ? null : Math.floor(left / 1000);
  const parts = [
    { label: "DAYS", v: s === null ? "--" : String(Math.floor(s / 86400)).padStart(2, "0") },
    { label: "HRS", v: s === null ? "--" : String(Math.floor((s % 86400) / 3600)).padStart(2, "0") },
    { label: "MIN", v: s === null ? "--" : String(Math.floor((s % 3600) / 60)).padStart(2, "0") },
    { label: "SEC", v: s === null ? "--" : String(s % 60).padStart(2, "0") },
  ];
  return (
    <div role="timer" aria-label={`Time until ${nextDrop.name}`} className="flex items-end gap-3 lg:gap-5">
      {parts.map((p, i) => (
        <div key={p.label} className="flex items-end gap-3 lg:gap-5">
          <div>
            <div className="flex font-display text-[44px] leading-none lg:text-[4.2vw]">
              {p.v.split("").map((d, j) => (
                <Digit key={j} value={d} />
              ))}
            </div>
            <p className="mt-1 font-mono text-[10px] font-bold tracking-wider lg:text-[11px]">{p.label}</p>
          </div>
          {i < parts.length - 1 && <span aria-hidden className="pb-5 font-display text-[28px] lg:text-[2.6vw]">:</span>}
        </div>
      ))}
    </div>
  );
}

function NotifyForm() {
  const [done, setDone] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };
  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <label htmlFor="notify-email" className="mb-2 block font-mono text-[11px] font-bold tracking-wider">
        GET AN ALERT BEFORE IT SELLS OUT
      </label>
      <div className="flex border border-ink bg-white">
        <input
          id="notify-email"
          type="email"
          required
          disabled={done}
          placeholder="YOUR@EMAIL.COM"
          className="min-w-0 flex-1 bg-transparent px-4 py-3 font-mono text-[12px] uppercase outline-none placeholder:text-black/40 focus-visible:bg-black/5"
        />
        <button
          type="submit"
          disabled={done}
          className="group flex items-center gap-2 bg-ink px-5 font-mono text-[12px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-black/80 disabled:bg-black/60"
        >
          {done ? "YOU'RE IN ✓" : "NOTIFY ME"}
          {!done && <ArrowUpRight aria-hidden size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
        </button>
      </div>
      <p aria-live="polite" className="mt-2 h-4 font-mono text-[11px] text-black/60">
        {done ? "We'll ping you the moment the drop goes live." : ""}
      </p>
    </form>
  );
}

/** Headline that glitches in: two offset ghost layers collapse onto the main text. */
function GlitchWord({ word, delay }: { word: string; delay: number }) {
  const reduce = useReducedMotion();
  const layer = (x: number, opacity: number, extra = "") => (
    <motion.span
      aria-hidden
      initial={reduce ? false : { x, opacity }}
      animate={{ x: 0, opacity: 0 }}
      transition={{ duration: 0.9, delay: delay + 0.35, ease }}
      className={`absolute inset-0 ${extra}`}
    >
      {word}
    </motion.span>
  );
  return (
    <span className="relative block">
      <motion.span
        className="block"
        initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 0.8, delay, ease }}
      >
        {word}
      </motion.span>
      {layer(-28, 0.6, "text-black/50")}
      {layer(28, 0.6, "text-outline")}
    </span>
  );
}

export function NewDropsHero() {
  return (
    <section
      aria-labelledby="newdrops-heading"
      className="grain relative isolate overflow-hidden bg-[#c4c4c4] pb-8 pt-10 lg:pb-[2.5vw] lg:pt-[3vw]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 20% 15%, #e2e2e2 0%, transparent 55%), radial-gradient(ellipse at 85% 30%, #d6d6d6 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, #9a9a9a 0%, transparent 60%)",
      }}
    >
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:px-10">
        <div>
          <p className="font-mono text-[12px] font-bold uppercase tracking-wider lg:text-[13px]">
            <span className="mr-3 inline-block size-2 animate-pulse rounded-full bg-ink align-middle" />
            <Scramble text="// FRESH OFF THE PRESS" delay={0.1} />
          </p>
          <h1
            id="newdrops-heading"
            aria-label="New drops"
            className="mt-4 font-display text-[24vw] italic uppercase leading-[0.88] -skew-x-6 sm:text-[17vw] lg:text-[11vw]"
          >
            <GlitchWord word="NEW" delay={0.2} />
            <GlitchWord word="DROPS" delay={0.4} />
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:pb-3">
          <div>
            <p className="mb-3 font-mono text-[12px] font-bold tracking-wider lg:text-[13px]">
              <Scramble text={`NEXT: ${nextDrop.name} — ${nextDrop.title}`} delay={0.6} />
            </p>
            <Countdown />
          </div>
          <NotifyForm />
        </div>
      </div>
    </section>
  );
}
