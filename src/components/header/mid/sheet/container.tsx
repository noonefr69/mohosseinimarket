"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { user_links } from "@/consts/user-links";
import React from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, User2Icon, XIcon } from "lucide-react";
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
import { GetCategoryResult } from "@/types/category-t";
import PagesLinks from "./pages-links";
import SignOutDropdown from "../user-dropdown/sign-out-dropdown";
import Categories from "./categories";
import { User as NextAuthUser } from "next-auth";

export default function SheetContainer({
  categories,
  user,
}: {
  categories: GetCategoryResult;
  user: ({ phone: string } & NextAuthUser) | undefined;
}) {
  return (
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
              <Button variant={"outline"} size={"icon"}>
                <XIcon />
              </Button>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <div className="p-4">
          <PagesLinks />

          {categories.success ? (
            <>
              <Separator className="my-7" />
              <Categories categories={categories.data} />
            </>
          ) : (
            <div className="text-muted-foreground">
              <Separator className="my-7" />

              {categories.error}
            </div>
          )}

          <Separator className="my-7" />

          {user ? (
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="mb-1 p-0 cursor-pointer text-muted-foreground text-lg font-semibold">
                  <span className="flex items-center gap-2">
                    <User2Icon /> حساب کاربری شما
                  </span>
                </AccordionTrigger>
                <AccordionContent className="no-underline">
                  <div className="flex flex-col no-underline gap-1">
                    {user_links.map((link) => (
                      <React.Fragment key={link.href}>
                        <ButtonLink
                          href={link.href}
                          text={
                            <div className="flex items-center  gap-2 w-full text-lg">
                              {<link.icon className="size-7" />} {link.label}
                            </div>
                          }
                          buttonClassName="py-6 px-0 no-underline"
                          linkClassName="no-underline"
                          variant={"ghost"}
                        />
                      </React.Fragment>
                    ))}{" "}
                    <SignOutDropdown />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <ButtonLink
              href="/sign-in"
              text={"ثبت نام | ورود"}
              variant={"default"}
              buttonClassName="w-full py-6 text-lg"
            />
          )}
        </div>
        <SheetFooter className="flex-row justify-between">
          <ModeToggle />
          <div className="flex items-center brightness-50">
            {social_media.map((item, i) => (
              <ButtonLink
                href={item.href}
                buttonClassName="opacity-50 hover:opacity-100"
                text={
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                    className="dark:invert"
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
  );
}
