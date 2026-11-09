"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { aboutStats } from "@/data/about";
import { Marquee } from "@/components/ui/Marquee";

function Count({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    if (reduce || to === 0) {
      el.textContent = String(to);
      return;
    }
    const c = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = String(Math.round(v));
      },
    });
    return () => c.stop();
  }, [inView, to, reduce]);
  return <span ref={ref}>0</span>;
}

export function StatsBand() {
  return (
    <section aria-label="DPLAY in numbers" className="bg-ink text-white">
      <Marquee
        words={["EST 2025", "LIMITED RUNS", "NO RESTOCKS", "STREET FIRST", "LOUD BY DESIGN"]}
        duration={34}
        className="border-b border-white/15 py-3 font-mono text-[12px] font-bold uppercase tracking-widest text-white/60"
      />
      <dl className="mx-auto grid max-w-[1600px] grid-cols-2 gap-y-10 px-5 py-12 lg:grid-cols-4 lg:px-10 lg:py-[4vw]">
        {aboutStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`px-2 lg:px-8 ${i > 0 ? "lg:border-l lg:border-white/15" : ""}`}
          >
            <dd className="font-display text-[22vw] italic leading-none -skew-x-6 sm:text-[14vw] lg:text-[8vw]">
              <Count to={s.value} />
            </dd>
            <dt className="mt-2 font-mono text-[11px] font-bold tracking-wider text-white/70 lg:text-[12px]">{s.label}</dt>
          </motion.div>
        ))}
      </dl>
    </section>
  );
}
