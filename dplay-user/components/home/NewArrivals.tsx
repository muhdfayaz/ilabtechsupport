import { newArrivals } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";

export function NewArrivals() {
  return (
    <section aria-labelledby="arrivals-heading" className="border-t border-black/10 bg-[#f7f7f7] py-10 lg:py-[2.3vw]">
      <Reveal className="mx-auto grid max-w-[1600px] gap-8 px-5 lg:grid-cols-[22.5%_1fr] lg:gap-0 lg:px-10">
        <div>
          <h2 id="arrivals-heading" className="font-display text-[48px] uppercase leading-[0.95] lg:text-[3.6vw]">
            NEW
            <br />
            ARRIVALS
          </h2>
          <p className="mb-6 mt-6 text-[14px] text-black/80 lg:mt-[1.8vw]">Fresh fits. Limited quantities.</p>
          <ArrowLink href="/new-drops" variant="outline">
            EXPLORE ALL
          </ArrowLink>
        </div>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-8 lg:grid-cols-4 lg:gap-x-[1.5vw]">
          {newArrivals.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
