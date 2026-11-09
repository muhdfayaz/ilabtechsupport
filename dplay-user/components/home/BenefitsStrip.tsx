import { RefreshCw, ShieldCheck, Star, Truck, type LucideIcon } from "lucide-react";
import { benefits } from "@/data/homepage";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<(typeof benefits)[number]["icon"], LucideIcon> = {
  truck: Truck,
  refresh: RefreshCw,
  shield: ShieldCheck,
  star: Star,
};

export function BenefitsStrip() {
  return (
    <section aria-label="Service benefits" className="border-t border-black/10 bg-[#f7f7f7]">
      <Reveal>
        <ul className="mx-auto grid max-w-[1600px] grid-cols-2 gap-y-6 px-5 py-8 lg:grid-cols-4 lg:px-10 lg:py-[2.4vw]">
          {benefits.map((b, i) => {
            const Icon = icons[b.icon];
            return (
              <li
                key={b.title}
                className={`flex items-center justify-center gap-3 lg:gap-4 ${i > 0 ? "lg:border-l lg:border-black/15" : ""}`}
              >
                <Icon aria-hidden strokeWidth={1.4} className="size-8 shrink-0 lg:size-9" />
                <div>
                  <h3 className="font-sans text-[11px] font-bold uppercase tracking-wide lg:text-[12px]">{b.title}</h3>
                  <p className="text-[11px] text-black/70 lg:text-[12px]">{b.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
