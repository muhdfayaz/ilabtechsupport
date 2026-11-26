import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P): P => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  ...p,
});

export const PhoneIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const WhatsAppIcon = (p: P) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1a7.8 7.8 0 0 1-2.3-1.4 8.700 8.700 0 0 1-1.600-2c-.2-.3 0-.4.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.200c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.400-.3.300-1 1-1 2.400s1 2.800 1.200 3c.1.200 2 3.100 4.900 4.300.7.3 1.200.5 1.600.6.700.2 1.300.2 1.800.1.500-.1 1.700-.7 1.900-1.400.2-.7.2-1.200.2-1.400-.1-.1-.3-.2-.6-.4ZM12 2a10 10 0 0 0-8.500 15.200L2 22l4.900-1.300A10 10 0 1 0 12 2Zm0 18.200c-1.500 0-3-.4-4.200-1.200l-.3-.2-2.900.8.8-2.800-.2-.3A8.200 8.200 0 1 1 12 20.200Z" />
  </svg>
);

export const PinIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ShieldIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);

export const ArrowIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const PlusIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const PlayIcon = (p: P) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const PauseIcon = (p: P) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
  </svg>
);

export const StarIcon = (p: P) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.200 6.900L12 17.800 5.800 21.100 7 14.200 2 9.300l6.900-1z" />
  </svg>
);

export const SparkIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.600 5.600l2.800 2.800M15.600 15.600l2.800 2.800M18.400 5.600l-2.800 2.800M8.400 15.600l-2.800 2.800" />
  </svg>
);

export const SocialIcons = {
  x: (p: P) => (
    <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
      <path d="M17.800 3h3.100l-6.800 7.700L22 21h-6.200l-4.900-6.300L5.300 21H2.200l7.300-8.300L2 3h6.400l4.400 5.800L17.800 3Zm-1.100 16.200h1.700L7.400 4.700H5.600l11.100 14.500Z" />
    </svg>
  ),
  linkedin: (p: P) => (
    <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
      <path d="M4.500 3A2 2 0 1 0 4.500 7 2 2 0 0 0 4.500 3ZM3 9h3v12H3V9Zm6 0h2.900v1.700h.1c.4-.8 1.400-1.800 3-1.800 3.200 0 3.800 2.100 3.800 4.800V21h-3v-6.500c0-1.500 0-3.500-2.100-3.500s-2.400 1.600-2.400 3.400V21H9V9Z" />
    </svg>
  ),
  facebook: (p: P) => (
    <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
      <path d="M13.5 22v-8.200h2.800l.4-3.200h-3.200V8.600c0-.9.300-1.500 1.600-1.500h1.700V4.200c-.3 0-1.300-.1-2.500-.1-2.500 0-4.100 1.500-4.100 4.200v2.400H7.400v3.200h2.800V22h3.300Z" />
    </svg>
  ),
  instagram: (p: P) => (
    <svg {...base(p)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.500" cy="6.500" r="1" fill="currentColor" />
    </svg>
  ),
  tiktok: (p: P) => (
    <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
      <path d="M16.600 3a5.300 5.300 0 0 0 4 4.800v3.300a8.500 8.500 0 0 1-4-1.200v6.200a6.200 6.200 0 1 1-6.200-6.200c.4 0 .7 0 1 .1v3.400a2.900 2.900 0 1 0 2 2.700V3h3.200Z" />
    </svg>
  ),
  youtube: (p: P) => (
    <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
      <path d="M21.600 7.200a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800ZM10 15V9l5.200 3L10 15Z" />
    </svg>
  ),
};
