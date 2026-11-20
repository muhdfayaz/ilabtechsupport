export type Post = {
  slug: string;
  /** Path preserved from the original site: /blog/f/<slug> */
  path: string;
  title: string;
  heading: string;
  description: string;
  published: string;
  modified: string;
};

export const POSTS: Post[] = [
  {
    slug: "explore-ilab-mobile-services",
    path: "/blog/f/explore-ilab-mobile-services",
    title: "Explore iLab Mobile Services",
    heading: "Tech Support Services in Bahrain",
    description:
      "A guide to iLab Tech Support's mobile services in Bahrain: iPhone screen repair, battery replacement, water-damage repair, ilab approved phones and more.",
    published: "2026-11-19",
    modified: "2026-11-20",
  },
];
