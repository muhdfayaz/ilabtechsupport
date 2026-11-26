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

  const pixel = `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('consent','revoke');
try{if(localStorage.getItem('ilab-consent')==='granted'){fbq('consent','grant');}}catch(e){}
fbq('init','${SITE.analytics.fbPixel}');
fbq('track','PageView');
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
      <Script id="fb-pixel" strategy="afterInteractive">
        {pixel}
      </Script>
    </>
  );
}
