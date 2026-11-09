import { IMG } from "@/lib/images";
import { newArrivals, type Product } from "@/data/products";

export type DropCategory = "T-SHIRTS" | "HOODIES" | "SHIRTS" | "BOTTOMS" | "ACCESSORIES";

export type DropProduct = Omit<Product, "badge"> & {
  badge: Product["badge"] | "LAST FEW";
  category: DropCategory;
  drop: string;
};

const categoryOf: Record<string, DropCategory> = {
  "glitch-tee": "T-SHIRTS",
  "crosshair-tee": "T-SHIRTS",
  "core-hoodie": "HOODIES",
  "outline-shirt": "SHIRTS",
};

const base: DropProduct[] = newArrivals.map((p) => ({ ...p, category: categoryOf[p.id], drop: "DROP_003" }));

export const dropProducts: DropProduct[] = [
  ...base,
  {
    id: "trace-cargo",
    name: "TRACE CARGO",
    price: 2599,
    badge: "NEW",
    image: IMG.catBottoms,
    position: "50% 50%",
    href: "/product/trace-cargo",
    swatches: [
      { name: "Black", color: "#0a0a0a" },
      { name: "Olive", color: "#59604a" },
    ],
    category: "BOTTOMS",
    drop: "DROP_003",
  },
  {
    id: "edge-cap",
    name: "EDGE CAP",
    price: 899,
    badge: "LAST FEW",
    image: IMG.catAccessory,
    position: "50% 45%",
    href: "/product/edge-cap",
    swatches: [
      { name: "Black", color: "#0a0a0a" },
      { name: "Off-white", color: "#d9d9d9" },
    ],
    category: "ACCESSORIES",
    drop: "DROP_003",
  },
  {
    id: "static-zip",
    name: "STATIC ZIP HOODIE",
    price: 2799,
    badge: "NEW",
    image: IMG.heroJacket,
    position: "50% 30%",
    href: "/product/static-zip",
    swatches: [{ name: "Charcoal", color: "#2b2b2b" }],
    category: "HOODIES",
    drop: "DROP_003",
  },
  {
    id: "brick-tee",
    name: "BRICK TEE",
    price: 1499,
    badge: "BESTSELLER",
    image: IMG.heroBrick,
    position: "50% 40%",
    href: "/product/brick-tee",
    swatches: [
      { name: "Brick", color: "#8a3b2c" },
      { name: "Black", color: "#0a0a0a" },
    ],
    category: "T-SHIRTS",
    drop: "DROP_002",
  },
];

export const dropFilters = ["ALL", "T-SHIRTS", "HOODIES", "SHIRTS", "BOTTOMS", "ACCESSORIES"] as const;
export type DropFilter = (typeof dropFilters)[number];

/** Next drop goes live here (IST). */
export const nextDrop = {
  name: "DROP_004",
  title: "NIGHT SHIFT",
  date: "2026-12-05T18:00:00+05:30",
};

export const timeline = [
  { id: "d4", code: "DROP_004", title: "NIGHT SHIFT", date: "05 DEC 2026", state: "UPCOMING", text: "Reflective prints and blackout layers for after-dark." },
  { id: "d3", code: "DROP_003", title: "THE OUTLINE", date: "01 OCT 2026", state: "LIVE NOW", text: "A study in contrast. Sharp lines, loud silhouettes." },
  { id: "d2", code: "DROP_002", title: "LAYER UP", date: "12 MAR 2026", state: "ARCHIVE", text: "Heavyweight layers and brick-red staples." },
  { id: "d1", code: "DROP_001", title: "DAY ONE", date: "05 NOV 2025", state: "ARCHIVE", text: "Where it started. First graphics, first sell-out." },
] as const;

export const dropMarquee = ["NEW DROPS", "DROP_003 LIVE", "DROP_004 LOADING", "LIMITED QUANTITIES", "ONCE IT'S GONE IT'S GONE"];
