import type { Locale } from "./i18n";

/**
 * Copy for the dedicated service landing pages. Only facts already published
 * on the site are used (genuine Apple displays, one-year waterproof battery
 * warranty, diagnostic scan, device coverage). No prices or repair times.
 */

type Faq = { q: string; a: string };
type ServiceText = {
  nav: string;
  title: string;
  h1: string;
  desc: string;
  intro: string;
  issues: string[];
  process: string;
  points: string[];
  faq: Faq[];
};

export type ServicePageData = {
  slug: string;
  /** Slug of the matching entry in REPAIR_SERVICES (used for the WhatsApp topic). */
  related: string[];
  text: Record<Locale, ServiceText>;
};

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: "iphone-screen-repair",
    related: ["iphone-battery-replacement", "iphone-water-damage-repair", "ipad-repair"],
    text: {
      en: {
        nav: "iPhone screen repair",
        title: "iPhone Screen Repair in Bahrain | Genuine Apple Display",
        h1: "iPhone screen repair in Bahrain",
        desc: "Cracked or unresponsive iPhone screen? iLab Tech Support repairs iPhone screens in Bahrain with genuine, original Apple displays. Visit Seef, Hoora or Umm Al Hassam.",
        intro:
          "A cracked, flickering or unresponsive iPhone screen does not have to mean a new phone. Our professional technicians replace iPhone displays with genuine, original Apple displays at our service centers in Bahrain.",
        issues: [
          "Cracked or shattered glass",
          "Touch not responding or ghost touches",
          "Lines, flicker or dead patches on the display",
          "Black or blank screen while the phone still powers on",
        ],
        process:
          "Bring your iPhone to any branch or message us on WhatsApp with your model and a photo of the damage. A diagnostic scan confirms the screen is the only fault, then we explain the repair before any work begins.",
        points: [
          "Genuine, original Apple displays",
          "Diagnostic scan first, so you only fix what is wrong",
          "Three service centers across Bahrain",
        ],
        faq: [
          { q: "Do you use genuine Apple displays for iPhone screen repair?", a: "Yes. Our iPhone screen repair uses genuine, original Apple displays." },
          { q: "Can you repair a screen if the iPhone also has other damage?", a: "Yes. A diagnostic scan finds every fault first, and we contact you before doing any extra work." },
          { q: "Where can I get my iPhone screen repaired in Bahrain?", a: "Visit iLab Tech Support at Dana Mall in Seef, Exhibition Avenue in Hoora or Umm Al Hassam in Manama, or message us on WhatsApp first." },
        ],
      },
      ar: {
        nav: "إصلاح شاشات iPhone",
        title: "إصلاح شاشات iPhone في البحرين | شاشة آبل أصلية",
        h1: "إصلاح شاشات iPhone في البحرين",
        desc: "شاشة iPhone مكسورة أو لا تستجيب؟ تصلح iLab Tech Support شاشات iPhone في البحرين بشاشات آبل أصلية. زر فروعنا في السيف أو الحورة أو أم الحصم.",
        intro:
          "الشاشة المتشققة أو المتقطعة أو التي لا تستجيب لا تعني بالضرورة شراء هاتف جديد. يستبدل فنيونا المحترفون شاشات iPhone بشاشات آبل أصلية في مراكز خدمتنا في البحرين.",
        issues: [
          "زجاج مكسور أو متشقق",
          "اللمس لا يستجيب أو يعمل من تلقاء نفسه",
          "خطوط أو وميض أو بقع ميتة على الشاشة",
          "شاشة سوداء أو فارغة رغم أن الهاتف يعمل",
        ],
        process:
          "أحضر جهازك إلى أي فرع أو راسلنا عبر واتساب مع طراز هاتفك وصورة للضرر. يؤكد الفحص التشخيصي أن الشاشة هي العطل الوحيد، ثم نشرح لك الإصلاح قبل بدء أي عمل.",
        points: [
          "شاشات آبل أصلية",
          "فحص تشخيصي أولاً، فتصلح ما يحتاج إصلاحاً فقط",
          "ثلاثة مراكز خدمة في أنحاء البحرين",
        ],
        faq: [
          { q: "هل تستخدمون شاشات آبل الأصلية في إصلاح شاشات iPhone؟", a: "نعم. نستخدم في إصلاح شاشات iPhone شاشات آبل الأصلية." },
          { q: "هل تصلحون الشاشة إذا كان في الجهاز أضرار أخرى؟", a: "نعم. يكشف الفحص التشخيصي كل الأعطال أولاً، ونتواصل معك قبل تنفيذ أي عمل إضافي." },
          { q: "أين أصلح شاشة iPhone في البحرين؟", a: "زر iLab Tech Support في دانة مول بالسيف أو شارع المعارض في الحورة أو أم الحصم في المنامة، أو راسلنا عبر واتساب أولاً." },
        ],
      },
    },
  },
  {
    slug: "iphone-battery-replacement",
    related: ["iphone-screen-repair", "iphone-charge-port-repair", "iphone-water-damage-repair"],
    text: {
      en: {
        nav: "iPhone battery replacement",
        title: "iPhone Battery Replacement in Bahrain | 1-Year Warranty",
        h1: "iPhone battery replacement in Bahrain",
        desc: "iPhone battery draining fast or shutting down? iLab Tech Support replaces iPhone batteries in Bahrain with a one-year waterproof warranty. Book on WhatsApp today.",
        intro:
          "If your iPhone dies early, shuts down at a high percentage or has become slow, an aging battery is often the cause. iLab provides battery service and replacement backed by a one-year waterproof warranty.",
        issues: [
          "Battery drains much faster than it used to",
          "Phone shuts off unexpectedly",
          "Phone gets hot or the battery looks swollen",
          "Slow performance after the battery has aged",
        ],
        process:
          "Message us or walk in with your iPhone. We check the battery and confirm the replacement is what the phone needs, then carry it out and test the device before handing it back.",
        points: [
          "One-year waterproof warranty on battery service and replacement",
          "Diagnostic scan to confirm the battery is the fault",
          "Walk-in at three Bahrain branches",
        ],
        faq: [
          { q: "Is there a warranty on iPhone battery replacement?", a: "Yes. Battery service and replacement comes with a one-year waterproof warranty." },
          { q: "How do I know if my battery needs replacing?", a: "Fast draining, unexpected shutdowns and swelling are common signs. Our diagnostic scan confirms it." },
          { q: "Can I book a battery replacement on WhatsApp?", a: "Yes. Message us your iPhone model and we will guide you to the nearest branch." },
        ],
      },
      ar: {
        nav: "استبدال بطارية iPhone",
        title: "استبدال بطارية iPhone في البحرين | ضمان سنة",
        h1: "استبدال بطارية iPhone في البحرين",
        desc: "بطارية iPhone تنفد بسرعة أو يتوقف الجهاز فجأة؟ تستبدل iLab Tech Support بطاريات iPhone في البحرين مع ضمان مقاوم للماء لمدة سنة. احجز عبر واتساب اليوم.",
        intro:
          "إذا كان iPhone ينطفئ مبكراً أو يتوقف عند نسبة شحن مرتفعة أو أصبح بطيئاً، فغالباً تكون البطارية القديمة هي السبب. تقدم iLab خدمة واستبدال البطارية مع ضمان مقاوم للماء لمدة سنة.",
        issues: [
          "البطارية تنفد أسرع بكثير من السابق",
          "يتوقف الهاتف عن العمل فجأة",
          "يسخن الهاتف أو تبدو البطارية منتفخة",
          "بطء الأداء بعد تقادم البطارية",
        ],
        process:
          "راسلنا أو زرنا بجهازك. نفحص البطارية ونؤكد أن الاستبدال هو ما يحتاجه الجهاز، ثم ننفذه ونختبر الجهاز قبل تسليمه إليك.",
        points: [
          "ضمان مقاوم للماء لمدة سنة على خدمة واستبدال البطارية",
          "فحص تشخيصي للتأكد من أن البطارية هي العطل",
          "زيارة مباشرة في ثلاثة فروع في البحرين",
        ],
        faq: [
          { q: "هل يوجد ضمان على استبدال بطارية iPhone؟", a: "نعم. تأتي خدمة واستبدال البطارية مع ضمان مقاوم للماء لمدة سنة." },
          { q: "كيف أعرف أن بطاريتي تحتاج إلى استبدال؟", a: "النفاد السريع والتوقف المفاجئ والانتفاخ علامات شائعة. يؤكد فحصنا التشخيصي ذلك." },
          { q: "هل يمكنني حجز استبدال البطارية عبر واتساب؟", a: "نعم. أرسل لنا طراز iPhone وسنرشدك إلى أقرب فرع." },
        ],
      },
    },
  },
  {
    slug: "iphone-water-damage-repair",
    related: ["iphone-charge-port-repair", "iphone-screen-repair", "iphone-battery-replacement"],
    text: {
      en: {
        nav: "iPhone water-damage repair",
        title: "iPhone Water Damage Repair in Bahrain | Fast Diagnosis",
        h1: "iPhone water-damage repair in Bahrain",
        desc: "Dropped your iPhone in water? iLab Tech Support offers fast diagnosis and water-damage repair in Bahrain. The sooner you bring it in, the better the outcome.",
        intro:
          "Liquid damage gets worse with time, so speed matters. iLab offers fast diagnosis and repair after liquid damage for iPhone and other devices at our Bahrain service centers.",
        issues: [
          "Phone will not turn on after contact with liquid",
          "Screen flickers, shows lines or has stopped responding",
          "Speaker, microphone or charging stopped working",
          "Sticky or unresponsive buttons after a spill",
        ],
        process:
          "Switch the device off and bring it to us as soon as you can. We run a diagnostic scan to find what the liquid has affected, then explain what can be repaired before starting.",
        points: [
          "Fast diagnosis after liquid damage",
          "Repair of screens, charge ports, speakers and microphones",
          "Message us on WhatsApp for immediate guidance",
        ],
        faq: [
          { q: "What should I do right after my iPhone gets wet?", a: "Turn it off and bring it to an iLab branch as soon as possible. The sooner it is diagnosed, the better the chance of a good repair." },
          { q: "Do you repair other devices after water damage?", a: "Yes. We service iPad, MacBook, Samsung, Google Pixel and other devices too." },
          { q: "How do I get started?", a: "Message us on WhatsApp or walk in at Seef, Hoora or Umm Al Hassam." },
        ],
      },
      ar: {
        nav: "إصلاح أضرار السوائل في iPhone",
        title: "إصلاح iPhone بعد السوائل في البحرين | تشخيص سريع",
        h1: "إصلاح أضرار السوائل في iPhone بالبحرين",
        desc: "سقط iPhone في الماء؟ تقدم iLab Tech Support تشخيصاً وإصلاحاً سريعاً لأضرار السوائل في البحرين. وكلما أحضرت جهازك أسرع كانت النتيجة أفضل.",
        intro:
          "تزداد أضرار السوائل سوءاً مع الوقت، لذا فالسرعة مهمة. تقدم iLab تشخيصاً وإصلاحاً سريعاً بعد تعرض iPhone وغيره من الأجهزة للسوائل في مراكز خدمتنا في البحرين.",
        issues: [
          "الهاتف لا يعمل بعد ملامسة السوائل",
          "وميض في الشاشة أو خطوط أو توقف الاستجابة",
          "توقف السماعة أو الميكروفون أو الشحن",
          "أزرار عالقة أو لا تستجيب بعد انسكاب سائل",
        ],
        process:
          "أطفئ الجهاز وأحضره إلينا في أقرب وقت. نجري فحصاً تشخيصياً لمعرفة ما تأثر بالسائل، ثم نشرح ما يمكن إصلاحه قبل أن نبدأ.",
        points: [
          "تشخيص سريع بعد أضرار السوائل",
          "إصلاح الشاشات ومنافذ الشحن والسماعات والميكروفونات",
          "راسلنا عبر واتساب للحصول على إرشاد فوري",
        ],
        faq: [
          { q: "ماذا أفعل فور تبلل iPhone؟", a: "أطفئه وأحضره إلى أحد فروع iLab في أقرب وقت. كلما شُخّص أسرع زادت فرصة إصلاحه جيداً." },
          { q: "هل تصلحون أجهزة أخرى بعد أضرار السوائل؟", a: "نعم. نخدم أيضاً iPad وMacBook وسامسونج وGoogle Pixel وغيرها." },
          { q: "كيف أبدأ؟", a: "راسلنا عبر واتساب أو زرنا في السيف أو الحورة أو أم الحصم." },
        ],
      },
    },
  },
  {
    slug: "iphone-charge-port-repair",
    related: ["iphone-battery-replacement", "iphone-water-damage-repair", "iphone-screen-repair"],
    text: {
      en: {
        nav: "iPhone charge port repair",
        title: "iPhone Charge Port Repair in Bahrain | iLab Tech Support",
        h1: "iPhone charge port repair in Bahrain",
        desc: "iPhone charging slowly, loose or not at all? iLab Tech Support repairs iPhone charge ports in Bahrain. Message us on WhatsApp or visit a branch.",
        intro:
          "A slow, loose or dead charging port can leave you without a phone. We restore reliable charging for iPhone at our Bahrain service centers.",
        issues: [
          "Cable falls out or must be held at an angle",
          "Phone charges slowly or only sometimes",
          "Not charging at all",
          "Phone not recognised when connected to a computer",
        ],
        process:
          "We inspect the port first, because dust and debris are sometimes the only problem. If the port or battery needs work, we explain the repair before we begin.",
        points: [
          "Diagnostic scan finds the real cause of charging problems",
          "Charge port and battery service under one roof",
          "Walk in or message us on WhatsApp",
        ],
        faq: [
          { q: "Why is my iPhone not charging?", a: "Causes include a worn charge port, debris in the port or an aging battery. A diagnostic scan identifies which." },
          { q: "Do you also replace batteries?", a: "Yes. Battery replacement carries a one-year waterproof warranty." },
          { q: "Where can I get it repaired?", a: "At Dana Mall in Seef, Exhibition Avenue in Hoora or Umm Al Hassam in Manama." },
        ],
      },
      ar: {
        nav: "إصلاح منفذ شحن iPhone",
        title: "إصلاح منفذ شحن iPhone في البحرين | iLab Tech Support",
        h1: "إصلاح منفذ شحن iPhone في البحرين",
        desc: "iPhone يشحن ببطء أو المنفذ مرتخٍ أو لا يشحن؟ تصلح iLab Tech Support منافذ شحن iPhone في البحرين. راسلنا عبر واتساب أو زر أحد فروعنا.",
        intro:
          "قد يتركك منفذ الشحن البطيء أو المرتخي أو المعطل بلا هاتف. نعيد الشحن الموثوق لأجهزة iPhone في مراكز خدمتنا في البحرين.",
        issues: [
          "الكابل يسقط أو يجب تثبيته بزاوية معينة",
          "الهاتف يشحن ببطء أو أحياناً فقط",
          "الجهاز لا يشحن إطلاقاً",
          "الهاتف لا يُعرَّف عند توصيله بالحاسوب",
        ],
        process:
          "نفحص المنفذ أولاً، فقد يكون الغبار والأوساخ هما المشكلة الوحيدة. وإذا احتاج المنفذ أو البطارية إلى عمل، نشرح الإصلاح قبل أن نبدأ.",
        points: [
          "الفحص التشخيصي يكشف السبب الحقيقي لمشاكل الشحن",
          "خدمة منفذ الشحن والبطارية تحت سقف واحد",
          "زرنا مباشرة أو راسلنا عبر واتساب",
        ],
        faq: [
          { q: "لماذا لا يشحن iPhone؟", a: "من الأسباب تآكل منفذ الشحن أو تراكم الأوساخ فيه أو تقادم البطارية. يحدد الفحص التشخيصي السبب." },
          { q: "هل تستبدلون البطاريات أيضاً؟", a: "نعم. يأتي استبدال البطارية مع ضمان مقاوم للماء لمدة سنة." },
          { q: "أين أصلحه؟", a: "في دانة مول بالسيف أو شارع المعارض في الحورة أو أم الحصم في المنامة." },
        ],
      },
    },
  },
  {
    slug: "samsung-repair",
    related: ["iphone-screen-repair", "ipad-repair", "playstation-repair"],
    text: {
      en: {
        nav: "Samsung repair",
        title: "Samsung Service Center in Bahrain | Phone & Foldable Repair",
        h1: "Samsung service center in Bahrain",
        desc: "iLab Tech Support is a trusted Samsung service center in Bahrain, repairing Galaxy phones including Samsung foldables. Message us on WhatsApp or visit a branch.",
        intro:
          "iLab is more than an iPhone service center. We are also a trusted Samsung service center in Bahrain, handling Galaxy screen and battery repairs and Samsung fold phone service.",
        issues: [
          "Cracked or unresponsive Galaxy screens",
          "Battery draining fast or not charging",
          "Samsung foldable display or hinge problems",
          "Water damage, speaker, microphone and software faults",
        ],
        process:
          "Message us with your Samsung model and the problem, or visit a branch. A diagnostic scan finds the fault, and we explain the repair before starting.",
        points: [
          "Samsung phones and Samsung foldables serviced",
          "Diagnostic scan before any repair",
          "Three Bahrain branches",
        ],
        faq: [
          { q: "Do you repair Samsung foldable phones?", a: "Yes. We offer Samsung fold phone service." },
          { q: "Which Samsung repairs do you offer?", a: "Screens, batteries, charging, water damage, speakers, microphones and software problems, among others." },
          { q: "Can I get a quote first?", a: "Yes. Message us on WhatsApp with your model and the issue." },
        ],
      },
      ar: {
        nav: "إصلاح سامسونج",
        title: "مركز خدمة سامسونج في البحرين | إصلاح الهواتف والقابلة للطي",
        h1: "مركز خدمة سامسونج في البحرين",
        desc: "iLab Tech Support مركز خدمة سامسونج موثوق في البحرين، يصلح هواتف Galaxy بما فيها هواتف سامسونج القابلة للطي. راسلنا عبر واتساب أو زر أحد فروعنا.",
        intro:
          "iLab ليست مركز خدمة iPhone فقط. فنحن أيضاً مركز خدمة سامسونج موثوق في البحرين، نتولى إصلاح شاشات وبطاريات Galaxy وخدمة هواتف سامسونج القابلة للطي.",
        issues: [
          "شاشات Galaxy المتشققة أو التي لا تستجيب",
          "البطارية تنفد بسرعة أو لا تشحن",
          "مشاكل في شاشة أو مفصلة هاتف سامسونج القابل للطي",
          "أضرار السوائل وأعطال السماعة والميكروفون والبرمجيات",
        ],
        process:
          "راسلنا بطراز هاتف سامسونج والمشكلة، أو زر أحد الفروع. يكشف الفحص التشخيصي العطل، ونشرح الإصلاح قبل البدء.",
        points: [
          "خدمة هواتف سامسونج والهواتف القابلة للطي",
          "فحص تشخيصي قبل أي إصلاح",
          "ثلاثة فروع في البحرين",
        ],
        faq: [
          { q: "هل تصلحون هواتف سامسونج القابلة للطي؟", a: "نعم. نقدم خدمة هواتف سامسونج القابلة للطي." },
          { q: "ما إصلاحات سامسونج التي تقدمونها؟", a: "الشاشات والبطاريات والشحن وأضرار السوائل والسماعات والميكروفونات ومشاكل البرمجيات وغيرها." },
          { q: "هل يمكنني الحصول على عرض سعر أولاً؟", a: "نعم. راسلنا عبر واتساب بالطراز والمشكلة." },
        ],
      },
    },
  },
  {
    slug: "ipad-repair",
    related: ["iphone-screen-repair", "samsung-repair", "macbook-repair"],
    text: {
      en: {
        nav: "iPad repair",
        title: "iPad Repair in Bahrain | Screen, Battery & More | iLab",
        h1: "iPad service and repair in Bahrain",
        desc: "iPad cracked screen, battery or charging problem? iLab Tech Support provides iPad and tablet repair in Bahrain. Message us on WhatsApp or visit a branch.",
        intro:
          "From cracked screens to batteries that no longer hold a charge, iLab provides iPad service and repair at our Bahrain service centers.",
        issues: [
          "Cracked or unresponsive iPad screen",
          "Battery draining quickly",
          "Not charging or loose charge port",
          "Software problems, freezes or update failures",
        ],
        process:
          "Send us your iPad model and a short description of the problem on WhatsApp, or bring it in. We run a diagnostic scan and explain the repair first.",
        points: [
          "iPad and tablet repairs, from screens to batteries",
          "Diagnostic scan first",
          "Three Bahrain branches",
        ],
        faq: [
          { q: "Do you repair iPads?", a: "Yes. We provide iPad service and repair, including screens and batteries." },
          { q: "Do you repair other tablets?", a: "We offer tablet repair. Message us with your model and we will confirm." },
          { q: "How do I start?", a: "Message us on WhatsApp or visit Seef, Hoora or Umm Al Hassam." },
        ],
      },
      ar: {
        nav: "إصلاح iPad",
        title: "إصلاح iPad في البحرين | الشاشة والبطارية وغيرها | iLab",
        h1: "خدمة وإصلاح iPad في البحرين",
        desc: "شاشة iPad مكسورة أو مشكلة في البطارية أو الشحن؟ تقدم iLab Tech Support إصلاح iPad والأجهزة اللوحية في البحرين. راسلنا عبر واتساب أو زر أحد فروعنا.",
        intro:
          "من الشاشات المكسورة إلى البطاريات التي لم تعد تحتفظ بالشحن، تقدم iLab خدمة وإصلاح iPad في مراكز خدمتنا في البحرين.",
        issues: [
          "شاشة iPad متشققة أو لا تستجيب",
          "البطارية تنفد بسرعة",
          "الجهاز لا يشحن أو منفذ الشحن مرتخٍ",
          "مشاكل برمجية أو تعليق أو فشل التحديثات",
        ],
        process:
          "أرسل لنا طراز iPad ووصفاً مختصراً للمشكلة عبر واتساب، أو أحضره إلينا. نجري فحصاً تشخيصياً ونشرح الإصلاح أولاً.",
        points: [
          "إصلاح iPad والأجهزة اللوحية، من الشاشات إلى البطاريات",
          "فحص تشخيصي أولاً",
          "ثلاثة فروع في البحرين",
        ],
        faq: [
          { q: "هل تصلحون أجهزة iPad؟", a: "نعم. نقدم خدمة وإصلاح iPad، بما يشمل الشاشات والبطاريات." },
          { q: "هل تصلحون أجهزة لوحية أخرى؟", a: "نقدم إصلاح الأجهزة اللوحية. راسلنا بالطراز وسنؤكد لك." },
          { q: "كيف أبدأ؟", a: "راسلنا عبر واتساب أو زرنا في السيف أو الحورة أو أم الحصم." },
        ],
      },
    },
  },
  {
    slug: "macbook-repair",
    related: ["ipad-repair", "iphone-screen-repair", "playstation-repair"],
    text: {
      en: {
        nav: "MacBook service",
        title: "MacBook Service & Repair in Bahrain | iLab Tech Support",
        h1: "MacBook service in Bahrain",
        desc: "MacBook problems? iLab Tech Support provides MacBook service and Apple repair in Bahrain. Message us on WhatsApp or visit one of our three branches.",
        intro:
          "iLab provides MacBook service as part of our maintenance of all Apple products. Tell us what your Mac is doing and we will find the fault first.",
        issues: [
          "Mac running slowly, freezing or failing to update",
          "Battery draining fast or not charging",
          "Damage after a drop or liquid spill",
          "Not sure what is wrong and need a diagnosis",
        ],
        process:
          "Message us on WhatsApp with your MacBook model and the symptoms, or bring it to a branch. A diagnostic scan comes first, then we explain the repair.",
        points: [
          "MacBook service from professional technicians",
          "Diagnostic scan finds the fault first",
          "Walk in at three Bahrain branches",
        ],
        faq: [
          { q: "Do you service MacBooks?", a: "Yes. MacBook service is part of our Apple repair and service." },
          { q: "What if I do not know what is wrong?", a: "A diagnostic scan finds the fault before any repair is quoted." },
          { q: "Where can I bring my MacBook?", a: "Dana Mall in Seef, Exhibition Avenue in Hoora or Umm Al Hassam in Manama." },
        ],
      },
      ar: {
        nav: "صيانة MacBook",
        title: "صيانة وإصلاح MacBook في البحرين | iLab Tech Support",
        h1: "صيانة MacBook في البحرين",
        desc: "مشكلة في MacBook؟ تقدم iLab Tech Support خدمة MacBook وإصلاح أجهزة آبل في البحرين. راسلنا عبر واتساب أو زر أحد فروعنا الثلاثة.",
        intro:
          "تقدم iLab صيانة MacBook ضمن صيانتنا لجميع منتجات آبل. أخبرنا بما يفعله جهازك وسنكشف العطل أولاً.",
        issues: [
          "الجهاز بطيء أو يتعطل أو يفشل في التحديث",
          "البطارية تنفد بسرعة أو لا تشحن",
          "أضرار بعد سقوط الجهاز أو انسكاب سائل عليه",
          "لا تعرف ما العطل وتحتاج إلى تشخيص",
        ],
        process:
          "راسلنا عبر واتساب بطراز MacBook والأعراض، أو أحضره إلى أحد الفروع. يأتي الفحص التشخيصي أولاً، ثم نشرح الإصلاح.",
        points: [
          "صيانة MacBook على أيدي فنيين محترفين",
          "الفحص التشخيصي يكشف العطل أولاً",
          "زيارة مباشرة في ثلاثة فروع في البحرين",
        ],
        faq: [
          { q: "هل تقدمون خدمة MacBook؟", a: "نعم. صيانة MacBook جزء من خدمة وإصلاح منتجات آبل لدينا." },
          { q: "ماذا لو لم أعرف ما العطل؟", a: "يكشف الفحص التشخيصي العطل قبل تسعير أي إصلاح." },
          { q: "أين أحضر MacBook؟", a: "في دانة مول بالسيف أو شارع المعارض في الحورة أو أم الحصم في المنامة." },
        ],
      },
    },
  },
  {
    slug: "playstation-repair",
    related: ["samsung-repair", "macbook-repair", "ipad-repair"],
    text: {
      en: {
        nav: "PlayStation service",
        title: "PlayStation Repair in Bahrain | iLab Tech Support",
        h1: "PlayStation service in Bahrain",
        desc: "PlayStation not working? iLab Tech Support offers PlayStation service in Bahrain. Message us on WhatsApp with your console model or visit a branch.",
        intro:
          "iLab also services PlayStation consoles. If yours will not start, overheats or has stopped working properly, our technicians can diagnose the problem.",
        issues: [
          "Console will not power on",
          "Overheating or unusual noise",
          "Problems displaying or connecting",
          "Not sure what is wrong and need a diagnosis",
        ],
        process:
          "Message us on WhatsApp with your PlayStation model and what is happening, or bring it in. We run a diagnostic scan and explain the repair first.",
        points: [
          "PlayStation service from professional technicians",
          "Diagnostic scan first",
          "Three Bahrain branches",
        ],
        faq: [
          { q: "Do you service PlayStation consoles?", a: "Yes. PlayStation service is part of our device coverage." },
          { q: "How do I find out what is wrong?", a: "A diagnostic scan identifies the fault before any repair." },
          { q: "How can I contact you?", a: "Message us on WhatsApp or call, or visit any iLab branch." },
        ],
      },
      ar: {
        nav: "خدمة PlayStation",
        title: "إصلاح PlayStation في البحرين | iLab Tech Support",
        h1: "خدمة PlayStation في البحرين",
        desc: "جهاز PlayStation لا يعمل؟ تقدم iLab Tech Support خدمة PlayStation في البحرين. راسلنا عبر واتساب بطراز جهازك أو زر أحد فروعنا.",
        intro:
          "تخدم iLab أيضاً أجهزة PlayStation. وإذا كان جهازك لا يعمل أو يسخن أو توقف عن العمل بشكل سليم، يستطيع فنيونا تشخيص المشكلة.",
        issues: [
          "الجهاز لا يعمل",
          "ارتفاع الحرارة أو ضجيج غير معتاد",
          "مشاكل في العرض أو الاتصال",
          "لا تعرف ما العطل وتحتاج إلى تشخيص",
        ],
        process:
          "راسلنا عبر واتساب بطراز PlayStation وما يحدث، أو أحضره إلينا. نجري فحصاً تشخيصياً ونشرح الإصلاح أولاً.",
        points: [
          "خدمة PlayStation على أيدي فنيين محترفين",
          "فحص تشخيصي أولاً",
          "ثلاثة فروع في البحرين",
        ],
        faq: [
          { q: "هل تقدمون خدمة أجهزة PlayStation؟", a: "نعم. خدمة PlayStation جزء من الأجهزة التي نغطيها." },
          { q: "كيف أعرف ما العطل؟", a: "يحدد الفحص التشخيصي العطل قبل أي إصلاح." },
          { q: "كيف أتواصل معكم؟", a: "راسلنا عبر واتساب أو اتصل بنا، أو زر أي فرع من فروع iLab." },
        ],
      },
    },
  },
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}

/** Branch landing page copy (area facts come from BRANCHES). */
export const BRANCH_TEXT = {
  en: {
    title: (area: string) => `iPhone & Samsung Repair in ${area}, Bahrain | iLab Tech Support`,
    desc: (area: string) =>
      `Visit iLab Tech Support at ${area} for iPhone, iPad, Samsung and PlayStation repair in Bahrain. Genuine Apple displays and a one-year battery warranty. Get directions.`,
    h1: (area: string) => `iLab Tech Support, ${area}`,
    intro: (area: string) =>
      `Our ${area} service center repairs iPhone, iPad, MacBook, Samsung, Google Pixel and PlayStation devices. Walk in or message us on WhatsApp first.`,
    findUs: "Find us",
    services: "Repairs available at this branch",
    why: "Why visit iLab",
    whyPoints: [
      "Genuine, original Apple displays for iPhone screen repair",
      "One-year waterproof warranty on battery service and replacement",
      "Diagnostic scan first, so you only fix what is wrong",
    ],
    faqQ: (area: string) => `Where is iLab Tech Support ${area}?`,
    faqA: (street: string, locality: string) =>
      `The branch is at ${street}, ${locality}, Bahrain. Use the Get directions button on this page for Google Maps.`,
    otherBranches: "Other Bahrain branches",
    crumbLocations: "Locations",
  },
  ar: {
    title: (area: string) => `إصلاح iPhone وسامسونج في ${area}، البحرين | iLab Tech Support`,
    desc: (area: string) =>
      `زر iLab Tech Support في ${area} لإصلاح iPhone وiPad وسامسونج وPlayStation في البحرين. شاشات آبل أصلية وضمان بطارية لمدة سنة. احصل على الاتجاهات.`,
    h1: (area: string) => `iLab Tech Support، ${area}`,
    intro: (area: string) =>
      `يصلح مركز خدمتنا في ${area} أجهزة iPhone وiPad وMacBook وسامسونج وGoogle Pixel وPlayStation. زرنا مباشرة أو راسلنا عبر واتساب أولاً.`,
    findUs: "موقعنا",
    services: "الإصلاحات المتوفرة في هذا الفرع",
    why: "لماذا تزور iLab",
    whyPoints: [
      "شاشات آبل أصلية لإصلاح شاشات iPhone",
      "ضمان مقاوم للماء لمدة سنة على خدمة واستبدال البطارية",
      "فحص تشخيصي أولاً، فتصلح ما يحتاج إصلاحاً فقط",
    ],
    faqQ: (area: string) => `أين يقع فرع iLab Tech Support في ${area}؟`,
    faqA: (street: string, locality: string) =>
      `يقع الفرع في ${street}، ${locality}، البحرين. استخدم زر الاتجاهات في هذه الصفحة لفتح خرائط Google.`,
    otherBranches: "فروعنا الأخرى في البحرين",
    crumbLocations: "الفروع",
  },
} as const;

export const SERVICES_LABEL = { en: "Services", ar: "الخدمات" } as const;
