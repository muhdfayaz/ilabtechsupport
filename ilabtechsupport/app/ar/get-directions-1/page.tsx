import type { Metadata } from "next";
import { DirectionsPage, directionsMetadata } from "@/components/pages/directions";

export const metadata: Metadata = directionsMetadata("ar");

export default function Page() {
  return <DirectionsPage locale="ar" />;
}
