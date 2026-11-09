"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { values } from "@/data/about";
import { img } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function Values() {
  const [open, setOpen] = useState<string>(values[0].id);
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="values-heading" className="bg-white py-12 lg:py-[4vw]">
      <div className="mx-auto grid max-w-[1600px] gap-8 px-5 lg:grid-cols-[22.5%_1fr] lg:gap-0 lg:px-10">
        <Reveal>
          <h2 id="values-heading" className="font-display text-[44px] uppercase leading-[0.95] lg:text-[3.6vw]">
            WHAT WE
            <br />
            STAND FOR
          </h2>
        </Reveal>
        <ul className="border-t border-ink">
          {values.map((v, i) => {
            const on = open === v.id;
            return (
              <li key={v.id} className="border-b border-ink">
                <h3>
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={`${v.id}-panel`}
                    onClick={() => setOpen(on ? "" : v.id)}
                    onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setOpen(v.id)}
                    className="group flex w-full items-center gap-4 py-5 text-left lg:gap-8 lg:py-[1.6vw]"
                  >
                    <span className="w-10 font-mono text-[12px] font-bold lg:w-20 lg:text-[14px]">0{i + 1}</span>
                    <span
                      className={`flex-1 font-display text-[9vw] uppercase leading-none transition-all duration-500 sm:text-[6vw] lg:text-[4.2vw] ${
                        on ? "translate-x-2 italic" : "text-black/40 group-hover:text-black"
                      }`}
                    >
                      {v.title}
                    </span>
                    <Plus
                      aria-hidden
                      strokeWidth={1.5}
                      className={`size-7 shrink-0 transition-transform duration-500 lg:size-10 ${on ? "rotate-[135deg]" : ""}`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      id={`${v.id}-panel`}
                      role="region"
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-5 pb-6 sm:grid-cols-[1fr_220px] sm:items-end lg:pb-[2vw] lg:pl-20 lg:pr-4">
                        <p className="max-w-lg font-mono text-[13px] leading-snug lg:text-[1.05vw]">{v.text}</p>
                        <div className="relative aspect-[4/3] overflow-hidden bg-ink sm:aspect-[4/5]">
                          <Image
                            src={img(v.image, 500)}
                            alt=""
                            fill
                            sizes="220px"
                            style={{ objectPosition: v.position }}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
