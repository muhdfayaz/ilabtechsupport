import type { ReactNode } from "react";
import { JsonLd } from "./json-ld";
import { PageHero } from "./ui";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/seo";
import { localePath, UI, type Locale } from "@/lib/i18n";

export function LegalPage({
  title,
  description,
  path,
  updated,
  locale = "en",
  children,
}: {
  title: string;
  description: string;
  path: string;
  updated: string;
  locale?: Locale;
  children: ReactNode;
}) {
  const t = UI[locale];
  const full = localePath(locale, path);
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema(title, description, full, locale),
          breadcrumbSchema([
            { name: t.home, path: localePath(locale, "/") },
            { name: title, path: full },
          ]),
        )}
      />
      <PageHero
        title={title}
        crumbs={[{ name: t.home, href: localePath(locale, "/") }, { name: title }]}
      />
      <article className="mx-auto max-w-3xl px-5 py-16 leading-relaxed text-charcoal [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_ul]:ms-5 [&_ul]:list-disc [&_ul]:space-y-1 [&_a]:font-medium [&_a]:text-ink [&_a]:underline">
        <p className="text-sm text-charcoal/70">{t.updated}: {updated}</p>
        {children}
      </article>
    </>
  );
}
