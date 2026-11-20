import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

const TITLE = "Privacy Policy - Your Guide to Data Protection and User Privacy";
const DESC =
  "How iLab Tech Support collects, uses and protects your information when you visit our website or use our repair services in Bahrain.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description={DESC}
      path="/privacy-policy"
      updated="20 November 2026"
    >
      <p className="mt-6">
        This policy explains how iLab Tech Support (&quot;iLab&quot;, &quot;we&quot;) handles
        information when you use ilabtechsupport.com. {/* TODO: have counsel review before launch */}
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Contact details you send us</strong> — for example your name, phone
          number, device and issue when you message us on WhatsApp, call, or email.
        </li>
        <li>
          <strong>Usage data</strong> — pages viewed, device and browser type, and
          approximate location, collected through Google Analytics and Google Ads
          only if you accept cookies.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To quote, book and carry out repairs and respond to your enquiries.</li>
        <li>To understand how visitors use the site and improve it.</li>
        <li>To measure the performance of our advertising.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Analytics and advertising cookies are off until you choose &quot;Accept&quot; in
        the cookie notice. You can change your mind by clearing this site&apos;s data in
        your browser.
      </p>

      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We share data only with service
        providers that help run our website and analytics (such as Google) and when
        required by law.
      </p>

      <h2>Your rights</h2>
      <p>
        You may ask us to access, correct or delete the personal data we hold about
        you by emailing <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>

      <h2>Contact</h2>
      <p>
        iLab Tech Support, Bahrain · <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a> ·{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
    </LegalPage>
  );
}
