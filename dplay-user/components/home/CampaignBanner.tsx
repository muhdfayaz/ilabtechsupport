import Image from "next/image";
import { campaign } from "@/data/homepage";
import { img } from "@/lib/images";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";

export function CampaignBanner() {
  return (
    <section
      aria-labelledby="campaign-heading"
      className="grain relative isolate flex min-h-[520px] items-stretch overflow-hidden bg-ink text-white lg:h-[clamp(300px,18vw,420px)] lg:min-h-0"
    >
      <Image
        src={img(campaign.image, 2000)}
        alt="DPLAY campaign: three men in streetwear looking out over the hills"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[50%_28%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/55 via-black/5 to-black/30" />
      <Reveal className="mx-auto flex w-full max-w-[1600px] flex-col justify-between gap-10 px-5 py-10 lg:flex-row lg:items-center lg:px-10 lg:py-0">
        <h2
          id="campaign-heading"
          className="font-display text-[16vw] italic uppercase leading-[0.9] -skew-x-6 sm:text-[12vw] lg:text-[4.6vw]"
        >
          {campaign.title.map((l, i) => (
            <span key={l} className={`block ${i === 2 ? "lg:-ml-1 lg:rounded-[50%] lg:border-2 lg:border-white lg:px-8 lg:py-1 lg:pb-3" : ""}`}>
              {l}
            </span>
          ))}
        </h2>
        <div className="flex flex-col gap-6 lg:items-end lg:self-stretch lg:justify-between lg:py-[2.5vw] lg:text-right">
          <p className="font-mono text-[13px] leading-snug tracking-wide lg:text-[1.05vw]">
            {campaign.tag.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </p>
          <ArrowLink href={campaign.cta.href} variant="light">
            {campaign.cta.label}
          </ArrowLink>
        </div>
      </Reveal>
    </section>
  );
}
