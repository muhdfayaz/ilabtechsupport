import { EmailLink } from "@/components/email-link";
import { LegalPage } from "@/components/legal-page";
import { LTR, UI, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

const META = {
  privacy: {
    en: {
      title: "Privacy Policy | How iLab Tech Support Protects Your Data",
      desc: "How iLab Tech Support collects, uses and protects your information when you visit our website or use our repair services in Bahrain.",
      h1: "Privacy Policy",
      updated: "20 November 2026",
    },
    ar: {
      title: "سياسة الخصوصية | كيف تحمي iLab Tech Support بياناتك",
      desc: "كيف تجمع iLab Tech Support معلوماتك وتستخدمها وتحميها عند زيارة موقعنا أو استخدام خدمات الإصلاح لدينا في البحرين.",
      h1: "سياسة الخصوصية",
      updated: "20 نوفمبر 2026",
    },
  },
  terms: {
    en: {
      title: "Terms and Conditions | iLab Tech Support Repairs Bahrain",
      desc: "Terms and conditions for iLab Tech Support repair services in Bahrain, including quotes, repair warranty, data backup and use of our website.",
      h1: "Terms and Conditions",
      updated: "20 November 2026",
    },
    ar: {
      title: "الشروط والأحكام | إصلاحات iLab Tech Support في البحرين",
      desc: "الشروط والأحكام لخدمات الإصلاح لدى iLab Tech Support في البحرين، وتشمل عروض الأسعار وضمان الإصلاح والنسخ الاحتياطي للبيانات واستخدام موقعنا.",
      h1: "الشروط والأحكام",
      updated: "20 نوفمبر 2026",
    },
  },
} as const;

export const privacyMetadata = (locale: Locale) =>
  buildMetadata({
    title: META.privacy[locale].title,
    description: META.privacy[locale].desc,
    path: "/privacy-policy",
    locale,
  });

export const termsMetadata = (locale: Locale) =>
  buildMetadata({
    title: META.terms[locale].title,
    description: META.terms[locale].desc,
    path: "/terms-and-conditions",
    locale,
  });

const link = "font-medium text-ink underline";

function Phone() {
  return (
    <a href={`tel:${SITE.phone.tel}`}>
      <bdi {...LTR}>{SITE.phone.display}</bdi>
    </a>
  );
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const m = META.privacy[locale];
  const email = <EmailLink label={UI[locale].email} className={link} />;
  return (
    <LegalPage
      locale={locale}
      title={m.h1}
      description={m.desc}
      path="/privacy-policy"
      updated={m.updated}
    >
      {locale === "en" ? (
        <>
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
            you by emailing us ({email}) or calling <Phone />.
          </p>
          <h2>Contact</h2>
          <p>
            iLab Tech Support, Bahrain · <Phone /> · {email}
          </p>
        </>
      ) : (
        <>
          <p className="mt-6">
            توضح هذه السياسة كيف تتعامل iLab Tech Support (&quot;iLab&quot;، &quot;نحن&quot;) مع
            المعلومات عند استخدامك موقع ilabtechsupport.com.{" "}
            {/* TODO: have counsel review before launch */}
          </p>
          <h2>المعلومات التي نجمعها</h2>
          <ul>
            <li>
              <strong>بيانات التواصل التي ترسلها إلينا</strong> — مثل اسمك ورقم هاتفك ونوع
              جهازك والمشكلة عند مراسلتنا عبر واتساب أو الاتصال بنا أو مراسلتنا بالبريد.
            </li>
            <li>
              <strong>بيانات الاستخدام</strong> — الصفحات التي تزورها ونوع الجهاز والمتصفح
              والموقع التقريبي، وتُجمع عبر Google Analytics وGoogle Ads فقط إذا وافقت على
              ملفات تعريف الارتباط.
            </li>
          </ul>
          <h2>كيف نستخدمها</h2>
          <ul>
            <li>لتقديم عروض الأسعار وحجز الإصلاحات وتنفيذها والرد على استفساراتك.</li>
            <li>لفهم كيفية استخدام الزوار للموقع وتحسينه.</li>
            <li>لقياس أداء إعلاناتنا.</li>
          </ul>
          <h2>ملفات تعريف الارتباط</h2>
          <p>
            تبقى ملفات التحليلات والإعلانات معطلة حتى تختار &quot;موافق&quot; في إشعار ملفات
            تعريف الارتباط. يمكنك تغيير رأيك بمسح بيانات هذا الموقع من متصفحك.
          </p>
          <h2>المشاركة</h2>
          <p>
            لا نبيع معلوماتك الشخصية. نشارك البيانات فقط مع مزودي الخدمات الذين يساعدون في
            تشغيل موقعنا وتحليلاته (مثل Google) وحين يقتضي القانون ذلك.
          </p>
          <h2>حقوقك</h2>
          <p>
            يمكنك أن تطلب منا الاطلاع على بياناتك الشخصية لدينا أو تصحيحها أو حذفها عبر
            مراسلتنا ({email}) أو الاتصال بالرقم <Phone />.
          </p>
          <h2>التواصل</h2>
          <p>
            iLab Tech Support، البحرين · <Phone /> · {email}
          </p>
        </>
      )}
    </LegalPage>
  );
}

export function TermsPage({ locale }: { locale: Locale }) {
  const m = META.terms[locale];
  const email = <EmailLink label={UI[locale].email} className={link} />;
  return (
    <LegalPage
      locale={locale}
      title={m.h1}
      description={m.desc}
      path="/terms-and-conditions"
      updated={m.updated}
    >
      {locale === "en" ? (
        <>
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
            Questions? {email} · <Phone />
          </p>
        </>
      ) : (
        <>
          <p className="mt-6">
            باستخدامك موقع ilabtechsupport.com أو خدماتنا فإنك توافق على هذه الشروط.{" "}
            {/* TODO: have counsel review before launch */}
          </p>
          <h2>الإصلاحات وعروض الأسعار</h2>
          <p>
            تُعدّ عروض الأسعار المقدمة عبر واتساب أو الهاتف أو هذا الموقع تقديرات إلى أن
            يفحص فنيونا جهازك. قد يكشف الفحص التشخيصي أعطالاً إضافية، وفي هذه الحالة
            سنتواصل معك قبل المتابعة.
          </p>
          <h2>الضمان</h2>
          <ul>
            <li>تأتي خدمة واستبدال البطارية مع ضمان مقاوم للماء لمدة سنة.</li>
            <li>
              تأتي هواتف iPhone المجددة والمعتمدة من iLab مع ضمان iLab لمدة سنة وباقة
              الحماية iLab Shield.
            </li>
            <li>
              لا يشمل الضمان الأضرار الناتجة بعد الإصلاح أو البيع، مثل السقوط أو أضرار
              السوائل أو محاولات الإصلاح غير المصرّح بها.
            </li>
          </ul>
          <h2>بياناتك</h2>
          <p>
            يُرجى أخذ نسخة احتياطية من جهازك قبل إحضاره. iLab غير مسؤولة عن فقدان البيانات
            أثناء الإصلاح أو خدمة البرمجيات.
          </p>
          <h2>استخدام الموقع</h2>
          <p>
            المحتوى المنشور على هذا الموقع مقدَّم للاطلاع، وقد نحدّثه في أي وقت. العلامات
            التجارية مثل Apple وiPhone وiPad مملوكة لأصحابها؛ وiLab Tech Support مزوّد خدمة
            مستقل.
          </p>
          <h2>التواصل</h2>
          <p>
            لديك استفسار؟ {email} · <Phone />
          </p>
        </>
      )}
    </LegalPage>
  );
}
