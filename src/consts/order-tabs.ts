import {
  CircleArrowLeftIcon,
  CircleCheckIcon,
  CircleEllipsisIcon,
} from "lucide-react";

export const orders_tabs = [
  { href: "pending", label: "جاری", icon: CircleEllipsisIcon },
  { href: "verified", label: "تحویل", icon: CircleCheckIcon },
  {
    href: "rejected",
    label: "مرجوع",
    icon: CircleArrowLeftIcon,
  },
];
