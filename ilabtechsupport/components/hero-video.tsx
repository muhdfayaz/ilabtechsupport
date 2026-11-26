"use client";

import { useEffect, useRef, useState } from "react";
import { UI, type Locale } from "@/lib/i18n";
import { PauseIcon, PlayIcon } from "./icons";

/**
 * Full-bleed looping hero video — same asset and behaviour as the original
 * (autoplay, loop, muted, inline, object-fit: cover), plus a pause control and
 * reduced-motion support.
 */
export function HeroVideo({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
    }
  }, []);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  }

  return (
    <>
      <video
        ref={ref}
        className="absolute inset-0 size-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-hidden="true"
        data-aid="HEADER_VIDEO"
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? t.pauseVideo : t.playVideo}
        className="absolute end-5 top-24 z-20 grid size-10 place-items-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur transition hover:bg-black/50 md:top-28"
      >
        {playing ? <PauseIcon width={14} height={14} /> : <PlayIcon width={14} height={14} />}
      </button>
    </>
  );
}
