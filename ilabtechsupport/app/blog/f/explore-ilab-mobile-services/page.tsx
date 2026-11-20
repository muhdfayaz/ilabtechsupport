import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ButtonLink, PageHero } from "@/components/ui";
import { POSTS } from "@/lib/posts";
import {
  breadcrumbSchema,
  buildMetadata,
  graph,
  ORG_ID,
} from "@/lib/seo";
import { REPAIR_SERVICES, SITE_URL, waLink } from "@/lib/site";

const post = POSTS[0];

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${post.title} | iLab Tech Support Bahrain`,
    description: post.description,
    path: post.path,
    type: "article",
  }),
};

export default function PostPage() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "BlogPosting",
            "@id": `${SITE_URL}${post.path}`,
            mainEntityOfPage: `${SITE_URL}${post.path}`,
            headline: post.title,
            description: post.description,
            datePublished: post.published,
            dateModified: post.modified,
            image: `${SITE_URL}/opengraph-image`,
            author: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
            inLanguage: "en",
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: post.path },
          ]),
        )}
      />
      <PageHero
        title={post.heading}
        intro={post.title}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title },
        ]}
      />
      <article className="mx-auto max-w-3xl px-5 py-16 text-lg leading-relaxed text-charcoal [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-ink [&_a]:font-medium [&_a]:text-ink [&_a]:underline">
        <p>
          <time dateTime={post.published} className="text-sm">
            Published {post.published}
          </time>
        </p>
        <p className="mt-6">
          iLab Tech Support is a dedicated Apple service centre in Bahrain.
          Our professional technicians serve you with fast, reliable service
          and real hospitality — our main goal is to build trust with every
          customer.
        </p>

        <h2>What we repair</h2>
        <ul className="ml-5 list-disc space-y-2">
          {REPAIR_SERVICES.map((s) => (
            <li key={s.slug}>
              <strong className="text-ink">{s.title}</strong> — {s.blurb}
            </li>
          ))}
        </ul>

        <h2>Apple, Samsung, Google Pixel &amp; PlayStation</h2>
        <p>
          Beyond iPhone, we service iPad, MacBook, Apple AirPods and headsets,
          Samsung phones (including foldables), Google Pixel phones and
          PlayStation consoles.
        </p>

        <h2>ilab approved phones</h2>
        <p>
          Looking to buy? Our <Link href="/ilab-approved-phone-1">ilab approved
          refurbished iPhones</Link> go through 120 tests and include a
          one-year ilab warranty with the ilab Shield protection package.
        </p>

        <h2>Visit a service center</h2>
        <p>
          Find us at Dana Mall (Seef), Exhibition Avenue (Hoora) and Umm Al
          Hassam in Manama.{" "}
          <Link href="/get-directions-1">Get directions</Link> or{" "}
          <Link href="/contact-us">contact us</Link>.
        </p>

        <div className="mt-12">
          <ButtonLink
            variant="wa"
            href={waLink("Hi iLab, I read your blog and need a repair.")}
            track="blog-post"
          >
            Book a repair on WhatsApp
          </ButtonLink>
        </div>
      </article>
    </>
  );
}
