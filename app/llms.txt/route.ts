import { BRANCHES, FAQS, OTHER_LOCATIONS, REPAIR_SERVICES, SITE, SITE_URL } from "@/lib/site";
import { POSTS } from "@/lib/posts";
import { SERVICE_PAGES } from "@/lib/landing";

// Preserves the original site's /llms.txt (guide for AI crawlers), expanded
// with services, branches and FAQs so LLMs can answer brand questions.
export function GET() {
  const body = `# ${SITE.fullName}

> ${SITE.description}

iLab Tech Support is a dedicated Apple service centre in Bahrain offering iPhone, iPad, MacBook, AirPods, Samsung, Google Pixel and PlayStation repair, plus iLab approved refurbished iPhones with a one-year warranty.

## Pages

- [Home](${SITE_URL}/): services, locations, FAQ
- [iLab approved phones](${SITE_URL}/ilab-approved-phone-1): refurbished iPhones, 120 tests, one-year warranty
- [Get directions](${SITE_URL}/get-directions-1): branch maps
- [Contact us](${SITE_URL}/contact-us)
- [Blog](${SITE_URL}/blog)
${POSTS.map((p) => `- [${p.title}](${SITE_URL}${p.path})`).join("\n")}
- [Social media](${SITE_URL}/social-media)
- [Privacy policy](${SITE_URL}/privacy-policy)
- [Terms and conditions](${SITE_URL}/terms-and-conditions)

## Service and branch pages

${SERVICE_PAGES.map((s) => `- [${s.text.en.nav}](${SITE_URL}/services/${s.slug})`).join("\n")}
${BRANCHES.map((b) => `- [${b.area}](${SITE_URL}/locations/${b.id})`).join("\n")}

## Arabic version (النسخة العربية)

- [الصفحة الرئيسية](${SITE_URL}/ar): خدمات إصلاح iPhone وأجهزة آبل في البحرين
- [هواتف iLab المعتمدة](${SITE_URL}/ar/ilab-approved-phone-1)
- [الاتجاهات](${SITE_URL}/ar/get-directions-1)
- [اتصل بنا](${SITE_URL}/ar/contact-us)
- [المدونة](${SITE_URL}/ar/blog)

## Services

${REPAIR_SERVICES.map((s) => `- ${s.title}: ${s.blurb}`).join("\n")}

## Bahrain branches

${BRANCHES.map((b) => `- ${b.name}: ${b.streetAddress}, ${b.locality}, Bahrain`).join("\n")}

Other locations: ${OTHER_LOCATIONS.map((l) => `${l.name} (${l.detail})`).join("; ")}

## Contact

- Phone / WhatsApp: ${SITE.phone.display}, ${SITE.phone2.display}
- Contact form and email: ${SITE_URL}/contact-us

## FAQ

${FAQS.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}

## Social Media

- [Facebook](${SITE.social.facebook})
- [Instagram](${SITE.social.instagram})
- [YouTube](${SITE.youtubeChannel})
- [TikTok](${SITE.social.tiktok})
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
