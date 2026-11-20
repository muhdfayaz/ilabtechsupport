import { SITE, waLink, type Branch } from "@/lib/site";
import { PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <article className="flex flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <span className="grid size-11 place-items-center rounded-2xl bg-ink text-white">
        <PinIcon />
      </span>
      <h3 className="mt-5 text-xl font-semibold">{branch.area}</h3>
      <address className="mt-1 text-sm not-italic text-charcoal">
        {branch.streetAddress}
        <br />
        {branch.locality}
      </address>
      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href={branch.mapsUrl}
          data-track="branch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-white transition hover:bg-black"
        >
          <PinIcon width={16} height={16} /> Get directions
        </a>
        <a
          href={waLink(`Hi iLab ${branch.area}, I have a question.`)}
          data-track="branch"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${branch.area}`}
          className="grid size-10 place-items-center rounded-full bg-wa text-black transition hover:brightness-110"
        >
          <WhatsAppIcon width={18} height={18} />
        </a>
        <a
          href={`tel:${SITE.phone.tel}`}
          data-track="branch"
          aria-label={`Call ${branch.area}`}
          className="grid size-10 place-items-center rounded-full border border-black/15 transition hover:bg-black/5"
        >
          <PhoneIcon width={16} height={16} />
        </a>
      </div>
      <a
        href={branch.reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 text-sm font-medium text-charcoal underline-offset-4 hover:underline"
      >
        Read &amp; leave Google reviews →
      </a>
    </article>
  );
}
