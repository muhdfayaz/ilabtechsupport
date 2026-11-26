"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { PauseIcon, PlayIcon } from "./icons";

const INTERVAL_MS = 4500;

/**
 * Auto-advancing scroll-snap carousel. The slides are server-rendered children,
 * so every review is in the HTML. It pauses on hover, touch, keyboard focus,
 * when off screen, and stays still for reduced-motion users until they press play.
 */
export function ReviewCarousel({
  children,
  label,
  pauseLabel,
  playLabel,
}: {
  children: ReactNode;
  label: string;
  pauseLabel: string;
  playLabel: string;
}) {
  const track = useRef<HTMLUListElement>(null);
  const [playing, setPlaying] = useState(false);
  const [held, setHeld] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );
    io.observe(el);
    const frame = requestAnimationFrame(() => setPlaying(motionOk));
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!playing || held || !visible) return;
    const id = window.setInterval(() => {
      const el = track.current;
      if (!el || document.hidden) return;
      // scrollLeft is negative in RTL, so compare its absolute value.
      if (Math.abs(el.scrollLeft) + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }
      const rtl = getComputedStyle(el).direction === "rtl";
      const box = el.getBoundingClientRect();
      for (const slide of Array.from(el.children)) {
        const r = slide.getBoundingClientRect();
        const delta = rtl ? r.right - box.right : r.left - box.left;
        if (rtl ? delta < -8 : delta > 8) {
          el.scrollBy({ left: delta, behavior: "smooth" });
          return;
        }
      }
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [playing, held, visible]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onPointerEnter={() => setHeld(true)}
      onPointerLeave={() => setHeld(false)}
      onPointerCancel={() => setHeld(false)}
      onFocus={(e) => {
        if (e.target.matches(":focus-visible")) setHeld(true);
      }}
      onBlur={() => setHeld(false)}
    >
      <ul
        ref={track}
        tabIndex={0}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto py-2"
      >
        {children}
      </ul>
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? pauseLabel : playLabel}
        className="mx-auto mt-6 grid size-10 place-items-center rounded-full border border-black/15 bg-white transition hover:bg-black/5"
      >
        {playing ? <PauseIcon width={14} height={14} /> : <PlayIcon width={14} height={14} />}
      </button>
    </div>
  );
}
