/** Temporary remote imagery (Unsplash, full colour). Swap for local /public assets when DPLAY campaign photography is ready. */
export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=85&w=${w}`;

export const IMG = {
  // Hero slides
  heroTee: "1503341504253-dff4815485f1",
  heroJacket: "1523398002811-999ca8dec234",
  heroBrick: "1520975954732-35dd22299614",
  // Categories
  catTee: "1550246140-5119ae4790b8",
  catHoodie: "1492288991661-058aa541ff43",
  catShirt: "1531427186611-ecfd6d936c79",
  catBottoms: "1506629082955-511b1aa562c8",
  catAccessory: "1622445275576-721325763afe",
  // Products
  prodGlitch: "1513956589380-bad6acb9b9d4",
  prodCrosshair: "1521572163474-6864f9cf17ab",
  prodHoodie: "1492288991661-058aa541ff43",
  prodShirt: "1492447166138-50c3889fccb1",
  // Offer
  offer: "1552374196-1ab2a1c593e8",
  // Campaign
  campaign: "1490578474895-699cd4e2cf59",
} as const;
