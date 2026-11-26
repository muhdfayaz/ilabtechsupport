/**
 * Real Google reviews shown in the home page carousel.
 *
 * Copy them word for word from your Google Business Profile. Never write,
 * edit or invent reviews. While this list is empty, the section shows links
 * to each branch on Google instead of a carousel.
 *
 * Example entry:
 * {
 *   author: "Name as shown on Google",
 *   rating: 5, // the stars that reviewer gave, 1-5
 *   text: "The review text, exactly as written.",
 *   branchId: "dana-mall-seef", // see BRANCHES in lib/site.ts
 * },
 */
/**
 * The "view all" button under the carousel. The count is typed in by hand and
 * does not update itself: change it here as the Google total grows.
 */
export const ALL_REVIEWS = {
  branchId: "umm-al-hassam",
  count: 234,
  url: "https://www.google.com/maps/place/ilab+tech+Support+Umm+Al+Hasam+Bahrain/@26.201674,50.592024,740m/data=!3m1!1e3!4m16!1m7!3m6!1s0x3e49af0063d02ddd:0x4381d6f78277e84d!2silab+tech+Support+Umm+Al+Hasam+Bahrain!8m2!3d26.201674!4d50.592024!16s%2Fg%2F11lmnx417m!3m7!1s0x3e49af0063d02ddd:0x4381d6f78277e84d!8m2!3d26.201674!4d50.592024!9m1!1b1!16s%2Fg%2F11lmnx417m?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D",
};

export type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  branchId: string;
};

// Copied from the Google Maps review links shared by the owner, 2026-11-26.
export const REVIEWS: Review[] = [
  {
    author: "Carby Lopez",
    rating: 5,
    text: "Excellent & fast service!\nThe staff are accomodating & they explain clearly the possible issues on my mobiles Samsung S23 Ultra & Samsung M51. Both are working perfectly now. And the price for fixing is practically reasonable.\nHighly recommended!!!",
    branchId: "umm-al-hassam",
  },
  {
    author: "Fais Syed",
    rating: 5,
    text: "Excellent service!\nI visited to have my broken screen replaced with a new original one. The repair was fast and professional, and the price was much lower than I expected. The staff provided outstanding customer service.\nI’m happy with the experience and highly recommend them to anyone looking for quality products and great service.",
    branchId: "umm-al-hassam",
  },
  {
    author: "Haley Lorenzana",
    rating: 5,
    text: "I always have a great experience at iLab Phone! The service is consistently fast, and the staff is incredibly knowledgeable and professional. I recently got my phone fixed here—they were quick, the prices are great, and the quality of their work is top-notch. Whenever anyone asks for a repair shop recommendation, I always send them here. Highly recommend! ⭐️⭐️⭐️⭐️⭐️",
    branchId: "umm-al-hassam",
  },
  {
    author: "EKAS MEK",
    rating: 5,
    text: "Excellent service! They were very fast and professional, and they fixed my phone with a genuine battery at a very reasonable price. The service was quick, the quality was excellent, and I’m very happy with the result.\n\nSpecial thanks to Vishnu and Vishnu Prasad for their great customer service and professionalism. Highly recommended! 👍",
    branchId: "umm-al-hassam",
  },
  {
    author: "Nithin R",
    rating: 5,
    text: "Excellent cooperation and very good customer service. They treat customers with respect and complete the work clearly and transparently right in front of us. Great service experience.",
    branchId: "umm-al-hassam",
  },
  {
    author: "Anis Ahmed",
    rating: 5,
    text: "I had experience with them for my macbook repair and I can say they are one of the top notch care taker of ur product in kingdom. Very friendly and supportive team. Highly recommended",
    branchId: "umm-al-hassam",
  },
  {
    author: "udayanga lalan",
    rating: 5,
    text: "Had my iPhone battery replaced at the Um Al Hassam Ave branch in Manama and the service was outstanding! The staff was very knowledgeable, transparent about pricing, and replaced the battery quickly. My phone holds a full charge again like it’s brand new, and the battery health indicator works perfectly with no issues. Highly recommend them for fast and reliable phone repairs!🙏🏼🫡",
    branchId: "umm-al-hassam",
  },
];
