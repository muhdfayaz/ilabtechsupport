import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Variant = "solid" | "outline" | "light";

const styles: Record<Variant, string> = {
  solid: "bg-ink text-white hover:bg-white hover:text-ink border border-ink",
  outline: "bg-transparent text-ink border border-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink border border-white hover:bg-transparent hover:text-white",
};

export function ArrowLink({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 px-5 py-3 font-mono text-[12px] font-bold uppercase tracking-wider transition-colors duration-300 sm:text-[13px] ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowUpRight
        aria-hidden
        size={15}
        strokeWidth={2.25}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}
