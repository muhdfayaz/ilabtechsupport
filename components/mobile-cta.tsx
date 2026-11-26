import { UI, type Locale } from "@/lib/i18n";
import { SITE, waLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

/** Thumb-reach conversion bar, mobile only. */
export function MobileCta({ locale }: { locale: Locale }) {
  const t = UI[locale];
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-black/10 bg-white/90 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <a
        href={`tel:${SITE.phone.tel}`}
        data-track="mobile-bar"
        className="flex items-center justify-center gap-2 rounded-xl bg-ink py-3 text-sm font-semibold text-white"
      >
        <PhoneIcon width={18} height={18} /> {t.callNow}
      </a>
      <a
        href={waLink(t.waBook)}
        data-track="mobile-bar"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-xl bg-wa py-3 text-sm font-semibold text-black"
      >
        <WhatsAppIcon width={18} height={18} /> {t.whatsapp}
      </a>
    </div>
  );
}
