"use client";

import { useId, useState } from "react";
import { BRANCHES, DEVICES, REPAIR_SERVICES, SITE, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const ISSUES = [...REPAIR_SERVICES.map((s) => s.title), "Not sure — need a diagnosis"];

const field =
  "mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10";

/**
 * Zero-backend lead capture: composes a pre-filled WhatsApp message so the
 * visitor reaches the team in one tap with device + issue already known.
 */
export function RepairFinder() {
  const id = useId();
  const [device, setDevice] = useState<string>(DEVICES[0]);
  const [issue, setIssue] = useState(ISSUES[0]);
  const [model, setModel] = useState("");
  const [branch, setBranch] = useState(BRANCHES[0].area);

  const message = [
    "Hi iLab, I'd like a repair quote.",
    `Device: ${device}${model.trim() ? ` (${model.trim()})` : ""}`,
    `Issue: ${issue}`,
    `Preferred branch: ${branch}`,
  ].join("\n");

  return (
    <form
      aria-label="Request a repair"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waLink(message), "_blank", "noopener,noreferrer");
      }}
      className="grid gap-5 rounded-3xl border border-black/5 bg-white p-6 shadow-xl shadow-black/5 md:grid-cols-2 md:p-8"
    >
      <div>
        <label htmlFor={`${id}-device`} className="text-sm font-medium">
          Device
        </label>
        <select
          id={`${id}-device`}
          className={field}
          value={device}
          onChange={(e) => setDevice(e.target.value)}
        >
          {DEVICES.map((d) => (
            <option key={d}>{d}</option>
          ))}
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor={`${id}-model`} className="text-sm font-medium">
          Model <span className="font-normal text-charcoal/70">(optional)</span>
        </label>
        <input
          id={`${id}-model`}
          className={field}
          placeholder="e.g. iPhone 15 Pro"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor={`${id}-issue`} className="text-sm font-medium">
          What&apos;s the problem?
        </label>
        <select
          id={`${id}-issue`}
          className={field}
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        >
          {ISSUES.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`${id}-branch`} className="text-sm font-medium">
          Preferred branch
        </label>
        <select
          id={`${id}-branch`}
          className={field}
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        >
          {BRANCHES.map((b) => (
            <option key={b.id}>{b.area}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-start gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-charcoal">
          Sends your details to our team on WhatsApp ({SITE.phone.display}).
        </p>
        <button
          type="submit"
          data-track="repair-finder"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-wa px-7 py-4 text-sm font-semibold text-black shadow-lg shadow-wa/25 transition hover:brightness-110 md:w-auto"
        >
          <WhatsAppIcon width={18} height={18} />
          Get my quote on WhatsApp
        </button>
      </div>
    </form>
  );
}
