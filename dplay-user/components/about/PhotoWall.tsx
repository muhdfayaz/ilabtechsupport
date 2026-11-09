import Image from "next/image";
import { wall } from "@/data/about";
import { img } from "@/lib/images";

function Row({ ids, hidden, reverse }: { ids: readonly string[]; hidden?: boolean; reverse?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 gap-3 pr-3 lg:gap-5 lg:pr-5">
      {ids.map((id, i) => {
        const tilt = (i + (reverse ? 1 : 0)) % 2 === 0 ? "-rotate-2" : "rotate-2";
        return (
          <li
            key={id + i}
            className={`relative h-[260px] w-[200px] shrink-0 overflow-hidden bg-ink transition-transform duration-500 hover:z-10 hover:rotate-0 hover:scale-105 lg:h-[24vw] lg:w-[18vw] ${tilt}`}
          >
            <Image src={img(id, 600)} alt="" fill sizes="(min-width: 1024px) 18vw, 200px" className="object-cover" />
          </li>
        );
      })}
    </ul>
  );
}

export function PhotoWall() {
  const second = [...wall].reverse();
  return (
    <section aria-label="DPLAY photo wall" className="overflow-hidden bg-[#f4f4f4] py-10 lg:py-[3vw]">
      <div className="marquee">
        <div className="animate-marquee flex w-max" style={{ ["--marquee-duration" as string]: "55s" }}>
          <Row ids={wall} />
          <Row ids={wall} hidden />
        </div>
      </div>
      <div className="marquee mt-3 lg:mt-5">
        <div
          className="animate-marquee flex w-max"
          style={{ ["--marquee-duration" as string]: "65s", animationDirection: "reverse" }}
        >
          <Row ids={second} reverse />
          <Row ids={second} hidden reverse />
        </div>
      </div>
    </section>
  );
}
