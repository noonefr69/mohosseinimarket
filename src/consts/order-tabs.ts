import {
  CircleArrowLeftIcon,
  CircleCheckIcon,
  CircleEllipsisIcon,
} from "lucide-react";

export const orders_tabs = [
  { href: "?tabActive=pending", label: "جاری", icon: CircleEllipsisIcon },
  { href: "?tabActive=sent", label: "تحویل", icon: CircleCheckIcon },
  {
    href: "?tabActive=returned",
    label: "مرجوع",
    icon: CircleArrowLeftIcon,
  },
];
