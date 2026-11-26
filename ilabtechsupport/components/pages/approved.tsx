import Image from "next/image";
import { CheckIcon, WhatsAppIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { ButtonLink, PageHero, Section } from "@/components/ui";
import { localePath, UI, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo";
import { SITE_URL, waLink } from "@/lib/site";

const IMGS = [
  "/images/badge-approved.png",
  "/images/badge-shield.png",
  "/images/badge-service.jpg",
];

const COPY = {
  en: {
    title: "iLab Approved iPhones | One-Year Warranty | Bahrain",
    desc: "Explore the ilab approved phone for top tech support services in Bahrain, including iPhone repairs and expert assistance.",
    h1: "ilab approved phones",
    crumb: "ilab approved phone",
    intro:
      "Buy it from the ilab store. We provide one year ilab warranty for the ilab approved refurbished iPhone with ilab Shield protection package. Your device goes through 120 tests before it reaches you.",
    section: "Why buy ilab approved?",
    sectionIntro:
      "Refurbished doesn't have to mean risky. Every ilab approved iPhone is tested, protected and warrantied.",
    points: [
      { title: "ilab Approved", body: "Refurbished iPhones that go through 120 tests before they reach you." },
      { title: "ilab Shield protection", body: "Every approved iPhone includes the ilab Shield protection package." },
      { title: "One-year ilab warranty", body: "A full year of ilab warranty, backed by our Bahrain service centers." },
    ],
    stock: "Check current stock & pricing",
    stockBody:
      "Message us with the model you want and we'll confirm what's available.",
    ask: "Ask on WhatsApp",
    wa: "Hi iLab, I'm interested in an ilab approved iPhone.",
    product: "ilab approved refurbished iPhone",
    productDesc:
      "Refurbished iPhone tested 120 times, with one-year ilab warranty and ilab Shield protection package.",
  },
  ar: {
    title: "هواتف iPhone المعتمدة من iLab | ضمان سنة | البحرين",
    desc: "اكتشف هواتف iLab المعتمدة: أجهزة iPhone مجددة تخضع لـ120 اختباراً مع ضمان iLab لمدة سنة وباقة الحماية iLab Shield في البحرين.",
    h1: "هواتف iLab المعتمدة",
    crumb: "هواتف iLab المعتمدة",
    intro:
      "اشترِ من متجر iLab. نقدم ضمان iLab لمدة سنة على هواتف iPhone المجددة والمعتمدة مع باقة الحماية iLab Shield. يخضع جهازك لـ120 اختباراً قبل أن يصل إليك.",
    section: "لماذا تشتري هاتفاً معتمداً من iLab؟",
    sectionIntro:
      "الجهاز المجدد لا يعني المخاطرة. كل iPhone معتمد من iLab مفحوص ومحمي وبضمان.",
    points: [
      { title: "معتمد من iLab", body: "هواتف iPhone مجددة تخضع لـ120 اختباراً قبل أن تصل إليك." },
      { title: "حماية iLab Shield", body: "يشمل كل iPhone معتمد باقة الحماية iLab Shield." },
      { title: "ضمان iLab لمدة سنة", body: "ضمان iLab كامل لمدة سنة، تدعمه مراكز خدمتنا في البحرين." },
    ],
    stock: "تحقق من المخزون والأسعار الحالية",
    stockBody: "راسلنا بالطراز الذي تريده وسنؤكد لك المتوفر.",
    ask: "اسأل عبر واتساب",
    wa: "مرحباً iLab، أنا مهتم بهاتف iPhone معتمد من iLab.",
    product: "هاتف iPhone مجدد ومعتمد من iLab",
    productDesc:
      "هاتف iPhone مجدد خضع لـ120 اختباراً، مع ضمان iLab لمدة سنة وباقة الحماية iLab Shield.",
  },
} as const;

export const approvedMetadata = (locale: Locale) =>
  buildMetadata({
    title: COPY[locale].title,
    description: COPY[locale].desc,
    path: "/ilab-approved-phone-1",
    locale,
  });

export function ApprovedPhonePage({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const t = UI[locale];
  const path = localePath(locale, "/ilab-approved-phone-1");
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema(c.title, c.desc, path, locale),
          breadcrumbSchema([
            { name: t.home, path: localePath(locale, "/") },
            { name: c.crumb, path },
          ]),
          {
            "@type": "Product",
            name: c.product,
            description: c.productDesc,
            brand: { "@type": "Brand", name: "Apple" },
            itemCondition: "https://schema.org/RefurbishedCondition",
            image: `${SITE_URL}/images/badge-approved.png`,
            seller: { "@id": `${SITE_URL}/#organization` },
          },
        )}
      />
      <PageHero
        title={c.h1}
        intro={c.intro}
        crumbs={[{ name: t.home, href: localePath(locale, "/") }, { name: c.crumb }]}
      />
      <Section title={c.section} intro={c.sectionIntro}>
        <div className="grid gap-6 md:grid-cols-3">
          {c.points.map((p, i) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm"
            >
              <div className="relative aspect-square bg-white">
                <Image
                  src={IMGS[i]}
                  alt={p.title}
                  fill
                  sizes="(min-width:768px) 380px, 90vw"
                  className="scale-[1.35] object-cover"
                />
              </div>
              <div className="p-7">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <CheckIcon width={18} height={18} strokeWidth={3} />
                  {p.title}
                </h3>
                <p className="mt-2 leading-relaxed text-charcoal">{p.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink p-8 text-white md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">{c.stock}</h2>
            <p className="mt-2 text-white/70">{c.stockBody}</p>
          </div>
          <ButtonLink variant="wa" href={waLink(c.wa)} track="approved-phones">
            <WhatsAppIcon width={18} height={18} /> {c.ask}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
