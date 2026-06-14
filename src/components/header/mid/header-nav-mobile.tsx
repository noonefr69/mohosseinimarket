"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon, ShoppingCartIcon, XIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { pages_links, social_media } from "@/consts/links";
import ButtonLink from "@/components/button-link";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import datas from "@/db.json";
import Image from "next/image";
import HeaderInputs from "./header-inputs";
import { categories } from "@/consts/categories";

export default function HeaderNavMobile() {
  const pathName = usePathname();

  return (
    <div className="md:hidden flex items-center">
      <DropdownMenu dir="ltr">
        <DropdownMenuTrigger asChild>
          <Button className="relative" variant="ghost" size={"icon-lg"}>
            <ShoppingCartIcon className="size-5" />
            <div className="absolute right-0 top-0 bg-red-500 text-white rounded-full aspect-square w-4 text-xs flex items-center justify-center">
              0
            </div>
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
            <MenuIcon className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          className="overflow-y-scroll md:overflow-y-auto"
          showCloseButton={false}
          side="left"
        >
          <SheetHeader className="p-4 m-0">
            <SheetTitle className="flex items-center justify-between">
              <span className="text-2xl font-semibold">منو</span>
              <SheetClose asChild>
                <Button variant={"ghost"} size={"icon"}>
                  <XIcon />
                </Button>
              </SheetClose>
            </SheetTitle>
          </SheetHeader>
          <div className="p-4">
            <div className="flex flex-col items-start">
              {pages_links.map((item, i) => (
                <ButtonLink
                  key={i}
                  text={item.title}
                  href={item.href}
                  variant={"link"}
                  linkClassName={pathName === item.href ? "text-primary" : ""}
                  buttonClassName="px-0 text-right w-full justify-start text-lg text-muted-foreground active:text-primary hover:text-primary hover:no-underline"
                />
              ))}
            </div>

            <Separator className="my-7" />

            <ul className="flex flex-col items-start">
              {categories.map((item) => (
                <li key={item._id.$oid}>
                  <ButtonLink
                    text={item.name_fa}
                    href={`/market/${item.slug}`}
                    variant={"link"}
                    linkClassName={
                      pathName === `/market/${item.slug}` ? "text-primary" : ""
                    }
                    buttonClassName="px-0 text-right w-full justify-start text-lg text-muted-foreground active:text-primary hover:text-primary hover:no-underline"
                  />
                </li>
              ))}
            </ul>

            <Separator className="my-7" />

            <HeaderInputs groupClassName="md:hidden flex w-full" />
          </div>
          <SheetFooter>
            <div className="flex items-center gap-2 brightness-50">
              {social_media.map((item, i) => (
                <ButtonLink
                  href={item.href}
                  buttonClassName="invert opacity-80 hover:opacity-100" // makes it white
                  text={
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                  }
                  key={i}
                  variant={"link"}
                />
              ))}
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
