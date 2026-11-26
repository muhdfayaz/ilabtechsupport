import { getBranches } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { ALL_REVIEWS, REVIEWS } from "@/lib/reviews";
import { ArrowIcon, PinIcon, StarIcon } from "./icons";
import { ReviewCarousel } from "./review-carousel";
import { Section } from "./ui";

const COPY = {
  en: {
    eyebrow: "Google reviews",
    title: "What our customers say on Google.",
    intro: "Read about each branch on Google, or tell us about your own visit.",
    write: "Review us on Google",
    view: "View on Google Maps",
    carousel: "Customer reviews from Google",
    viewAll: (n: number, branch?: string) =>
      `View all ${n} Google reviews for ${branch}`,
    pause: "Pause reviews",
    play: "Play reviews",
    source: "Google review",
    stars: (n: number) => `${n} out of 5 stars`,
  },
  ar: {
    eyebrow: "تقييمات Google",
    title: "ماذا يقول عملاؤنا على Google.",
    intro: "اطّلع على كل فرع على Google، أو شاركنا تجربة زيارتك.",
    write: "قيّمنا على Google",
    view: "اعرض على خرائط Google",
    carousel: "تقييمات العملاء من Google",
    viewAll: (n: number, branch?: string) =>
      `عرض جميع تقييمات Google لفرع ${branch} (${n})`,
    pause: "إيقاف التقييمات مؤقتاً",
    play: "تشغيل التقييمات",
    source: "تقييم على Google",
    stars: (n: number) => `${n} من 5 نجوم`,
  },
} as const;

/*
 * No Review / AggregateRating JSON-LD on purpose: Google does not allow
 * review rich results for a business marking up reviews about itself.
 */
export function GoogleReviews({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const branches = getBranches(locale);
  return (
    <Section
      id="reviews"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      className="bg-white"
    >
      {REVIEWS.length > 0 && (
        <div className="mb-10">
          <ReviewCarousel label={c.carousel} pauseLabel={c.pause} playLabel={c.play}>
            {REVIEWS.map((r) => (
              <li
                key={`${r.author}-${r.branchId}-${r.text}`}
                className="flex w-[85%] shrink-0 snap-start flex-col rounded-3xl border border-black/5 bg-paper p-7 sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
              >
                <div role="img" aria-label={c.stars(r.rating)} className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <StarIcon
                      key={n}
                      width={18}
                      height={18}
                      className={n <= r.rating ? "text-[#fbbc04]" : "text-black/15"}
                    />
                  ))}
                </div>
                <blockquote dir="auto" className="mt-4 grow whitespace-pre-line leading-relaxed text-charcoal">
                  {r.text}
                </blockquote>
                <p dir="auto" className="mt-6 font-display font-semibold">
                  {r.author}
                </p>
                <p className="text-sm text-charcoal/70">
                  {c.source}
                  {" · "}
                  {branches.find((b) => b.id === r.branchId)?.area}
                </p>
              </li>
            ))}
          </ReviewCarousel>
        </div>
      )}
      <div className="reveal mb-10 text-center">
        <a
          href={ALL_REVIEWS.url}
          data-track="google-reviews-all"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition hover:bg-black"
        >
          <StarIcon width={16} height={16} className="shrink-0 text-[#fbbc04]" />
          {c.viewAll(
            ALL_REVIEWS.count,
            branches.find((b) => b.id === ALL_REVIEWS.branchId)?.area,
          )}
          <ArrowIcon width={16} height={16} className="shrink-0 rtl:-scale-x-100" />
        </a>
      </div>
      <ul className="grid gap-5 md:grid-cols-3">
        {branches.map((b) => (
          <li
            key={b.id}
            className="reveal card-lift flex flex-col items-start rounded-3xl border border-black/5 bg-paper p-7"
          >
            <h3 className="text-lg font-semibold">{b.area}</h3>
            <a
              href={b.reviewUrl}
              data-track="google-review"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              <StarIcon width={16} height={16} className="text-[#fbbc04]" />
              {c.write}
            </a>
            <a
              href={b.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-charcoal underline-offset-4 hover:underline"
            >
              <PinIcon width={16} height={16} />
              {c.view}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
