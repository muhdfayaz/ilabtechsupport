import { IMG } from "@/lib/images";

export type CollectionKind = "DROPS" | "ESSENTIALS" | "SEASONAL";
export type CollectionStatus = "LIVE NOW" | "ARCHIVE" | "COMING SOON";

export type Collection = {
  id: string;
  number: string;
  name: string;
  kind: CollectionKind;
  status: CollectionStatus;
  year: string;
  pieces: number;
  blurb: string;
  image: string;
  position?: string;
  href: string;
};

export const featuredCollection: Collection = {
  id: "drop-003",
  number: "003",
  name: "THE OUTLINE",
  kind: "DROPS",
  status: "LIVE NOW",
  year: "2026",
  pieces: 24,
  blurb: "A study in contrast. Sharp lines, loud silhouettes and graphics built to be seen — tees, hoodies, shirts and bottoms.",
  image: IMG.campaign,
  position: "50% 30%",
  href: "/collections/drop-003",
};

export const collections: Collection[] = [
  featuredCollection,
  {
    id: "drop-002",
    number: "002",
    name: "LAYER UP",
    kind: "DROPS",
    status: "ARCHIVE",
    year: "2025",
    pieces: 18,
    blurb: "Heavyweight layers and brick-red staples for the colder months.",
    image: IMG.heroBrick,
    position: "50% 40%",
    href: "/collections/drop-002",
  },
  {
    id: "core",
    number: "C01",
    name: "CORE ESSENTIALS",
    kind: "ESSENTIALS",
    status: "LIVE NOW",
    year: "ALWAYS ON",
    pieces: 12,
    blurb: "The everyday uniform. Clean cuts, premium cotton, zero fuss.",
    image: IMG.catHoodie,
    position: "50% 15%",
    href: "/collections/core",
  },
  {
    id: "drop-001",
    number: "001",
    name: "DAY ONE",
    kind: "DROPS",
    status: "ARCHIVE",
    year: "2025",
    pieces: 10,
    blurb: "Where it started. The first graphics, the first sell-out.",
    image: IMG.heroJacket,
    position: "50% 30%",
    href: "/collections/drop-001",
  },
  {
    id: "monsoon",
    number: "S01",
    name: "MONSOON MODE",
    kind: "SEASONAL",
    status: "COMING SOON",
    year: "2027",
    pieces: 14,
    blurb: "Lightweight layers and quick-dry fits built for the rain.",
    image: IMG.catBottoms,
    position: "50% 50%",
    href: "/collections/monsoon",
  },
  {
    id: "off-duty",
    number: "C02",
    name: "OFF DUTY",
    kind: "ESSENTIALS",
    status: "LIVE NOW",
    year: "ALWAYS ON",
    pieces: 9,
    blurb: "Relaxed shirts and easy bottoms for days with no plans.",
    image: IMG.catShirt,
    position: "50% 45%",
    href: "/collections/off-duty",
  },
];

export const collectionFilters = ["ALL", "DROPS", "ESSENTIALS", "SEASONAL"] as const;
export type CollectionFilter = (typeof collectionFilters)[number];

export const marqueeWords = ["DROP_003", "THE OUTLINE", "NOT MADE TO BLEND IN", "LIMITED QUANTITIES", "DPLAY®"];
