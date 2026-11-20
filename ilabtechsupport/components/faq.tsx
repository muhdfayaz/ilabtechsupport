import { FAQS } from "@/lib/site";
import { PlusIcon } from "./icons";

export function Faq() {
  return (
    <div className="divide-y divide-black/10 rounded-3xl border border-black/5 bg-white">
      {FAQS.map((f) => (
        <details key={f.q} className="group px-6 py-5 md:px-8">
          <summary className="flex cursor-pointer items-center justify-between gap-6 font-display text-base font-medium md:text-lg">
            {f.q}
            <PlusIcon className="shrink-0 transition group-open:rotate-45" />
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-charcoal">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
