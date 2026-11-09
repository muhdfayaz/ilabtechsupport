import type { Metadata } from "next";
import { Anton, Space_Mono, Archivo } from "next/font/google";
import "./globals.css";

const display = Anton({ variable: "--font-display", subsets: ["latin"], weight: "400" });
const mono = Space_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "700"] });
const sans = Archivo({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "DPLAY Clothing — Not Made To Blend In",
  description:
    "DPLAY is experimental streetwear. Shop DROP_003 — The Outline Collection: tees, hoodies, shirts, bottoms and accessories.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${sans.variable} antialiased`}>
      <body className="min-h-screen overflow-x-clip bg-white text-black">{children}</body>
    </html>
  );
}
