"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchLocalePath, UI, type Locale } from "@/lib/i18n";

/** Links to the same page in the other language (hreflang-tagged for crawlers). */
export function LanguageSwitch({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  const other = locale === "en" ? "ar" : "en";
  const t = UI[locale];
  return (
    <Link
      href={switchLocalePath(pathname)}
      hrefLang={other}
      lang={other}
      aria-label={t.switchAria}
      className={className}
    >
      {t.switchLabel}
    </Link>
  );
}
