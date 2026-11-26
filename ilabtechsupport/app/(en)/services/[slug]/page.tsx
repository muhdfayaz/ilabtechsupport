import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  isService,
  ServiceLandingPage,
  serviceMetadata,
  serviceStaticParams,
} from "@/components/pages/landing";

export const generateStaticParams = serviceStaticParams;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return serviceMetadata("en", slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isService(slug)) notFound();
  return <ServiceLandingPage locale="en" slug={slug} />;
}
