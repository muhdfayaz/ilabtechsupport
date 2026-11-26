import { BranchCard } from "@/components/branch-card";
import { JsonLd } from "@/components/json-ld";
import { PageHero, Section } from "@/components/ui";
import { getBranches } from "@/lib/content";
import { localePath, UI, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo";
import { BRANCHES } from "@/lib/site";

const COPY = {
  en: {
    title: "Get Directions to iLab Tech Support Bahrain | iPhone Repair",
    desc: "Expert Apple iPhone repair at iLab Tech Support. Visit our service center for fast, reliable iPhone repair services in Bahrain. Book your appointment now!",
    h1: "Get directions",
    intro:
      "iLab Tech Support is a dedicated Apple service centre, specializing in iPhone repair and providing comprehensive iPhone service, including battery replacement and maintenance of all Apple products.",
    section: "Our Bahrain service centers",
    map: (a: string) => `Map of ${a}`,
  },
  ar: {
    title: "الاتجاهات إلى iLab Tech Support البحرين | إصلاح iPhone",
    desc: "إصلاح iPhone من آبل على أيدي الخبراء في iLab Tech Support. زر مركز خدمتنا للحصول على إصلاح سريع وموثوق في البحرين. احجز موعدك الآن!",
    h1: "الاتجاهات",
    intro:
      "iLab Tech Support مركز خدمة متخصص بمنتجات آبل، يركّز على إصلاح iPhone ويقدم خدمة شاملة تشمل استبدال البطارية وصيانة جميع منتجات آبل.",
    section: "مراكز خدمتنا في البحرين",
    map: (a: string) => `خريطة ${a}`,
  },
} as const;

export const directionsMetadata = (locale: Locale) =>
  buildMetadata({
    title: COPY[locale].title,
    description: COPY[locale].desc,
    path: "/get-directions-1",
    locale,
  });

export function DirectionsPage({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const t = UI[locale];
  const path = localePath(locale, "/get-directions-1");
  const branches = getBranches(locale);
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema(c.title, c.desc, path, locale),
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
          {branches.map((b) => (
            <BranchCard key={b.id} branch={b} locale={locale} />
          ))}
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {branches.map((b, i) => (
            <figure
              key={b.id}
              className="overflow-hidden rounded-3xl border border-black/5 bg-white"
            >
              <iframe
                title={c.map(b.area)}
                src={`https://www.google.com/maps?q=${encodeURIComponent(BRANCHES[i].mapsEmbedQuery)}&hl=${locale}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full border-0"
              />
              <figcaption className="p-4 text-sm font-medium">{b.area}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
