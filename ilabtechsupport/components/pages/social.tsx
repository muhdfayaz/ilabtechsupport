import { SocialIcons } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero, Section } from "@/components/ui";
import { localePath, UI, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

const COPY = {
  en: {
    title: "Follow iLab Tech Support | Instagram, TikTok & YouTube",
    desc: "Follow iLab Tech Support on Instagram, TikTok, YouTube and Facebook for repair tips, new arrivals and updates from our Bahrain service centers.",
    h1: "Follow iLab",
    intro:
      "Repair tips, new arrivals and behind-the-scenes from our Bahrain service centers.",
    section: "Find us online",
    names: { instagram: "Instagram", tiktok: "TikTok", youtube: "YouTube", facebook: "Facebook" },
    fb: "iLab Tech Support",
    newTo: "New to our channel?",
    subscribe: "Subscribe on YouTube",
    after: "for repair walkthroughs and new iLab approved arrivals.",
  },
  ar: {
    title: "تابع iLab Tech Support | إنستغرام وتيك توك ويوتيوب",
    desc: "تابع iLab Tech Support على إنستغرام وتيك توك ويوتيوب وفيسبوك لنصائح الإصلاح والوصولات الجديدة وآخر أخبار مراكز خدمتنا في البحرين.",
    h1: "تابع iLab",
    intro:
      "نصائح إصلاح ووصولات جديدة ولقطات من كواليس مراكز خدمتنا في البحرين.",
    section: "تجدنا على الإنترنت",
    names: { instagram: "إنستغرام", tiktok: "تيك توك", youtube: "يوتيوب", facebook: "فيسبوك" },
    fb: "iLab Tech Support",
    newTo: "جديد على قناتنا؟",
    subscribe: "اشترك على يوتيوب",
    after: "لمشاهدة شروحات الإصلاح وأحدث أجهزة iLab المعتمدة.",
  },
} as const;

export const socialMetadata = (locale: Locale) =>
  buildMetadata({
    title: COPY[locale].title,
    description: COPY[locale].desc,
    path: "/social-media",
    locale,
  });

export function SocialPage({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const t = UI[locale];
  const path = localePath(locale, "/social-media");
  const list = [
    { key: "instagram", href: SITE.social.instagram, handle: "@ilabtechsupport" },
    { key: "tiktok", href: SITE.social.tiktok, handle: "@ilabtechsupport" },
    { key: "youtube", href: SITE.social.youtube, handle: "@ilabtechsupport" },
    { key: "facebook", href: SITE.social.facebook, handle: c.fb },
  ] as const;
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
        photo={{ name: "showcase", locale }}
        crumbs={[{ name: t.home, href: localePath(locale, "/") }, { name: c.h1 }]}
      />
      <Section title={c.section}>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map(({ key, href, handle }) => {
            const Icon = SocialIcons[key];
            return (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="reveal card-lift flex h-full flex-col rounded-3xl border border-black/5 bg-white p-7"
                >
                  <Icon width={28} height={28} />
                  <span className="mt-6 font-display text-xl font-semibold">
                    {c.names[key]}
                  </span>
                  <span className="mt-1 text-sm text-charcoal">
                    <bdi dir="ltr">{handle}</bdi>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="mt-10 text-charcoal">
          {c.newTo}{" "}
          <a
            href={`${SITE.youtubeChannel}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer me"
            className="font-medium text-ink underline"
          >
            {c.subscribe}
          </a>{" "}
          {c.after}
        </p>
      </Section>
    </>
  );
}
