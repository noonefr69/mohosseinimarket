"use client";

import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { social_media } from "@/consts/links";
import ButtonLink from "@/components/button-link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { ModeToggle } from "@/components/toggle-mode";
import { CategoryProps } from "@/types/products-t";
import ShoppingCartDropdown from "./shopping-cart-dropdown";
import PagesLinks from "./sheet/pages-links";
import Categories from "./sheet/categories";

export default function HeaderNavMobile({
  categories,
}: {
  categories: CategoryProps[];
}) {
  return (
    <div className="md:hidden flex items-center">
      <ShoppingCartDropdown />
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
            <PagesLinks />
            <Separator className="my-7" />
            <Categories categories={categories} />

            <Separator className="my-7" />
          </div>
          <SheetFooter className="flex-row justify-between">
            <ModeToggle />
            <div className="flex items-center brightness-50">
              {social_media.map((item, i) => (
                <ButtonLink
                  href={item.href}
                  buttonClassName="opacity-50 hover:opacity-100" // makes it white
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
