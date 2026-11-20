import type { ReactNode } from "react";
import { JsonLd } from "./json-ld";
import { PageHero } from "./ui";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/seo";

export function LegalPage({
  title,
  description,
  path,
  updated,
  children,
}: {
  title: string;
  description: string;
  path: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema(title, description, path),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: title, path },
          ]),
        )}
      />
      <PageHero
        title={title}
        crumbs={[{ name: "Home", href: "/" }, { name: title }]}
      />
      <article className="mx-auto max-w-3xl px-5 py-16 leading-relaxed text-charcoal [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1 [&_a]:font-medium [&_a]:text-ink [&_a]:underline">
        <p className="text-sm text-charcoal/70">Last updated: {updated}</p>
        {children}
      </article>
    </>
  );
}
