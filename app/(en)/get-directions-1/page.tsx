import type { Metadata } from "next";
import { DirectionsPage, directionsMetadata } from "@/components/pages/directions";

export const metadata: Metadata = directionsMetadata("en");

export default function Page() {
  return <DirectionsPage locale="en" />;
}
