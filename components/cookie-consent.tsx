"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { UI, type Locale } from "@/lib/i18n";

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    gtag?: Gtag;
  }
}

const KEY = "ilab-consent";

function readStored(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}
function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function track(name: string, params: Record<string, string>) {
  window.gtag?.("event", name, params);
}

/**
 * Cookie banner (parity with the original site) + a delegated click tracker
 * that reports phone / WhatsApp / directions clicks as GA4 events.
 */
export function CookieConsent({ locale }: { locale: Locale }) {
  const t = UI[locale];
  // "server" snapshot keeps the banner out of the prerendered HTML.
  const stored = useSyncExternalStore(subscribe, readStored, () => "server");
  const [dismissed, setDismissed] = useState(false);
  const visible = stored === null && !dismissed;

  useEffect(() => {

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const where = a.getAttribute("data-track") ?? "link";
      if (href.startsWith("tel:")) track("phone_click", { location: where });
      else if (href.includes("wa.me/"))
        track("whatsapp_click", { location: where });
      else if (/maps|share\.google|g\.page/.test(href))
        track("directions_click", { location: where });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function decide(granted: boolean) {
    try {
      localStorage.setItem(KEY, granted ? "granted" : "denied");
    } catch {}
    if (granted) {
      window.gtag?.("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
      (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.(
        "consent",
        "grant",
      );
    }
    setDismissed(true);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t.cookieAria}
      className="fixed inset-x-3 bottom-20 z-60 mx-auto max-w-xl rounded-2xl border border-black/10 bg-white/95 p-4 shadow-2xl backdrop-blur md:bottom-6 md:start-auto md:end-6 md:mx-0"
    >
      <p className="text-sm font-semibold">{t.cookieTitle}</p>
      <p className="mt-1 text-sm text-charcoal">
        {t.cookieBody}
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => decide(true)}
          className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-white transition hover:bg-black"
        >
          {t.accept}
        </button>
        <button
          type="button"
          onClick={() => decide(false)}
          className="rounded-full px-5 py-2 text-sm font-medium text-charcoal transition hover:bg-black/5"
        >
          {t.decline}
        </button>
      </div>
    </div>
  );
}
