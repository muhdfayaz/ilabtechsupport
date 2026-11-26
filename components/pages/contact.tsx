import { BranchCard } from "@/components/branch-card";
import { EmailLink } from "@/components/email-link";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { ButtonLink, PageHero, Section } from "@/components/ui";
import { getBranches } from "@/lib/content";
import { LTR, localePath, UI, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo";
import { SITE, waLink } from "@/lib/site";

const COPY = {
  en: {
    title: "Contact iLab Tech Support | iPhone Repair in Bahrain",
    desc: "Contact iLab Tech Support for iPhone and Apple repair in Bahrain. Call, message us on WhatsApp or visit one of our three service centers in person.",
    h1: "Contact us",
    intro:
      "Better yet, see us in person! We love our customers, so feel free to visit during normal business hours.",
    section: "Talk to a real technician",
    fastest: "fastest reply",
    call: "Call us",
    email: "Email",
    visit: "Visit a branch",
    directions: "Get directions",
  },
  ar: {
    title: "تواصل مع iLab Tech Support | إصلاح iPhone في البحرين",
    desc: "تواصل مع iLab Tech Support لإصلاح iPhone وأجهزة آبل في البحرين. اتصل بنا أو راسلنا عبر واتساب أو زر أحد مراكز خدمتنا الثلاثة مباشرة.",
    h1: "اتصل بنا",
    intro:
      "الأفضل أن نراك شخصياً! نحب عملاءنا، فزرنا خلال ساعات العمل المعتادة.",
    section: "تحدث مع فني حقيقي",
    fastest: "أسرع ردّ",
    call: "اتصل بنا",
    email: "البريد الإلكتروني",
    visit: "زر أحد الفروع",
    directions: "احصل على الاتجاهات",
  },
} as const;

export const contactMetadata = (locale: Locale) =>
  buildMetadata({
    title: COPY[locale].title,
    description: COPY[locale].desc,
    path: "/contact-us",
    locale,
  });

export function ContactPage({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const t = UI[locale];
  const path = localePath(locale, "/contact-us");
  return (
    <>
      <JsonLd
        data={graph(
          { ...webPageSchema(c.title, c.desc, path, locale), "@type": "ContactPage" },
          breadcrumbSchema([
            { name: t.home, path: localePath(locale, "/") },
            { name: c.h1, path },
          ]),
        )}
      />
      <PageHero
        title={c.h1}
        intro={c.intro}
        crumbs={[{ name: t.home, href: localePath(locale, "/") }, { name: c.h1 }]}
      />
      <Section title={c.section}>
        <div className="grid gap-5 md:grid-cols-3">
          <a
            href={waLink(t.waQuestion)}
            data-track="contact"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-wa p-8 text-black transition hover:brightness-105"
          >
            <WhatsAppIcon width={28} height={28} />
            <h3 className="mt-6 text-xl font-semibold">{t.whatsapp}</h3>
            <p className="mt-1 text-sm">
              <bdi {...LTR}>{SITE.phone.display}</bdi> · {c.fastest}
            </p>
          </a>
          <a
            href={`tel:${SITE.phone.tel}`}
            data-track="contact"
            className="rounded-3xl bg-ink p-8 text-white transition hover:bg-black"
          >
            <PhoneIcon width={28} height={28} />
            <h3 className="mt-6 text-xl font-semibold">{c.call}</h3>
            <p className="mt-1 text-sm text-white/70">
              <bdi {...LTR}>{SITE.phone.display}</bdi> ·{" "}
              <bdi {...LTR}>{SITE.phone2.display}</bdi>
            </p>
          </a>
          <div className="rounded-3xl border border-black/10 bg-white p-8 transition hover:shadow-lg">
            <span className="grid size-7 place-items-center font-display text-2xl">@</span>
            <h3 className="mt-6 text-xl font-semibold">{c.email}</h3>
            <EmailLink
              label={t.email}
              className="mt-1 break-all text-start text-sm text-charcoal underline-offset-4 hover:underline"
            />
          </div>
        </div>

        <h2 className="mb-8 mt-20 text-2xl font-semibold md:text-3xl">{c.visit}</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {getBranches(locale).map((b) => (
            <BranchCard key={b.id} branch={b} locale={locale} />
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href={localePath(locale, "/get-directions-1")} variant="light">
            {c.directions}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
