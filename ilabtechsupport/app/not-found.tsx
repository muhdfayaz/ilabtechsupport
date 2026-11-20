import type { Metadata } from "next";
import { ButtonLink, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Page not found | iLab Tech Support" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page not found"
        intro="The page you're looking for has moved or doesn't exist."
        crumbs={[{ name: "Home", href: "/" }, { name: "404" }]}
      />
      <div className="mx-auto flex max-w-7xl gap-3 px-5 py-16">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/contact-us" variant="light">
          Contact us
        </ButtonLink>
      </div>
    </>
  );
}
