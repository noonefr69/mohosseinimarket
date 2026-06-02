"use client";

import bale_icon from "../../../public/bale.svg";
import telegram_icon from "../../../public/telegram.svg";
import instagram_icon from "../../../public/Instagram.svg";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import {
  Menu,
  MenuIcon,
  PowerOffIcon,
  SearchCodeIcon,
  SearchIcon,
  ShoppingBag,
  ShoppingCartIcon,
  User2,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";

export const lil_links = [
  { title: "تخفیف‌های امروز", href: "/#offers" },
  { title: "پیگیری سفارش", href: "/orders" },
  { title: "راهنمایی", href: "/about-us" },
];

export const social_media = [
  { title: "bale", icon: bale_icon, href: "/" },
  { title: "telegram", icon: telegram_icon, href: "/" },
  { title: "instagram", icon: instagram_icon, href: "/" },
];

export const pages_links = [
  { title: "خانه", href: "/" },
  { title: "فروشگاه", href: "/market" },
  { title: "درباره ما", href: "/about-us" },
  { title: "ارتباط با ما", href: "/contact-us" },
];

const fontSans = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-sans",
});

export default function HeaderUi() {
  return (
    <header className="fixed top-0 left-0 right-0">
      <div className="bg-chart-4 md:block hidden">
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

      <div className="bg-white dark:bg-gray-800 p-3">
        <div className="max-w-7xl mx-auto gap-1 flex items-center justify-between">
          <Link
            className={`font-semibold text-nowrap text-2xl ${fontSans.className}`}
            href={`/`}
          >
            مبلغ حسینی
          </Link>
          <InputGroup dir="ltr" className="w-64 md:flex hidden">
            <InputGroupInput className="" dir="rtl" placeholder="جست و جو..." />
            <InputGroupAddon align={"inline-end"}>
              <Button size={"icon-sm"} variant={"ghost"}>
                <SearchIcon />
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <ul className="hidden md:flex items-center">
            {pages_links.map((link, i) => (
              <li key={i}>
                <Button className="" asChild variant={"ghost"} size={"lg"}>
                  <Link href={link.href}>{link.title}</Link>
                </Button>
              </li>
            ))}
            <Separator orientation="vertical" className="mx-2 lg:mx-4" />
            <li>
              <Button asChild variant={"default"} size={"default"}>
                <Link href={`/sign-in`}>
                  {/* <User2 /> */}
                  ثبت نام | ورود
                </Link>
              </Button>
            </li>
            <li>
              {/* <Sheet>
                <SheetTrigger asChild>
                  <Button variant={"ghost"} size={"icon"}>
                    <ShoppingCartIcon />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet> */}
            </li>
          </ul>
          <div className="md:hidden flex items-center">
            <DropdownMenu dir="ltr">
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size={"icon-lg"}>
                  <ShoppingCartIcon className="size-5"/>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 m-2">
                <DropdownMenuGroup dir="rtl">
                  <DropdownMenuLabel>سبد خرید</DropdownMenuLabel>
                  <DropdownMenuItem>خالی هست</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"ghost"} size={"icon-lg"}>
                  <MenuIcon className="size-5"/>
                </Button>
              </SheetTrigger>
              <SheetContent showCloseButton={false} side="left">
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
