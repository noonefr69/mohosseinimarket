import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import bale_icon from "../../../public/bale.svg";
import telegram_icon from "../../../public/telegram.svg";
import instagram_icon from "../../../public/Instagram.svg";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export const lil_links = [
  { title: "تخفیف‌های امروز ", href: "/#offers" },
  { title: "پیگیری سفارش", href: "/orders" },
  { title: "راهنمایی", href: "/about-us" },
];

export const social_media = [
  { title: "bale", icon: bale_icon, href: "/" },
  { title: "telegram", icon: telegram_icon, href: "/" },
  { title: "instagram", icon: instagram_icon, href: "/" },
];

export default function HeaderUi() {
  return (
    <header className="fixed top-0 left-0 right-0">
      <div className="bg-chart-3 md:block hidden">
        <div className="max-w-7xl mx-auto">
          <div className="py-1 flex items-center justify-between">
            <ul className="flex items-center">
              {lil_links.map((link, i) => (
                <li key={i}>
                  <Button asChild variant={"link"} size={"sm"}>
                    <Link
                      className="text-white/80 hover:text-white"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
            <ul className="flex items-center">
              {social_media.map((link, i) => (
                <li key={i}>
                  <Button
                    className="brightness-0 invert opacity-80 hover:opacity-100" // makes it white
                    asChild
                    variant={"link"}
                    size={"sm"}
                  >
                    <Link href={link.href}>
                      <Image
                        src={link.icon}
                        alt={link.title}
                        width={14}
                        height={14}
                      />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
