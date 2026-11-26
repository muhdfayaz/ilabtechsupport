import { LTR, UI, type Locale } from "@/lib/i18n";
import { SITE, waLink } from "@/lib/site";
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { HeroVideo } from "./hero-video";

const COPY = {
  en: {
    eyebrow: "Apple service center · Bahrain",
    l1: "iPhone & Apple repair",
    l2: "in Bahrain.",
    body: "Professional iPhone, iPad, Samsung and PlayStation repairs. Genuine Apple displays, one-year warranty on battery service, and three service centers across Bahrain.",
    wa: "Book a repair on WhatsApp",
    call: "Call",
    explore: "Explore",
    scroll: "Scroll to services",
  },
  ar: {
    eyebrow: "مركز خدمة آبل · البحرين",
    l1: "إصلاح iPhone وأجهزة آبل",
    l2: "في البحرين.",
    body: "إصلاحات احترافية لأجهزة iPhone وiPad وسامسونج وPlayStation. شاشات آبل أصلية، وضمان لمدة سنة على خدمة البطارية، وثلاثة مراكز خدمة في أنحاء البحرين.",
    wa: "احجز إصلاحك عبر واتساب",
    call: "اتصل",
    explore: "استكشف",
    scroll: "انتقل إلى الخدمات",
  },
} as const;

export function Hero({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const t = UI[locale];
  return (
    <section
      aria-labelledby="hero-title"
      className="on-dark relative isolate h-[100svh] min-h-[620px] w-full overflow-hidden bg-[#0b0b0c] text-white"
    >
      <HeroVideo locale={locale} />
      {/* Scrims keep text legible over any video frame */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/25" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-28 md:pb-20">
        <p className="animate-rise flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-white/80">
          <span className="h-px w-8 bg-white/50" />
          {c.eyebrow}
        </p>
        <h1
          id="hero-title"
          className="animate-rise mt-4 max-w-3xl text-3xl font-semibold leading-[1.08] [animation-delay:120ms] sm:text-4xl md:text-6xl"
        >
          <span className="text-silver-gradient">{c.l1}</span>
          <br />
          {c.l2}
        </h1>
        <p className="animate-rise mt-4 hidden max-w-xl text-base leading-relaxed text-white/85 [animation-delay:240ms] sm:block md:text-lg">
          {c.body}
        </p>
        <div className="animate-rise mt-6 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row">
          <a
            href={waLink(t.waBook)}
            data-track="hero"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-wa px-7 py-4 text-sm font-semibold text-black shadow-lg shadow-wa/20 transition hover:brightness-110"
          >
            <WhatsAppIcon width={18} height={18} />
            {c.wa}
          </a>
          <a
            href={`tel:${SITE.phone.tel}`}
            data-track="hero"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
          >
            <PhoneIcon width={18} height={18} />
            {c.call} <bdi {...LTR}>{SITE.phone.display}</bdi>
          </a>
        </div>
      </div>

      <a
        href="#services"
        aria-label={c.scroll}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white md:flex"
      >
        {c.explore}
        <ArrowIcon className="rotate-90" width={14} height={14} />
      </a>
    </section>
  );
}
