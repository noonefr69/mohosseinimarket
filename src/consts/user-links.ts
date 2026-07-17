import {
  HeartIcon,
  MapIcon,
  PackageIcon,
  HomeIcon,
  UserIcon,
} from "lucide-react";

export const user_links = [
  { label: "سفارش‌ها", icon: PackageIcon, href: "/profile/orders" },
  { label: "لیست‌‌ها", icon: HeartIcon, href: "/profile/wishlists" },
  { label: "آدرس‌ها", icon: MapIcon, href: "/profile/addresses" },
];

export const profile_links = [
  {
    label: "خلاصه فعالیت",
    icon: HomeIcon,
    href: "/profile",
  },
  {
    label: "سفارش‌ها",
    icon: PackageIcon,
    href: "/profile/orders",
  },
  {
    label: "لیست‌‌ها",
    icon: HeartIcon,
    href: "/profile/wishlists",
  },
  {
    label: "آدرس‌ها",
    icon: MapIcon,
    href: "/profile/addresses",
  },
  {
    label: "اطلاعات شخصی",
    icon: UserIcon,
    href: "/profile/personal-info",
  },
];
