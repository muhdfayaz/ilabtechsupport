import type { ReactNode } from "react";

/** One line icon per repair service (keys match `Service.slug`). */
const PATHS: Record<string, ReactNode> = {
  screen: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="m13 6-3 5 4 2-3 5" />
    </>
  ),
  battery: (
    <>
      <rect x="2" y="7" width="17" height="10" rx="2.5" />
      <path d="M22 11v2M11.500 9.500 9 12.500h3L9.500 15" />
    </>
  ),
  "charge-port": <path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v5" />,
  camera: (
    <>
      <path d="M3 8a2 2 0 0 1 2-2h2.500L9 4h6l1.500 2H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
      <circle cx="12" cy="13" r="3.500" />
    </>
  ),
  "water-damage": <path d="M12 3s7 7.500 7 12a7 7 0 0 1-14 0c0-4.500 7-12 7-12ZM9 15.500a3 3 0 0 0 3 3" />,
  "mic-speaker": (
    <>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8" />
    </>
  ),
  "power-button": <path d="M12 2v10M6.300 6.300a8 8 0 1 0 11.400 0" />,
  software: <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />,
  case: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="4" />
      <rect x="8" y="5" width="5" height="5" rx="1.500" />
    </>
  ),
  diagnostic: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.300-4.300M6.500 11H9l1.500-3 2 6 1.500-3h1.500" />
    </>
  ),
  tablet: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="2.500" />
      <path d="M11 18h2" />
    </>
  ),
  memory: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M10 10h4v4h-4zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </>
  ),
};

export function ServiceIcon({ slug }: { slug: string }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {PATHS[slug] ?? PATHS.diagnostic}
    </svg>
  );
}
