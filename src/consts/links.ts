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

export const social_media = [
  { title: "bale", icon: bale_icon, href: "/" },
  { title: "telegram", icon: telegram_icon, href: "/" },
  { title: "instagram", icon: instagram_icon, href: "/" },
];

export const lil_links = [
  { title: "تخفیف‌های امروز", href: "/#offers" },
  { title: "پیگیری سفارش", href: "/orders" },
  { title: "راهنمایی", href: "/about-us" },
];

export const pages_links = [
  { title: "خانه", href: "/" },
  { title: "فروشگاه", href: "/market" },
  { title: "درباره ما", href: "/about-us" },
  { title: "ارتباط با ما", href: "/contact-us" },
];

export const categories_links = [
  { icon: Milk, title: "لبنیات", href: "/" },
  { icon: Croissant, title: "نان و شیرینی", href: "/market" },
  { icon: Utensils, title: "بخش اغذیه و غذاهای آماده", href: "/market" },
  { icon: Candy, title: "تنقلات", href: "/market" },
  { icon: Droplet, title: "نوشیدنی", href: "/market" },
  { icon: Snowflake, title: "مواد غذایی منجمد", href: "/market" },
  { icon: Package, title: "کالاهای خشک و کنسروی", href: "/market" },
  { icon: Heart, title: "بهداشتی و آرایشی", href: "/market" },
  { icon: Home, title: "کالای خانه", href: "/market" },
  { icon: Popcorn, title: "تنقلات", href: "/market" },
];
