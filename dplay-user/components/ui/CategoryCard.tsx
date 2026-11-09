import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/images";
import type { Category } from "@/data/homepage";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      aria-label={`Shop ${category.label}`}
      className="group block w-[44vw] shrink-0 snap-start bg-[#ececec] sm:w-auto"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#dcdcdc] sm:aspect-[173/150]">
        <Image
          src={img(category.image, 600)}
          alt={`${category.label.toLowerCase()} from the DPLAY collection`}
          fill
          sizes="(min-width: 1024px) 14vw, (min-width: 640px) 18vw, 44vw"
          style={{ objectPosition: category.position }}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      <p className="px-2 py-3 font-display text-lg uppercase tracking-wide sm:text-[17px] lg:text-xl">
        {category.label}
      </p>
    </Link>
  );
}
