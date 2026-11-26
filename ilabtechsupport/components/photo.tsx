import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import showcase from "@/public/images/photos/iphone-showcase.jpg";
import warranty from "@/public/images/photos/iphone-warranty-card.jpg";
import water from "@/public/images/photos/iphone-water-test.jpg";

/** Brand stills taken from the hero video. Alt text describes only what is shown. */
const PHOTOS = {
  warranty: {
    src: warranty,
    alt: {
      en: "Hand holding an iPhone that shows an iLab Shield warranty card",
      ar: "يد تحمل iPhone تظهر على شاشته بطاقة ضمان iLab Shield",
    },
  },
  water: {
    src: water,
    alt: {
      en: "Phone submerged in a water tank next to a goldfish",
      ar: "هاتف مغمور في حوض ماء بجانب سمكة ذهبية",
    },
  },
  showcase: {
    src: showcase,
    alt: {
      en: "iPhone showing the iLab Tech Support logo and iLab Shield warranty card",
      ar: "iPhone يعرض شعار iLab Tech Support وبطاقة ضمان iLab Shield",
    },
  },
} as const;

export type PhotoName = keyof typeof PHOTOS;

export function Photo({
  name,
  locale,
  className = "",
}: {
  name: PhotoName;
  locale: Locale;
  className?: string;
}) {
  const p = PHOTOS[name];
  return (
    <figure className={`reveal-zoom mx-auto w-full max-w-md ${className}`}>
      <div className="photo-frame group relative aspect-[4/5] overflow-hidden rounded-[2rem]">
        <Image
          src={p.src}
          alt={p.alt[locale]}
          fill
          placeholder="blur"
          sizes="(min-width:1024px) 448px, 90vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
        />
      </div>
    </figure>
  );
}
