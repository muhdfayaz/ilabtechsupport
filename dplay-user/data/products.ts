import { IMG } from "@/lib/images";

export type Product = {
  id: string;
  name: string;
  price: number;
  badge: "NEW" | "BESTSELLER";
  image: string;
  position?: string;
  href: string;
  swatches: { name: string; color: string }[];
};

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const newArrivals: Product[] = [
  {
    id: "glitch-tee",
    name: "GLITCH TEE",
    price: 1399,
    badge: "NEW",
    image: IMG.prodGlitch,
    position: "50% 40%",
    href: "/product/glitch-tee",
    swatches: [
      { name: "Black", color: "#0a0a0a" },
      { name: "Grey", color: "#9b9b9b" },
    ],
  },
  {
    id: "crosshair-tee",
    name: "CROSSHAIR TEE",
    price: 1399,
    badge: "NEW",
    image: IMG.prodCrosshair,
    position: "50% 35%",
    href: "/product/crosshair-tee",
    swatches: [{ name: "White", color: "#ececec" }],
  },
  {
    id: "core-hoodie",
    name: "CORE HOODIE",
    price: 2299,
    badge: "BESTSELLER",
    image: IMG.prodHoodie,
    position: "50% 50%",
    href: "/product/core-hoodie",
    swatches: [{ name: "Heather grey", color: "#9a9a9a" }],
  },
  {
    id: "outline-shirt",
    name: "OUTLINE SHIRT",
    price: 1899,
    badge: "NEW",
    image: IMG.prodShirt,
    position: "50% 35%",
    href: "/product/outline-shirt",
    swatches: [
      { name: "Navy", color: "#1f2b45" },
      { name: "Off-white", color: "#d9d9d9" },
    ],
  },
];

