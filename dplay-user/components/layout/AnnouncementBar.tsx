import { announcements } from "@/data/homepage";

export function AnnouncementBar() {
  return (
    <div className="bg-ink text-white" role="region" aria-label="Announcements">
      {/* Desktop: three distributed messages */}
      <ul className="mx-auto hidden h-[34px] max-w-[1600px] grid-cols-3 items-center px-5 font-sans text-[11px] font-semibold uppercase tracking-wide md:grid lg:px-10">
        <li className="justify-self-start">{announcements[0]}</li>
        <li className="justify-self-center">{announcements[1]}</li>
        <li className="justify-self-end">{announcements[2]}</li>
      </ul>
      {/* Mobile: compact, single scrolling-free line */}
      <p className="flex h-8 items-center justify-center px-3 text-center font-sans text-[10px] font-semibold uppercase tracking-wide md:hidden">
        {announcements[0]}
      </p>
    </div>
  );
}
