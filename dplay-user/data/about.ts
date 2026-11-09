import { IMG } from "@/lib/images";
import { collections } from "@/data/collections";
import { timeline } from "@/data/newDrops";

export const manifesto =
  "We make clothes for people who refuse to disappear into the crowd. Loud lines. Sharp silhouettes. Graphics with an opinion. Every DPLAY piece is cut, printed and finished in limited runs, because the point was never to fit in. The point is to be seen.";

export const aboutStats = [
  { label: "DROPS SHIPPED", value: timeline.filter((t) => t.state !== "UPCOMING").length },
  { label: "PIECES DESIGNED", value: collections.reduce((n, c) => n + c.pieces, 0) },
  { label: "RESTOCKS. EVER.", value: 0 },
  { label: "RULE: NEVER BLEND IN", value: 1 },
] as const;

export type Chapter = { id: string; year: string; title: string; text: string; image: string; position: string };

export const chapters: Chapter[] = [
  {
    id: "c1",
    year: "2025",
    title: "DAY ONE",
    text: "A handful of graphics, a small run of tees and one rule: if it looks like everything else, it does not ship. DROP_001 sold out and the brand was born.",
    image: IMG.heroJacket,
    position: "50% 30%",
  },
  {
    id: "c2",
    year: "2026",
    title: "LAYER UP",
    text: "DROP_002 went heavier. Brick reds, thick fleece and bolder cuts. We learned that people wanted pieces that felt as loud as they looked.",
    image: IMG.heroBrick,
    position: "50% 40%",
  },
  {
    id: "c3",
    year: "NOW",
    title: "THE OUTLINE",
    text: "DROP_003 is a study in contrast: sharp lines against soft fabric, black against white. Our most considered collection yet, in the same limited quantities.",
    image: IMG.campaign,
    position: "50% 30%",
  },
  {
    id: "c4",
    year: "NEXT",
    title: "NIGHT SHIFT",
    text: "DROP_004 is already in the works: reflective prints and blackout layers for after dark. Join the list so you do not miss it.",
    image: IMG.heroTee,
    position: "50% 25%",
  },
];

export const values = [
  {
    id: "v1",
    title: "LOUD BY DESIGN",
    text: "Every graphic has to earn its place. If it whispers, we redraw it until it speaks up.",
    image: IMG.catTee,
    position: "50% 35%",
  },
  {
    id: "v2",
    title: "LIMITED, ALWAYS",
    text: "Small runs, no restocks. When a drop is gone it is gone, which keeps every piece worth wearing.",
    image: IMG.catHoodie,
    position: "50% 15%",
  },
  {
    id: "v3",
    title: "BUILT TO LAST",
    text: "Heavyweight cotton, reinforced seams and prints that survive wash after wash. Loud should not mean disposable.",
    image: IMG.catShirt,
    position: "50% 45%",
  },
  {
    id: "v4",
    title: "STREET FIRST",
    text: "We design for real days, on real streets, with real people. Fits are tested outside, not just in a studio.",
    image: IMG.catBottoms,
    position: "50% 50%",
  },
] as const;

export const wall = [IMG.heroTee, IMG.catHoodie, IMG.prodShirt, IMG.heroBrick, IMG.catAccessory, IMG.prodGlitch, IMG.heroJacket, IMG.catShirt];
