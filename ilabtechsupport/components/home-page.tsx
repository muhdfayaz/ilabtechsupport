import Image from "next/image";
import Link from "next/link";
import { BranchCard } from "@/components/branch-card";
import { Faq } from "@/components/faq";
import { GoogleReviews } from "@/components/google-reviews";
import { Hero } from "@/components/hero";
import { ArrowIcon, CheckIcon, ShieldIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { Photo } from "@/components/photo";
import { RepairFinder } from "@/components/repair-finder";
import { ServiceIcon } from "@/components/service-icons";
import { ButtonLink, Section } from "@/components/ui";
import {
  getBranches,
  getKeywords,
  getOtherLocations,
  getServices,
  SITE_TEXT,
} from "@/lib/content";
import { LTR, localePath, UI, type Locale } from "@/lib/i18n";
import {
  branchSchemas,
  faqSchema,
  graph,
  repairServiceSchema,
  webPageSchema,
} from "@/lib/seo";
import { SITE, waLink } from "@/lib/site";

const COPY = {
  en: {
    schemaTitle: "iLab Tech Support | iPhone & Apple Repair Bahrain",
    trustAria: "Why iLab",
    trust: [
      { k: "120", v: "tests on every ilab approved iPhone" },
      { k: "1 yr", v: "warranty on approved phones & batteries" },
      { k: "3", v: "service centers across Bahrain" },
      { k: "Genuine", v: "original Apple displays for iPhone screen repair" },
    ],
    partnerEyebrow: "Your trusted tech partner in Apple products",
    partnerTitle: "Repairs done right, the first time.",
    partnerIntro:
      "iLab professional technicians serve and satisfy you with fast, reliable service and genuine hospitality. Our main goal is to build trust with every customer.",
    pillars: [
      {
        title: "iPhone Screen Repair",
        body: "Genuine and original Apple display, fitted by professional technicians.",
      },
      {
        title: "Battery service & replacement",
        body: "Backed by a one-year waterproof warranty.",
      },
      {
        title: "iPhone memory upgrade",
        body: "Need more space? Upgrade your iPhone's memory without changing phones.",
      },
    ],
    approvedEyebrow: "Buy from the iLab store",
    approvedTitle: "iLab approved iPhones",
    approvedBody:
      "We provide one year iLab warranty for the iLab approved refurbished iPhone with iLab Shield protection package. Every device goes through 120 tests before it reaches you.",
    approvedPoints: [
      "120-point testing before sale",
      "One-year iLab warranty",
      "iLab Shield protection package",
    ],
    approvedCta: "Shop ilab approved phones",
    badges: [
      "ilab Approved Phones - One Year Warranty",
      "ilab Shield protection package logo",
      "ilab Service logo",
    ],
    svcEyebrow: "Service & repair",
    svcTitle: "Every repair your device needs.",
    svcIntro:
      "From cracked screens to water damage, iPhone, iPad, MacBook, Samsung, Google Pixel and PlayStation — handled by iLab professional technicians.",
    svcWa: (t: string) => `Hi iLab, I need help with: ${t}`,
    quote: "Get a quote",
    devices: "Devices & brands we service",
    fastQuote: "Fast quote",
    fastTitle: "Tell us what's wrong. We'll reply on WhatsApp.",
    howEyebrow: "How it works",
    howTitle: "From broken to fixed in three simple steps.",
    howIntro:
      "Whether you walk into one of our Bahrain service centers or message us first, getting your iPhone, iPad, Samsung or PlayStation repaired with iLab is straightforward.",
    steps: [
      {
        t: "Tell us what's wrong",
        b: "Message us on WhatsApp, call, or visit Dana Mall, Exhibition Avenue or Umm Al Hassam. Share your device, model and the problem you are seeing — a screen crack, a battery that drains fast, water damage or a software fault.",
      },
      {
        t: "We diagnose and quote",
        b: "Our professional technicians run a diagnostic scan so the real fault is found first, then explain the repair, the parts used and the warranty before any work begins.",
      },
      {
        t: "Repair, test and collect",
        b: "Your device is repaired, tested and handed back with warranty coverage. iPhone screen repairs use genuine, original Apple displays and battery replacement carries a one-year waterproof warranty.",
      },
    ],
    aboutEyebrow: "About iLab Tech Support",
    aboutTitle: "Bahrain's dedicated Apple service center.",
    about: [
      "iLab Tech Support is a dedicated Apple service centre in Bahrain, specializing in iPhone repair and providing comprehensive iPhone service, including battery replacement, screen replacement, charge port repair and maintenance of all Apple products. Our professional technicians serve and satisfy you with fast, reliable service delivered with hospitality, because our main goal is to build trust with every customer.",
      "We are not only an iPhone service center. iLab is also a trusted Samsung service center, handling everything from Galaxy screen and battery repairs to Samsung fold phone service, and we offer Google Pixel phone service and repair for owners who want expert care close to home.",
      "Beyond phones, we provide iPad service and repair, MacBook service, Apple AirPods service and repair, Apple headset service and repair, and PlayStation service. A diagnostic scan finds the fault first, so you only pay to fix what is actually wrong.",
      "Thinking of buying instead of repairing? Our iLab approved refurbished iPhones come with a one-year iLab warranty and the iLab Shield protection package, and every device goes through 120 tests before it reaches you. Visit our service centers at Dana Mall in Seef, Exhibition Avenue in Hoora and Umm Al Hassam in Manama — or message us and we will point you to the nearest one.",
    ],
    locEyebrow: "iLab locations",
    locTitle: "Find an iLab service center near you.",
    locIntro:
      "Walk in during business hours or message us first. Three branches across Bahrain, plus partner locations abroad.",
    faqEyebrow: "Questions",
    faqTitle: "Frequently asked questions",
    ctaTitle: "Ready to get your device fixed?",
    ctaBody:
      "Message us or call. Our team will tell you exactly what's wrong and what it takes to fix it.",
    ctaWa: "Chat on WhatsApp",
    ctaCall: "Call",
  },
  ar: {
    schemaTitle: "iLab Tech Support | إصلاح iPhone وأجهزة آبل في البحرين",
    trustAria: "لماذا iLab",
    trust: [
      { k: "120", v: "اختباراً على كل iPhone معتمد من iLab" },
      { k: "سنة", v: "ضمان على الهواتف المعتمدة والبطاريات" },
      { k: "3", v: "مراكز خدمة في أنحاء البحرين" },
      { k: "أصلية", v: "شاشات آبل الأصلية لإصلاح شاشات iPhone" },
    ],
    partnerEyebrow: "شريكك التقني الموثوق لمنتجات آبل",
    partnerTitle: "إصلاح متقن من أول مرة.",
    partnerIntro:
      "يخدمك فنيو iLab المحترفون بسرعة وموثوقية وحسن ضيافة. هدفنا الأول هو بناء الثقة مع كل عميل.",
    pillars: [
      {
        title: "إصلاح شاشات iPhone",
        body: "شاشات آبل أصلية يركّبها فنيون محترفون.",
      },
      {
        title: "خدمة واستبدال البطارية",
        body: "مع ضمان مقاوم للماء لمدة سنة.",
      },
      {
        title: "ترقية ذاكرة iPhone",
        body: "تحتاج مساحة أكبر؟ ارفع ذاكرة جهازك دون الحاجة إلى تغيير الهاتف.",
      },
    ],
    approvedEyebrow: "اشترِ من متجر iLab",
    approvedTitle: "هواتف iPhone المعتمدة من iLab",
    approvedBody:
      "نقدم ضمان iLab لمدة سنة على هواتف iPhone المجددة والمعتمدة من iLab مع باقة الحماية iLab Shield. يخضع كل جهاز لـ120 اختباراً قبل أن يصل إليك.",
    approvedPoints: [
      "فحص من 120 نقطة قبل البيع",
      "ضمان iLab لمدة سنة",
      "باقة الحماية iLab Shield",
    ],
    approvedCta: "تسوّق هواتف iLab المعتمدة",
    badges: [
      "هواتف iLab المعتمدة - ضمان لمدة سنة",
      "شعار باقة الحماية iLab Shield",
      "شعار خدمة iLab",
    ],
    svcEyebrow: "الخدمة والإصلاح",
    svcTitle: "كل إصلاح يحتاجه جهازك.",
    svcIntro:
      "من الشاشات المكسورة إلى أضرار السوائل: iPhone وiPad وMacBook وسامسونج وGoogle Pixel وPlayStation — يتولاها فنيو iLab المحترفون.",
    svcWa: (t: string) => `مرحباً iLab، أحتاج مساعدة في: ${t}`,
    quote: "احصل على عرض سعر",
    devices: "الأجهزة والعلامات التجارية التي نخدمها",
    fastQuote: "عرض سعر سريع",
    fastTitle: "أخبرنا ما المشكلة، وسنردّ عليك عبر واتساب.",
    howEyebrow: "كيف نعمل",
    howTitle: "من العطل إلى الإصلاح في ثلاث خطوات بسيطة.",
    howIntro:
      "سواء زرت أحد مراكز خدمتنا في البحرين أو راسلتنا أولاً، فإصلاح iPhone أو iPad أو سامسونج أو PlayStation لدى iLab سهل ومباشر.",
    steps: [
      {
        t: "أخبرنا بالمشكلة",
        b: "راسلنا عبر واتساب أو اتصل بنا أو زر دانة مول أو شارع المعارض أو أم الحصم. زوّدنا بنوع جهازك وطرازه والمشكلة التي تواجهها — شاشة مكسورة أو بطارية تنفد سريعاً أو أضرار سوائل أو عطل برمجي.",
      },
      {
        t: "نشخّص ونعطيك السعر",
        b: "يجري فنيونا المحترفون فحصاً تشخيصياً لاكتشاف العطل الحقيقي أولاً، ثم يشرحون الإصلاح والقطع المستخدمة والضمان قبل بدء أي عمل.",
      },
      {
        t: "إصلاح واختبار واستلام",
        b: "يُصلَح جهازك ويُختبَر ويُسلَّم إليك مع تغطية الضمان. يعتمد إصلاح شاشات iPhone على شاشات آبل الأصلية، ويأتي استبدال البطارية مع ضمان مقاوم للماء لمدة سنة.",
      },
    ],
    aboutEyebrow: "عن iLab Tech Support",
    aboutTitle: "مركز خدمة آبل المتخصص في البحرين.",
    about: [
      "iLab Tech Support مركز خدمة متخصص بمنتجات آبل في البحرين، يركّز على إصلاح iPhone ويقدم خدمة شاملة تشمل استبدال البطارية واستبدال الشاشة وإصلاح منفذ الشحن وصيانة جميع منتجات آبل. يخدمك فنيونا المحترفون بسرعة وموثوقية وحسن ضيافة، لأن هدفنا الأول هو بناء الثقة مع كل عميل.",
      "نحن لسنا مركز خدمة iPhone فقط. فـiLab أيضاً مركز خدمة سامسونج موثوق، نتولى فيه كل شيء من إصلاح شاشات وبطاريات Galaxy إلى خدمة هواتف سامسونج القابلة للطي، كما نقدم خدمة وإصلاح هواتف Google Pixel لمن يريد عناية متخصصة قريبة منه.",
      "إضافة إلى الهواتف، نقدم خدمة وإصلاح iPad وصيانة MacBook وخدمة وإصلاح AirPods وسماعات آبل وخدمة PlayStation. يكشف الفحص التشخيصي العطل أولاً، فلا تدفع إلا مقابل إصلاح ما يحتاج إصلاحاً فعلاً.",
      "تفكر في الشراء بدلاً من الإصلاح؟ تأتي هواتف iPhone المجددة والمعتمدة من iLab مع ضمان iLab لمدة سنة وباقة الحماية iLab Shield، ويخضع كل جهاز لـ120 اختباراً قبل أن يصل إليك. زر مراكز خدمتنا في دانة مول بالسيف وشارع المعارض في الحورة وأم الحصم في المنامة — أو راسلنا وسنرشدك إلى أقرب فرع.",
    ],
    locEyebrow: "فروع iLab",
    locTitle: "اعثر على أقرب مركز خدمة iLab إليك.",
    locIntro:
      "زرنا خلال ساعات العمل أو راسلنا أولاً. ثلاثة فروع في أنحاء البحرين، إضافة إلى مواقع شريكة في الخارج.",
    faqEyebrow: "أسئلة",
    faqTitle: "الأسئلة الشائعة",
    ctaTitle: "جاهز لإصلاح جهازك؟",
    ctaBody:
      "راسلنا أو اتصل بنا. سيخبرك فريقنا بالضبط ما العطل وما الذي يلزم لإصلاحه.",
    ctaWa: "تحدث معنا عبر واتساب",
    ctaCall: "اتصل",
  },
} as const;

const flip = "rtl:-scale-x-100";

/** Icons for the three highlight cards and the three "how it works" steps. */
const PILLAR_ICONS = ["screen", "battery", "memory"];
const STEP_ICONS = ["mic-speaker", "diagnostic", "power-button"];

export function HomePage({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const t = UI[locale];
  const path = localePath(locale, "/");
  const branches = getBranches(locale);
  const services = getServices(locale);

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema(c.schemaTitle, SITE_TEXT[locale].description, path, locale),
          ...branchSchemas(locale),
          repairServiceSchema(locale),
          faqSchema(locale),
        )}
      />
      <Hero locale={locale} />

      {/* Trust strip */}
      <section aria-label={c.trustAria} className="border-b border-black/5 bg-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-10 md:grid-cols-4">
          {c.trust.map((x) => (
            <div key={x.k} className="reveal px-2 py-3 text-center md:px-6">
              <dt className="font-display text-4xl font-semibold md:text-5xl">
                {x.k}
              </dt>
              <dd className="mx-auto mt-2 max-w-[16rem] text-sm text-charcoal">
                {x.v}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Trusted tech partner */}
      <Section
        eyebrow={c.partnerEyebrow}
        title={c.partnerTitle}
        intro={c.partnerIntro}
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Photo name="water" locale={locale} />
          <div className="grid gap-5">
            {c.pillars.map((p, i) => (
              <article
                key={p.title}
                className="reveal card-lift flex items-start gap-5 rounded-3xl border border-black/5 bg-white p-7 shadow-sm"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-ink text-white">
                  <ServiceIcon slug={PILLAR_ICONS[i]} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-charcoal">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* iLab approved iPhones */}
      <section
        aria-labelledby="approved-title"
        className="on-dark dark-texture overflow-hidden bg-[#0b0b0c] py-20 text-white md:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              {c.approvedEyebrow}
            </p>
            <h2
              id="approved-title"
              className="mt-3 text-3xl font-semibold md:text-5xl"
            >
              {c.approvedTitle}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              {c.approvedBody}
            </p>
            <ul className="mt-7 space-y-3">
              {c.approvedPoints.map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-white text-black">
                    <CheckIcon width={14} height={14} strokeWidth={3} />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={localePath(locale, "/ilab-approved-phone-1")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                {c.approvedCta}{" "}
                <ArrowIcon width={16} height={16} className={flip} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div
              aria-hidden
              className="glow pointer-events-none absolute inset-8 rounded-full bg-sky-300/20 blur-3xl"
            />
            <div className="float relative">
              <Photo name="warranty" locale={locale} className="max-w-sm" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-5 lg:col-span-2 lg:mx-auto lg:w-full lg:max-w-xl">
            {[
              "/images/badge-approved.png",
              "/images/badge-shield.png",
              "/images/badge-service.jpg",
            ].map((src, i) => (
              <div
                key={src}
                className="reveal-zoom relative aspect-square overflow-hidden rounded-3xl bg-white"
              >
                <Image
                  src={src}
                  alt={c.badges[i]}
                  fill
                  sizes="(min-width:1024px) 200px, 30vw"
                  className="scale-[1.45] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        id="services"
        eyebrow={c.svcEyebrow}
        title={c.svcTitle}
        intro={c.svcIntro}
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug} className="reveal">
              <a
                href={waLink(c.svcWa(s.title))}
                data-track="service-card"
                target="_blank"
                rel="noopener noreferrer"
                className="group card-lift flex h-full flex-col justify-between rounded-3xl border border-black/5 bg-white p-6"
              >
                <div>
                  <span className="mb-5 grid size-12 place-items-center rounded-2xl bg-paper text-ink transition duration-300 group-hover:-rotate-6 group-hover:bg-ink group-hover:text-white">
                    <ServiceIcon slug={s.slug} />
                  </span>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal">
                    {s.blurb}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  {c.quote}
                  <ArrowIcon
                    width={16}
                    height={16}
                    className={`transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1 ${flip}`}
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-3xl border border-black/5 bg-white p-8 md:p-10">
          <h3 className="text-xl font-semibold">{c.devices}</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {getKeywords(locale).map((k) => (
              <li
                key={k}
                className="rounded-full border border-black/10 px-4 py-2 text-sm text-charcoal"
              >
                {k}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Repair finder */}
      <section
        aria-labelledby="quote-title"
        className="bg-linear-to-b from-paper to-white py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal/70">
              {c.fastQuote}
            </p>
            <h2 id="quote-title" className="mt-3 text-3xl font-semibold md:text-5xl">
              {c.fastTitle}
            </h2>
          </div>
          <RepairFinder locale={locale} />
        </div>
      </section>

      {/* How it works */}
      <Section eyebrow={c.howEyebrow} title={c.howTitle} intro={c.howIntro}>
        <ol className="grid gap-5 md:grid-cols-3">
          {c.steps.map((s, i) => (
            <li
              key={s.t}
              className="reveal card-lift rounded-3xl border border-black/5 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-full bg-ink font-display text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <span className="text-charcoal/40">
                  <ServiceIcon slug={STEP_ICONS[i]} />
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 leading-relaxed text-charcoal">{s.b}</p>
            </li>
          ))}
        </ol>
      </Section>

      <GoogleReviews locale={locale} />

      {/* About + device coverage (keyword-rich body copy) */}
      <Section eyebrow={c.aboutEyebrow} title={c.aboutTitle}>
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div className="reveal space-y-5 text-lg leading-relaxed text-charcoal">
            {c.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Photo name="showcase" locale={locale} />
        </div>
      </Section>

      {/* Locations */}
      <Section
        id="locations"
        eyebrow={c.locEyebrow}
        title={c.locTitle}
        intro={c.locIntro}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {branches.map((b) => (
            <BranchCard key={b.id} branch={b} locale={locale} />
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {getOtherLocations(locale).map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-3xl border border-black/5 bg-white p-6 transition hover:shadow-lg"
            >
              <span>
                <span className="block font-display text-lg font-semibold">
                  {l.name}
                </span>
                <span className="text-sm text-charcoal">{l.detail}</span>
              </span>
              <ArrowIcon className={flip} />
            </a>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        eyebrow={c.faqEyebrow}
        title={c.faqTitle}
        className="bg-linear-to-b from-white to-paper"
      >
        <Faq locale={locale} />
      </Section>

      {/* Final CTA */}
      <section className="on-dark dark-texture bg-[#0b0b0c] py-20 text-center text-white md:py-28">
        <div className="reveal mx-auto max-w-3xl px-5">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-white/10">
            <ShieldIcon width={26} height={26} />
          </span>
          <h2 className="mt-6 text-3xl font-semibold md:text-5xl">
            {c.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-white/70">{c.ctaBody}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink variant="wa" href={waLink(t.waBook)} track="final-cta">
              {c.ctaWa}
            </ButtonLink>
            <ButtonLink
              variant="light"
              href={`tel:${SITE.phone.tel}`}
              track="final-cta"
            >
              {c.ctaCall} <bdi {...LTR}>{SITE.phone.display}</bdi>
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
