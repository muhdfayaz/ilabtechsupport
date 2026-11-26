export type Locale = "en" | "ar";

export const LOCALES: Locale[] = ["en", "ar"];

export const DIR: Record<Locale, "ltr" | "rtl"> = { en: "ltr", ar: "rtl" };

/** Prefix a site path with the locale. English lives at the root, Arabic at /ar. */
export function localePath(locale: Locale, path: string): string {
  if (locale === "en") return path;
  if (path === "/") return "/ar";
  if (path.startsWith("/#")) return `/ar${path.slice(1)}`;
  return `/ar${path}`;
}

/** Remove the /ar prefix (used by the language switcher). */
export function stripLocale(pathname: string): string {
  if (pathname === "/ar") return "/";
  return pathname.startsWith("/ar/") ? pathname.slice(3) : pathname;
}

/** Path of the other-language counterpart of `pathname`. */
export function switchLocalePath(pathname: string): string {
  const isAr = pathname === "/ar" || pathname.startsWith("/ar/");
  if (isAr) return stripLocale(pathname);
  // The duplicate homepage URL has no Arabic twin; send to the Arabic home.
  if (pathname === "/iphone-service-center") return "/ar";
  return localePath("ar", pathname);
}

/** Wrap LTR content (phone numbers, Latin brand strings) so RTL text can't reorder it. */
export const LTR = { dir: "ltr" as const, style: { unicodeBidi: "isolate" as const } };

export const UI = {
  en: {
    skip: "Skip to content",
    brand: "iLab Tech Support",
    homeAria: "iLab Tech Support — home",
    logoAlt: "iLab Tech Support logo",
    nav: {
      services: "Services",
      approved: "Approved Phones",
      locations: "Locations",
      blog: "Blog",
      contact: "Contact",
    },
    bookWa: "Book on WhatsApp",
    waBook: "Hi iLab, I'd like to book a repair.",
    waQuestion: "Hi iLab, I have a question.",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main",
    mobileNav: "Mobile",
    switchLabel: "العربية",
    switchAria: "Switch to Arabic",
    callNow: "Call now",
    whatsapp: "WhatsApp",
    cookieTitle: "This website uses cookies.",
    cookieBody:
      "We use cookies to analyze website traffic and optimize your website experience.",
    accept: "Accept",
    decline: "Decline",
    cookieAria: "Cookie notice",
    email: "Email us",
    home: "Home",
    getDirections: "Get directions",
    reviews: "Read & leave Google reviews →",
    whatsappBranch: (a: string) => `WhatsApp ${a}`,
    callBranch: (a: string) => `Call ${a}`,
    waBranch: (a: string) => `Hi iLab ${a}, I have a question.`,
    footer: {
      blurb:
        "Your trusted tech partner in Apple products. Professional iPhone, iPad, MacBook, Samsung, Google Pixel and PlayStation repairs across Bahrain.",
      explore: "Explore",
      branches: "Bahrain branches",
      contact: "Contact",
      country: "Kingdom of Bahrain",
      links: [
        ["/", "iPhone Service Center"],
        ["/ilab-approved-phone-1", "iLab Approved Phone"],
        ["/get-directions-1", "Get Directions"],
        ["/blog", "Blog"],
        ["/social-media", "Social Media"],
        ["/contact-us", "Contact Us"],
        ["/privacy-policy", "Privacy Policy"],
        ["/terms-and-conditions", "Terms and Conditions"],
      ] as [string, string][],
      rights: "All rights reserved.",
      poweredBy: "Powered by",
      bahrain: "Bahrain",
      x: "X (Twitter)",
    },
    pauseVideo: "Pause background video",
    playVideo: "Play background video",
    updated: "Last updated",
    published: "Published",
    pageHome: "Home",
  },
  ar: {
    skip: "تخطَّ إلى المحتوى",
    brand: "iLab Tech Support",
    homeAria: "iLab Tech Support — الصفحة الرئيسية",
    logoAlt: "شعار iLab Tech Support",
    nav: {
      services: "الخدمات",
      approved: "هواتف iLab المعتمدة",
      locations: "الفروع",
      blog: "المدونة",
      contact: "اتصل بنا",
    },
    bookWa: "احجز عبر واتساب",
    waBook: "مرحباً iLab، أود حجز موعد لإصلاح جهازي.",
    waQuestion: "مرحباً iLab، لدي استفسار.",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    mainNav: "القائمة الرئيسية",
    mobileNav: "قائمة الجوال",
    switchLabel: "English",
    switchAria: "Switch to English",
    callNow: "اتصل الآن",
    whatsapp: "واتساب",
    cookieTitle: "يستخدم هذا الموقع ملفات تعريف الارتباط.",
    cookieBody:
      "نستخدم ملفات تعريف الارتباط لتحليل حركة الموقع وتحسين تجربتك.",
    accept: "موافق",
    decline: "رفض",
    cookieAria: "إشعار ملفات تعريف الارتباط",
    email: "راسلنا بالبريد",
    home: "الرئيسية",
    getDirections: "احصل على الاتجاهات",
    reviews: "اقرأ تقييمات Google وأضف تقييمك ←",
    whatsappBranch: (a: string) => `واتساب فرع ${a}`,
    callBranch: (a: string) => `اتصل بفرع ${a}`,
    waBranch: (a: string) => `مرحباً iLab فرع ${a}، لدي استفسار.`,
    footer: {
      blurb:
        "شريكك التقني الموثوق لمنتجات آبل. إصلاحات احترافية لأجهزة iPhone وiPad وMacBook وسامسونج وGoogle Pixel وPlayStation في أنحاء البحرين.",
      explore: "استكشف",
      branches: "فروعنا في البحرين",
      contact: "تواصل معنا",
      country: "مملكة البحرين",
      links: [
        ["/", "مركز خدمة iPhone"],
        ["/ilab-approved-phone-1", "هواتف iLab المعتمدة"],
        ["/get-directions-1", "الاتجاهات"],
        ["/blog", "المدونة"],
        ["/social-media", "وسائل التواصل الاجتماعي"],
        ["/contact-us", "اتصل بنا"],
        ["/privacy-policy", "سياسة الخصوصية"],
        ["/terms-and-conditions", "الشروط والأحكام"],
      ] as [string, string][],
      rights: "جميع الحقوق محفوظة.",
      poweredBy: "بدعم من",
      bahrain: "البحرين",
      x: "X (تويتر)",
    },
    pauseVideo: "إيقاف فيديو الخلفية",
    playVideo: "تشغيل فيديو الخلفية",
    updated: "آخر تحديث",
    published: "نُشر في",
    pageHome: "الرئيسية",
  },
} as const;
