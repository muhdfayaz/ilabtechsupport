import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.fullName,
    short_name: "iLab Tech",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f5f7",
    theme_color: SITE.themeColor,
    icons: [{ src: "/icon.png", sizes: "272x273", type: "image/png" }],
  };
}
