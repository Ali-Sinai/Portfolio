// Edit these arrays to update Projects / Experience / Links / Contact without touching markup.
// Each entry supports { en, fa } text where copy differs by language.

const PROJECTS = [
  {
    title: { en: "Base — Clean Architecture Web API Core", fa: "Base — هسته Web API با معماری تمیز" },
    description: {
      en: "A reusable .NET Web API starter core built around Clean Architecture, separating Domain, Application, Infrastructure and Endpoint layers for greenfield backend projects.",
      fa: "یک هسته آماده برای شروع پروژه‌های Web API با .NET که بر پایه معماری تمیز ساخته شده و لایه‌های Domain، Application، Infrastructure و Endpoint را برای پروژه‌های بک‌اند جدید از هم جدا می‌کند.",
    },
    tags: ["C#", ".NET", "Clean Architecture", "Web API"],
    link: "https://github.com/Ali-Sinai/Base",
  },
  {
    title: { en: "Meridian AI", fa: "Meridian AI" },
    description: {
      en: "A Next.js / TypeScript application exploring AI-assisted product features on the Vercel platform.",
      fa: "یک اپلیکیشن Next.js و TypeScript برای بررسی ویژگی‌های محصول مبتنی بر هوش مصنوعی روی پلتفرم Vercel.",
    },
    tags: ["TypeScript", "Next.js", "AI"],
    link: "https://github.com/Ali-Sinai/meridian-ai",
  },
  {
    title: { en: "Dribble — Design Marketplace", fa: "Dribble — بازارچه طراحی" },
    description: {
      en: "A full-stack design marketplace built as a pnpm monorepo (web app, background jobs, and database packages), deployed live on Vercel.",
      fa: "یک بازارچه طراحی فول‌استک که به‌صورت مونوریپو با pnpm ساخته شده (اپ وب، جاب‌های پس‌زمینه و پکیج پایگاه‌داده) و به‌صورت زنده روی Vercel دیپلوی شده است.",
    },
    tags: ["TypeScript", "Full Stack", "pnpm"],
    link: "https://github.com/Ali-Sinai/dribble",
  },
  {
    title: { en: "Market Place", fa: "Market Place" },
    description: {
      en: "My first complete project — an e-commerce style backend built with C# and .NET Core while learning the framework from the ground up.",
      fa: "اولین پروژه کامل من — یک بک‌اند به‌سبک فروشگاه اینترنتی که با #C و .NET Core و در حین یادگیری این فریمورک از پایه ساخته شد.",
    },
    tags: ["C#", ".NET Core", "Web API"],
    link: "https://github.com/Ali-Sinai/Market_Place",
  },
];

const EXPERIENCE = [
  {
    role: { en: "Junior Backend Developer", fa: "برنامه‌نویس بک‌اند جونیور" },
    company: { en: "Kashef Banking Security", fa: "کاشف امنیت بانکی" },
    dates: { en: "2024 – Present", fa: "۱۴۰۳ – اکنون" },
    description: {
      en: "Designed and developed backend services for greenfield and legacy modernization projects using .NET. Implemented asynchronous messaging with RabbitMQ and containerized applications with Docker.",
      fa: "طراحی و توسعه سرویس‌های بک‌اند برای پروژه‌های جدید و نوسازی سیستم‌های قدیمی با استفاده از .NET. پیاده‌سازی پیام‌رسانی ناهمگام با RabbitMQ و کانتینری‌سازی اپلیکیشن‌ها با Docker.",
    },
  },
  {
    role: { en: "Junior Full Stack Developer", fa: "برنامه‌نویس فول‌استک جونیور" },
    company: { en: "Aspian Co.", fa: "شرکت اسپیان" },
    dates: { en: "2023 – 2024", fa: "۱۴۰۲ – ۱۴۰۳" },
    description: {
      en: "Developed full-stack features across the frontend and backend in an Agile environment. Contributed to the migration from AngularJS to Angular 13 and developed backend services using .NET Framework.",
      fa: "توسعه ویژگی‌های فول‌استک در بخش فرانت‌اند و بک‌اند در یک محیط چابک (Agile). مشارکت در مهاجرت از AngularJS به Angular 13 و توسعه سرویس‌های بک‌اند با .NET Framework.",
    },
  },
];

const CONTACT_LINKS = [
  { label: { en: "Email", fa: "ایمیل" }, value: "alisinai850@gmail.com", href: "mailto:alisinai850@gmail.com", icon: "mail" },
  { label: { en: "Phone", fa: "تلفن" }, value: "+98 910 420 4630", href: "tel:+989104204630", icon: "phone" },
  { label: { en: "GitHub", fa: "گیت‌هاب" }, value: "github.com/Ali-Sinai", href: "https://github.com/Ali-Sinai", icon: "github" },
  { label: { en: "LinkedIn", fa: "لینکدین" }, value: "linkedin.com/in/ali-sinaipour", href: "https://www.linkedin.com/in/ali-sinaipour", icon: "linkedin" },
];
