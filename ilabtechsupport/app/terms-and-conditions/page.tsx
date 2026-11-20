import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

const TITLE = "Terms and Conditions of ilab Tech Support";
const DESC =
  "Terms and conditions for using the iLab Tech Support website and repair services in Bahrain.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      description={DESC}
      path="/terms-and-conditions"
      updated="20 November 2026"
    >
      <p className="mt-6">
        By using ilabtechsupport.com or our services you agree to these terms.{" "}
        {/* TODO: have counsel review before launch */}
      </p>

      <h2>Repairs &amp; quotes</h2>
      <p>
        Quotes given on WhatsApp, by phone or through this website are estimates
        until our technicians have inspected your device. A diagnostic may reveal
        additional faults, in which case we will contact you before proceeding.
      </p>

      <h2>Warranty</h2>
      <ul>
        <li>Battery service and replacement carries a one-year waterproof warranty.</li>
        <li>
          ilab approved refurbished iPhones carry a one-year ilab warranty with the
          ilab Shield protection package.
        </li>
        <li>
          Warranty does not cover damage caused after the repair or sale, such as
          drops, liquid damage or unauthorized repair attempts.
        </li>
      </ul>

      <h2>Your data</h2>
      <p>
        Please back up your device before bringing it in. iLab is not responsible
        for data loss during repair or software service.
      </p>

      <h2>Website use</h2>
      <p>
        Content on this website is provided for information. We may update it at
        any time. Trademarks such as Apple, iPhone and iPad belong to their
        respective owners; iLab Tech Support is an independent service provider.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? <a href={`mailto:${SITE.email}`}>{SITE.email}</a> ·{" "}
        <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a>
      </p>
    </LegalPage>
  );
}
