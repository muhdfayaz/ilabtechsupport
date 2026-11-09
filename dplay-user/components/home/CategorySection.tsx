import { MoveUpRight } from "lucide-react";
import { categories } from "@/data/homepage";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { Reveal } from "@/components/ui/Reveal";

export function CategorySection() {
  return (
    <section aria-labelledby="category-heading" className="bg-[#f4f4f4] py-8 lg:py-5">
      <Reveal className="mx-auto grid max-w-[1600px] gap-6 px-5 lg:grid-cols-[22.5%_1fr] lg:gap-0 lg:px-10">
        <div className="flex items-end justify-between lg:flex-col lg:items-start lg:justify-between lg:pb-10">
          <h2 id="category-heading" className="font-display text-[44px] uppercase leading-[0.95] lg:text-[3.1vw]">
            SHOP
            <br />
            BY CATEGORY
          </h2>
          <MoveUpRight aria-hidden strokeWidth={1.5} className="size-8 lg:ml-[75%] lg:size-9" />
        </div>
        <ul className="hide-scrollbar -mx-5 flex snap-x gap-2 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-5 sm:overflow-visible sm:px-0 lg:gap-2.5">
          {categories.map((c) => (
            <li key={c.id} className="contents sm:block">
              <CategoryCard category={c} />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
