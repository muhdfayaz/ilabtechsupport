import { IMG } from "@/lib/images";

export const announcements = [
  "FREE SHIPPING ON ORDERS ABOVE ₹999",
  "NEW DROP_003 IS LIVE",
  "EASY RETURNS | 24/7 SUPPORT",
] as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "NEW DROPS", href: "/new-drops" },
  { label: "COLLECTIONS", href: "/collections" },
  { label: "ABOUT", href: "/about" },
];

export const shopMenu = {
  columns: [
    {
      title: "CLOTHING",
      links: [
        { label: "T-Shirts", href: "/shop/t-shirts" },
        { label: "Hoodies", href: "/shop/hoodies" },
        { label: "Shirts", href: "/shop/shirts" },
        { label: "Bottoms", href: "/shop/bottoms" },
      ],
    },
    {
      title: "EXTRAS",
      links: [
        { label: "Accessories", href: "/shop/accessories" },
        { label: "Caps", href: "/shop/caps" },
        { label: "Gift Cards", href: "/shop/gift-cards" },
      ],
    },
    {
      title: "DROPS",
      links: [
        { label: "DROP_003 — The Outline", href: "/collections/drop-003" },
        { label: "DROP_002", href: "/collections/drop-002" },
        { label: "Bestsellers", href: "/shop/bestsellers" },
      ],
    },
  ],
  feature: { label: "NEW DROP_003", href: "/collections/drop-003", image: IMG.heroTee },
};

export type HeroSlide = {
  id: number;
  image: string;
  position: string;
  eyebrow: [string, string, string];
  headline: [string, string];
  cta: { label: string; href: string };
};

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: IMG.heroTee,
    position: "50% 25%",
    eyebrow: ["DROP_003", "THE OUTLINE", "COLLECTION"],
    headline: ["NOT MADE", "TO BLEND IN."],
    cta: { label: "SHOP THE DROP", href: "/collections/drop-003" },
  },
  {
    id: 2,
    image: IMG.heroJacket,
    position: "50% 30%",
    eyebrow: ["DROP_003", "LOUD BY", "DESIGN"],
    headline: ["OWN THE", "OUTLINE."],
    cta: { label: "SHOP HOODIES", href: "/shop/hoodies" },
  },
  {
    id: 3,
    image: IMG.heroBrick,
    position: "50% 40%",
    eyebrow: ["DROP_002", "LAYER UP", "ESSENTIALS"],
    headline: ["BUILT FOR", "THE STREET."],
    cta: { label: "SHOP NEW DROPS", href: "/new-drops" },
  },
];

export type Category = { id: string; label: string; href: string; image: string; position?: string };

export const categories: Category[] = [
  { id: "t-shirts", label: "T-SHIRTS", href: "/shop/t-shirts", image: IMG.catTee, position: "50% 35%" },
  { id: "hoodies", label: "HOODIES", href: "/shop/hoodies", image: IMG.catHoodie, position: "50% 15%" },
  { id: "shirts", label: "SHIRTS", href: "/shop/shirts", image: IMG.catShirt, position: "50% 45%" },
  { id: "bottoms", label: "BOTTOMS", href: "/shop/bottoms", image: IMG.catBottoms },
  { id: "accessories", label: "ACCESSORIES", href: "/shop/accessories", image: IMG.catAccessory, position: "50% 45%" },
];

export const campaign = {
  image: IMG.campaign,
  title: ["THE", "OUTLINE", "COLLECTION"],
  tag: ["DROP_003", "A STUDY IN", "CONTRAST."],
  cta: { label: "EXPLORE COLLECTION", href: "/collections/drop-003" },
};

export const benefits = [
  { icon: "truck", title: "FREE SHIPPING", text: "Above ₹999" },
  { icon: "refresh", title: "EASY RETURNS", text: "Within 7 days" },
  { icon: "shield", title: "SECURE PAYMENTS", text: "100% safe & trusted" },
  { icon: "star", title: "DPLAY REWARDS", text: "Earn & redeem points" },
] as const;



export const couponOffer = {
  image: IMG.offer,
  eyebrow: "LIMITED TIME // ALL BRANCHES",
  title: ["FLAT 20% OFF", "ON DROP_003."],
  text: "Valid at every DPLAY store and online. Use the code at checkout or show it at the counter.",
  code: "DPLAY20",
  terms: "Min. order ₹1,999. Valid till stocks last. Not combinable with other offers.",
  cta: { label: "SHOP THE OFFER", href: "/collections/drop-003" },
};
