import bale_icon from "../../public/bale.svg";
import telegram_icon from "../../public/telegram.svg";
import instagram_icon from "../../public/Instagram.svg";
import {
  Milk,
  Croissant,
  Utensils,
  Candy,
  Droplet,
  Snowflake,
  Package,
  Heart,
  Home,
  Popcorn,
} from "lucide-react";
import { toPersianDigits } from "@/utils/to-persian-digits";

export const social_media = [
  { title: "bale", icon: bale_icon, href: "/" },
  { title: "telegram", icon: telegram_icon, href: "/" },
  { title: "instagram", icon: instagram_icon, href: "/" },
];

export const lil_links = [
  { title: "تخفیف‌های امروز", href: "/#offers" },
  { title: "پیگیری سفارش", href: "/orders" },
  { title: "راهنمایی", href: "/about-us#faqs" },
];

export const pages_links = [
  { title: "خانه", href: "/" },
  { title: "فروشگاه", href: "/market" },
  { title: "درباره ما", href: "/about-us" },
  { title: "ارتباط با ما", href: "/contact-us" },
];

export const offers_banners = [
  {
    title: "تخفیف ویژه",
    description: "بهترین قیمت برای محصولات تازه",
    offer: "10%",
  },
  {
    title: "تخفیف ویژه",
    description: "بهترین قیمت برای محصولات تازه",
    offer: "10%",
  },
  {
    title: "تخفیف ویژه",
    description: "بهترین قیمت برای محصولات تازه",
    offer: "10%",
  },
];

export const footerLinks = {
  shop: {
    title: "فروشگاه",
    links: [
      { label: "لبنیات", href: "/market/filter/dairy" },
      {
        label: "کالا های اساسی و خواربار",
        href: "/market/filter/grocery-essentials",
      },
      {
        label: "مواد پروتئینی و تخم مرغ",
        href: "/market/filter/protein-eggs",
      },
      { label: "مشاهده همه", href: "/market" },
    ],
  },
  company: {
    title: "سوپرمارکت",
    links: [
      { label: "درباره ما", href: "/about-us" },
      { label: "تماس با ما", href: "/contact-us" },
      { label: "قوانین و مقررات", href: "/terms" },
      { label: "حریم خصوصی", href: "/privacy" },
    ],
  },
  account: {
    title: "حساب کاربری",
    links: [
      { label: "ورود / ثبت نام", href: "/sign-in" },
      { label: "سفارش‌های من", href: "/orders" },
      { label: "سبد خرید", href: "/shopping-cart" },
      { label: "علاقه‌مندی‌ها", href: "/wishlist" },
    ],
  },
};

export const footerLinkFoot = [
  { label: "قوانین", href: "/terms" },
  { label: " حریم خصوصی", href: "/privacy" },
  { label: "پشتیبانی", href: "/contact-us" },
];

export const contact_us_details = [
  {
    label: "آدرس",
    values: ["تبریز, چهاراه آبرسان, رو به روی مدرسه پناهی"],
  },
  {
    label: "شماره تلفن",
    values: [toPersianDigits("041 33343989"), toPersianDigits("0933 855 0469")],
  },
  {
    label: "ایمیل",
    values: ["info@company.com", "sales@company.com"],
  },
];

export const about_us_const = [
  { title: " سال سابقه کاری", number: `+${toPersianDigits(25)}` },
  {
    title: " محصولات موجود در فروشگاه",
    number: `+${toPersianDigits(500)}`,
  },
  { title: "مشتری راضی", number: `+${toPersianDigits("10,000")}` },
];

export const faqs = [
  {
    question:
      "برای ثبت سفارش از سوپرمارکت آنلاین شما چه مراحلی را باید طی کنم؟",
    answer:
      "کافیست وارد سایت ما شوید، محصولات مورد نیاز را به سبد خرید اضافه کنید، آدرس را انتخاب کرده و سپس پرداخت را انجام دهید.",
  },
  {
    question: "روش‌های پرداخت چیست؟",
    answer: "بصوزت انلاین و امن از طریق زرین پال انجام میشود.",
  },
  {
    question: "محدوده ارسال شما کدام مناطق است؟",
    answer: " در حال حاضر تمام مناطق شهر تبریز تحت پوشش هستند. ",
  },
  {
    question: "نحوه ارتباط با پشتیبانی چگونه است؟",
    answer: `
      از طریق چت آنلاین داخل اپلیکیشن های بله و تلگرام و ایتا (ساعت ۰۸:۰۰ صبح تا ۱۰:۰۰ شب)، شماره تلفن ${toPersianDigits("04133343989")}  یا ایمیل support@example.com.
    `,
  },
  {
    question: "آیا اطلاعات کارت بانکی من نزد شما ذخیره می‌شود؟ ",
    answer:
      "خیر، پرداخت از طریق درگاه بانکی معتبر انجام می‌شود و ما هیچ دسترسی به اطلاعات محرمانه کارت شما نداریم.",
  },
];
