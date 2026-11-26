/**
 * Single source of truth for business data. Everything on the site (UI, metadata,
 * JSON-LD, sitemap) reads from here so NAP (name/address/phone) stays consistent.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ilabtechsupport.com"
).replace(/\/$/, "");

export const SITE = {
  name: "iLab Tech Support",
  fullName: "iLab Tech Support | iPhone & Apple Repair in Bahrain",
  description:
    "iLab Tech Support provides professional iPhone, iPad, Samsung and PlayStation repairs in Bahrain. Visit our service centers for expert repairs and support.",
  locale: "en_BH",
  year: 2026,
  phone: { tel: "+97333175700", display: "+973 3317 5700", wa: "97333175700" },
  phone2: { tel: "+97333476777", display: "+973 3347 6777", wa: "97333476777" },
  // Split so the address never appears as plain text in HTML (scraper-safe).
  emailUser: "service",
  emailDomain: "ilabtechsupport.com",
  poweredBy: "ione group intl",
  themeColor: "#c0c0c0",
  verification: {
    google: "UVOpeqAAFGXVYqIoQMVgHSiRv5Mf9Tb2o72dUDhNlZk",
    facebookDomain: "n8zbn5h8b8y2ap32peqhct56d5ixbc",
  },
  analytics: {
    ga4: ["G-QHQ9Y2QWP4", "G-BF2FDR6KMM"],
    ads: "AW-968033775",
    fbPixel: "17841462218027021",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61582161868855",
    instagram:
      "https://www.instagram.com/ilabtechsupport?igsh=MWU0b2l5amt5YmdpYQ%3D%3D",
    tiktok: "https://www.tiktok.com/@ilabtechsupport",
    youtube: "https://www.youtube.com/@ilabtechsupport",
    // Create these profiles, then paste the URLs here — they will appear
    // in the footer and in the Organization `sameAs` automatically.
    x: "",
    linkedin: "",
  },
  youtubeChannel: "https://www.youtube.com/channel/UCChvv_yK6Z9rE47fFobX4w",
} as const;

export function waLink(message?: string, number: string = SITE.phone.wa) {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type Branch = {
  id: string;
  name: string;
  area: string;
  streetAddress: string;
  locality: string;
  region: string;
  country: "BH";
  mapsUrl: string;
  reviewUrl: string;
  mapsEmbedQuery: string;
};

export const BRANCHES: Branch[] = [
  {
    id: "dana-mall-seef",
    name: "iLab Tech Support – Dana Mall, Seef",
    area: "Dana Mall, Seef",
    streetAddress: "Dana Mall, Seef",
    locality: "Seef, Manama",
    region: "Capital Governorate",
    country: "BH",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=ilab+tech+support+Dana+Mall+Seef+Bahrain",
    reviewUrl: "https://g.page/r/CfVibnxfBcYiECE/review",
    mapsEmbedQuery: "ilab tech support Dana Mall Seef Bahrain",
  },
  {
    id: "exhibition-ave-hoora",
    name: "iLab Tech Support – Exhibition Avenue, Hoora",
    area: "Exhibition Avenue, Hoora",
    streetAddress: "Exhibition Avenue, Hoora",
    locality: "Manama",
    region: "Capital Governorate",
    country: "BH",
    mapsUrl: "https://share.google/nvpRSquIsxHWZFAnX",
    reviewUrl: "https://g.page/r/CUQoPtQaA23aEBM/review",
    mapsEmbedQuery: "ilab tech support Exhibition Avenue Hoora Manama Bahrain",
  },
  {
    id: "umm-al-hassam",
    name: "iLab Tech Support – Umm Al Hassam",
    area: "Umm Al Hassam",
    streetAddress: "Umm Al Hassam Avenue",
    locality: "Manama",
    region: "Capital Governorate",
    country: "BH",
    mapsUrl: "https://share.google/4dpQMxF34mILJtC44",
    reviewUrl: "https://g.page/r/CU3od4L31oFDEBM/review",
    mapsEmbedQuery: "ilab tech support Umm Al Hassam Avenue Manama Bahrain",
  },
];

export const OTHER_LOCATIONS = [
  {
    name: "Dubai Airport Free Zone",
    detail: "Dubai, UAE",
    url: "https://www.dafz.ae/en",
  },
  {
    name: "Lulu Mall, Edappally",
    detail: "Kerala, India",
    url: "https://share.google/6vjpSxNShLMbip22e",
  },
];

export const DEVICES = [
  "iPhone",
  "iPad",
  "MacBook",
  "Apple AirPods",
  "Apple headset",
  "Samsung",
  "Samsung foldable",
  "Google Pixel",
  "PlayStation",
] as const;

export type Service = { slug: string; title: string; blurb: string };

export const REPAIR_SERVICES: Service[] = [
  {
    slug: "screen",
    title: "Screen repair / replacement",
    blurb: "Cracked or unresponsive display? iPhone screens are repaired with genuine, original Apple displays.",
  },
  {
    slug: "battery",
    title: "Battery replacement",
    blurb: "Battery service and replacement backed by a one-year waterproof warranty.",
  },
  {
    slug: "charge-port",
    title: "Charge port repair",
    blurb: "Slow, loose or not charging at all? We restore reliable charging.",
  },
  {
    slug: "camera",
    title: "Camera repair",
    blurb: "Blurry, black or cracked camera lenses and modules repaired.",
  },
  {
    slug: "water-damage",
    title: "Water-damage repair",
    blurb: "Fast diagnosis and repair after liquid damage — the sooner you bring it in, the better.",
  },
  {
    slug: "mic-speaker",
    title: "Microphone / speaker repair",
    blurb: "Crackling speaker, muffled calls or a dead microphone fixed.",
  },
  {
    slug: "power-button",
    title: "Power button repair",
    blurb: "Sticky, stuck or unresponsive buttons repaired properly.",
  },
  {
    slug: "software",
    title: "Software problems",
    blurb: "Boot loops, freezes, update failures and other software issues resolved.",
  },
  {
    slug: "case",
    title: "Case repair",
    blurb: "Bent frames and damaged housings restored.",
  },
  {
    slug: "diagnostic",
    title: "Diagnostic scan",
    blurb: "Not sure what's wrong? A full diagnostic scan finds the fault first.",
  },
  {
    slug: "tablet",
    title: "Tablet repair",
    blurb: "iPad and tablet repairs, from screens to batteries.",
  },
  {
    slug: "memory",
    title: "iPhone memory upgrade",
    blurb: "Running out of storage? Ask us about upgrading your iPhone's memory.",
  },
];

/** Original site keyword anchors, preserved as the "we service" list. */
export const SERVICE_KEYWORDS = [
  "iPhone service",
  "iPhone service center",
  "Apple repair and service",
  "Apple Service and Repair for iPhone Screens",
  "Apple iPhone Service and Repair",
  "iPad service and repair",
  "MacBook service",
  "Apple Airpods service and repair",
  "Apple headset service and repair",
  "Samsung service",
  "Samsung service center",
  "Samsung fold phone service",
  "Google pixel service",
  "Google pixel phone service and repair",
  "Playstation service",
];

export const FAQS = [
  {
    q: "Which devices does iLab Tech Support repair in Bahrain?",
    a: "We repair iPhone, iPad, MacBook, Apple AirPods and Apple headsets, as well as Samsung phones (including foldables), Google Pixel phones and PlayStation consoles.",
  },
  {
    q: "What types of repair do you offer?",
    a: "Screen repair and replacement, battery replacement, charge port repair, camera repair, water-damage repair, microphone and speaker repair, power button repair, software problems, case repair, tablet repair and diagnostic scans. We also offer iPhone memory upgrades.",
  },
  {
    q: "Do you use genuine Apple parts for iPhone screen repair?",
    a: "Yes. Our iPhone screen repair uses genuine, original Apple displays.",
  },
  {
    q: "Is there a warranty on repairs?",
    a: "Battery service and replacement comes with a one-year waterproof warranty. Ask our team about warranty details for other repairs when you book.",
  },
  {
    q: "What are iLab approved phones?",
    a: "iLab approved phones are refurbished iPhones that go through 120 tests before they reach you. Each one comes with a one-year iLab warranty and the iLab Shield protection package.",
  },
  {
    q: "Where are your service centers in Bahrain?",
    a: "You can visit us at Dana Mall in Seef, Exhibition Avenue in Hoora (Manama) and Umm Al Hassam Avenue (Manama).",
  },
  {
    q: "How do I book a repair?",
    a: "Message us on WhatsApp, call us, or walk in to any branch. You can also use the repair request tool on this page to send us your device and issue in one tap.",
  },
];

export const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/ilab-approved-phone-1", label: "Approved Phones" },
  { href: "/#locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];
