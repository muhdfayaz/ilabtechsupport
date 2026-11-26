"use client";

import { useSyncExternalStore } from "react";
import { SITE } from "@/lib/site";

const noop = () => () => {};

/**
 * Scraper-safe email link. The address is never present in the server HTML
 * (the SEO audit flagged plain-text emails); it is assembled in the browser
 * after hydration. Until then a neutral label is shown.
 */
export function EmailLink({
  className,
  label = "Email us",
  showAddress = true,
}: {
  className?: string;
  label?: string;
  showAddress?: boolean;
}) {
  const ready = useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
  const address = `${SITE.emailUser}@${SITE.emailDomain}`;

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        window.location.href = `mailto:${address}`;
      }}
      data-track="email"
    >
      {ready && showAddress ? address : label}
    </button>
  );
}
