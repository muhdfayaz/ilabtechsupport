import Script from "next/script";
import { SITE } from "@/lib/site";

/**
 * Preserves the original site's tracking IDs (2x GA4 + Google Ads) using
 * next/script. Consent Mode v2 defaults to "denied" until the visitor accepts
 * the cookie banner (see cookie-consent.tsx).
 */
export function Analytics() {
  const loaderId = SITE.analytics.ga4[0];
  const configs = [...SITE.analytics.ga4, SITE.analytics.ads]
    .map((id) => `gtag('config','${id}');`)
    .join("");

  const init = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem('ilab-consent')==='granted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}}catch(e){}
gtag('js',new Date());
${configs}
`;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {init}
      </Script>
    </>
  );
}
