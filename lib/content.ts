import type { Locale } from "./i18n";
import {
  BRANCHES,
  DEVICES,
  FAQS,
  OTHER_LOCATIONS,
  REPAIR_SERVICES,
  SERVICE_KEYWORDS,
  SITE,
  type Branch,
  type Service,
} from "./site";

/**
 * Localized business content. English text lives in lib/site.ts (single source
 * of truth); Arabic equivalents are keyed by the same ids/slugs here so NAP
 * data (phones, URLs, map links) is never duplicated.
 */

const AR_BRANCH: Record<
  string,
  Pick<Branch, "name" | "area" | "streetAddress" | "locality" | "region">
> = {
  "dana-mall-seef": {
    name: "iLab Tech Support – دانة مول، السيف",
    area: "دانة مول، السيف",
    streetAddress: "دانة مول، السيف",
    locality: "السيف، المنامة",
    region: "محافظة العاصمة",
  },
  "exhibition-ave-hoora": {
    name: "iLab Tech Support – شارع المعارض، الحورة",
    area: "شارع المعارض، الحورة",
    streetAddress: "شارع المعارض، الحورة",
    locality: "المنامة",
    region: "محافظة العاصمة",
  },
  "umm-al-hassam": {
    name: "iLab Tech Support – أم الحصم",
    area: "أم الحصم",
    streetAddress: "شارع أم الحصم",
    locality: "المنامة",
    region: "محافظة العاصمة",
  },
};

const AR_SERVICE: Record<string, Pick<Service, "title" | "blurb">> = {
  screen: {
    title: "إصلاح واستبدال الشاشة",
    blurb: "شاشة مكسورة أو لا تستجيب؟ نصلح شاشات iPhone باستخدام شاشات آبل الأصلية.",
  },
  battery: {
    title: "استبدال البطارية",
    blurb: "خدمة واستبدال البطارية مع ضمان مقاوم للماء لمدة سنة.",
  },
  "charge-port": {
    title: "إصلاح منفذ الشحن",
    blurb: "الشحن بطيء أو المنفذ مرتخٍ أو لا يشحن إطلاقاً؟ نعيد لجهازك الشحن الموثوق.",
  },
  camera: {
    title: "إصلاح الكاميرا",
    blurb: "إصلاح الكاميرات والعدسات الضبابية أو السوداء أو المتشققة.",
  },
  "water-damage": {
    title: "إصلاح أضرار السوائل",
    blurb: "تشخيص وإصلاح سريع بعد تعرض الجهاز للسوائل — وكلما أحضرته أسرع كانت النتيجة أفضل.",
  },
  "mic-speaker": {
    title: "إصلاح الميكروفون والسماعة",
    blurb: "إصلاح السماعة المتقطعة أو الصوت المكتوم في المكالمات أو الميكروفون المعطّل.",
  },
  "power-button": {
    title: "إصلاح زر التشغيل",
    blurb: "إصلاح الأزرار العالقة أو المتصلبة أو غير المستجيبة بالشكل الصحيح.",
  },
  software: {
    title: "مشاكل البرمجيات",
    blurb: "حل مشاكل التعليق وحلقات الإقلاع وفشل التحديثات وغيرها من أعطال النظام.",
  },
  case: {
    title: "إصلاح الهيكل",
    blurb: "إعادة الإطارات المنحنية والهياكل التالفة إلى حالتها الأصلية.",
  },
  diagnostic: {
    title: "فحص تشخيصي",
    blurb: "لا تعرف ما العطل؟ الفحص التشخيصي الشامل يكشف العطل أولاً.",
  },
  tablet: {
    title: "إصلاح الأجهزة اللوحية",
    blurb: "إصلاح iPad والأجهزة اللوحية، من الشاشات إلى البطاريات.",
  },
  memory: {
    title: "ترقية ذاكرة iPhone",
    blurb: "تعاني من نفاد المساحة؟ اسألنا عن ترقية ذاكرة جهاز iPhone.",
  },
};

const AR_FAQS = [
  {
    q: "ما الأجهزة التي تصلحها iLab Tech Support في البحرين؟",
    a: "نصلح أجهزة iPhone وiPad وMacBook وسماعات آبل AirPods وسماعات آبل، إضافة إلى هواتف سامسونج (بما فيها القابلة للطي) وهواتف Google Pixel وأجهزة PlayStation.",
  },
  {
    q: "ما أنواع الإصلاح التي تقدمونها؟",
    a: "إصلاح واستبدال الشاشات، واستبدال البطاريات، وإصلاح منفذ الشحن والكاميرا، وإصلاح أضرار السوائل، وإصلاح الميكروفون والسماعة وزر التشغيل، وحل مشاكل البرمجيات، وإصلاح الهيكل والأجهزة اللوحية، والفحص التشخيصي. كما نقدم ترقية ذاكرة iPhone.",
  },
  {
    q: "هل تستخدمون قطع آبل الأصلية في إصلاح شاشات iPhone؟",
    a: "نعم. نستخدم في إصلاح شاشات iPhone شاشات آبل الأصلية.",
  },
  {
    q: "هل يوجد ضمان على الإصلاح؟",
    a: "خدمة واستبدال البطارية تأتي مع ضمان مقاوم للماء لمدة سنة. اسأل فريقنا عن تفاصيل الضمان للإصلاحات الأخرى عند الحجز.",
  },
  {
    q: "ما هي هواتف iLab المعتمدة؟",
    a: "هواتف iLab المعتمدة هي أجهزة iPhone مجددة تخضع لـ120 اختباراً قبل وصولها إليك. يأتي كل جهاز مع ضمان iLab لمدة سنة وباقة الحماية iLab Shield.",
  },
  {
    q: "أين تقع مراكز الخدمة في البحرين؟",
    a: "يمكنك زيارتنا في دانة مول بالسيف، وشارع المعارض في الحورة (المنامة)، وشارع أم الحصم (المنامة).",
  },
  {
    q: "كيف أحجز إصلاحاً؟",
    a: "راسلنا عبر واتساب أو اتصل بنا أو زر أي فرع مباشرة. يمكنك أيضاً استخدام أداة طلب الإصلاح في هذه الصفحة لإرسال نوع جهازك والمشكلة بنقرة واحدة.",
  },
];

const AR_KEYWORDS = [
  "خدمة iPhone",
  "مركز خدمة iPhone",
  "إصلاح وصيانة منتجات آبل",
  "إصلاح شاشات iPhone من آبل",
  "خدمة وإصلاح iPhone من آبل",
  "خدمة وإصلاح iPad",
  "صيانة MacBook",
  "خدمة وإصلاح AirPods",
  "خدمة وإصلاح سماعات آبل",
  "خدمة سامسونج",
  "مركز خدمة سامسونج",
  "خدمة هواتف سامسونج القابلة للطي",
  "خدمة Google Pixel",
  "خدمة وإصلاح هواتف Google Pixel",
  "خدمة PlayStation",
];

const AR_DEVICES = [
  "iPhone",
  "iPad",
  "MacBook",
  "سماعات آبل AirPods",
  "سماعة آبل",
  "سامسونج",
  "سامسونج قابل للطي",
  "Google Pixel",
  "PlayStation",
];

const AR_OTHER: Record<string, { name: string; detail: string }> = {
  "Dubai Airport Free Zone": {
    name: "المنطقة الحرة بمطار دبي",
    detail: "دبي، الإمارات العربية المتحدة",
  },
  "Lulu Mall, Edappally": {
    name: "لولو مول، إدابالي",
    detail: "كيرالا، الهند",
  },
};

export function getBranches(locale: Locale): Branch[] {
  if (locale === "en") return BRANCHES;
  return BRANCHES.map((b) => ({ ...b, ...AR_BRANCH[b.id] }));
}

export function getServices(locale: Locale): Service[] {
  if (locale === "en") return REPAIR_SERVICES;
  return REPAIR_SERVICES.map((s) => ({ ...s, ...AR_SERVICE[s.slug] }));
}

export function getFaqs(locale: Locale): { q: string; a: string }[] {
  return locale === "en" ? FAQS : AR_FAQS;
}

export function getKeywords(locale: Locale): string[] {
  return locale === "en" ? SERVICE_KEYWORDS : AR_KEYWORDS;
}

export function getDevices(locale: Locale): string[] {
  return locale === "en" ? [...DEVICES] : AR_DEVICES;
}

export function getOtherLocations(locale: Locale) {
  if (locale === "en") return OTHER_LOCATIONS;
  return OTHER_LOCATIONS.map((l) => ({ ...l, ...AR_OTHER[l.name] }));
}

export const SITE_TEXT = {
  en: {
    fullName: SITE.fullName,
    description: SITE.description,
  },
  ar: {
    fullName: "iLab Tech Support | إصلاح iPhone وأجهزة آبل في البحرين",
    description:
      "تقدم iLab Tech Support خدمات إصلاح احترافية لأجهزة iPhone وiPad وسامسونج وPlayStation في البحرين. زر مراكز الخدمة لدينا للحصول على إصلاح ودعم من خبراء.",
  },
} as const;
