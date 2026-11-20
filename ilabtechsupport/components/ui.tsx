import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  id,
  title,
  eyebrow,
  intro,
  children,
  dark,
  className = "",
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  intro?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={`${dark ? "on-dark bg-[#0b0b0c] text-white" : ""} py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <header className="mb-12 max-w-2xl">
          {eyebrow && (
            <p
              className={`text-xs font-semibold uppercase tracking-[0.25em] ${dark ? "text-white/60" : "text-charcoal/70"}`}
            >
              {eyebrow}
            </p>
          )}
          <h2
            id={id ? `${id}-title` : undefined}
            className="mt-3 text-3xl font-semibold md:text-5xl"
          >
            {title}
          </h2>
          {intro && (
            <p
              className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/70" : "text-charcoal"}`}
            >
              {intro}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

/** Dark banner at the top of inner pages (header sits above it). */
export function PageHero({
  title,
  intro,
  crumbs,
}: {
  title: string;
  intro?: string;
  crumbs: { name: string; href?: string }[];
}) {
  return (
    <section className="on-dark bg-[#0b0b0c] pb-16 pt-32 text-white md:pb-20 md:pt-40">
      <div className="mx-auto max-w-7xl px-5">
        <nav aria-label="Breadcrumb" className="text-sm text-white/60">
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((c, i) => (
              <li key={c.name} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-white">
                    {c.name}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white">
                    {c.name}
                  </span>
                )}
                {i < crumbs.length - 1 && <span aria-hidden>/</span>}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-silver-gradient mt-6 max-w-3xl text-4xl font-semibold md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "dark",
  external,
  track,
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "wa";
  external?: boolean;
  track?: string;
}) {
  const styles = {
    dark: "bg-ink text-white hover:bg-black",
    light: "border border-black/15 bg-white text-ink hover:bg-black/5",
    wa: "bg-wa text-black hover:brightness-110",
  }[variant];
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${styles}`;
  if (external || /^(https?:|tel:|mailto:)/.test(href)) {
    return (
      <a
        href={href}
        data-track={track}
        className={cls}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
