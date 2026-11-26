import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  isBranch,
  BranchLandingPage,
  branchMetadata,
  branchStaticParams,
} from "@/components/pages/landing";

export const generateStaticParams = branchStaticParams;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return branchMetadata("ar", slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isBranch(slug)) notFound();
  return <BranchLandingPage locale="ar" slug={slug} />;
}
