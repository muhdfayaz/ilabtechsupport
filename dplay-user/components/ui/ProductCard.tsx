"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { img } from "@/lib/images";
import { formatINR, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);
  const reduce = useReducedMotion();

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-[#e4e4e4] sm:aspect-[207/197]">
        <Link href={product.href} aria-label={`View ${product.name}`} className="absolute inset-0 block">
          <Image
            src={img(product.image, 700)}
            alt={`${product.name} — DPLAY`}
            fill
            sizes="(min-width: 1024px) 18vw, 50vw"
            style={{ objectPosition: product.position }}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>
        <span className="pointer-events-none absolute left-3 top-3 bg-ink px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
          {product.badge}
        </span>
        <motion.button
          type="button"
          onClick={() => setWished((w) => !w)}
          aria-pressed={wished}
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          whileTap={reduce ? undefined : { scale: 0.8 }}
          className="absolute right-3 top-3 grid size-8 place-items-center rounded-full text-ink transition-colors hover:bg-white/80"
        >
          <Heart
            size={20}
            strokeWidth={1.75}
            className="transition-all duration-200"
            fill={wished ? "#0a0a0a" : "transparent"}
          />
        </motion.button>
      </div>
      <div className="px-0.5 pt-3">
        <h3 className="font-display text-[15px] uppercase tracking-wide">{product.name}</h3>
        <p className="font-display text-[14px] text-black/80">{formatINR(product.price)}</p>
        <ul className="mt-2 flex gap-1.5" aria-label="Available colours">
          {product.swatches.map((s) => (
            <li
              key={s.name}
              title={s.name}
              className="size-3.5 rounded-full border border-black/20"
              style={{ background: s.color }}
            >
              <span className="sr-only">{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
