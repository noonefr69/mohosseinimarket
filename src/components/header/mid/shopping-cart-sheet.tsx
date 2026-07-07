"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../../ui/button";
import { ShoppingCartIcon, XIcon } from "lucide-react";
import { ModeToggle } from "../../toggle-mode";
import ButtonLink from "../../button-link";
import ShoppingCartContent from "./shopping-cart-content";
import { useCartStore } from "@/store/cart-srote";
import { commaThree } from "@/utils/comma-three";

export default function ShoppingCartSheet() {
  const items = useCartStore((state) => state.items);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative" variant={"ghost"} size={"icon-lg"}>
          <ShoppingCartIcon />
          <div className="absolute right-0 top-0 bg-red-500 text-white rounded-full aspect-square w-4 text-xs flex items-center justify-center">
            {commaThree(
              items.reduce((prev, next) => {
                return prev + next.quantity;
              }, 0),
            )}
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" showCloseButton={false}>
        <SheetHeader className="flex items-center flex-row gap-2">
          <SheetClose asChild>
            <Button size={"icon"} variant={"ghost"}>
              <XIcon />
            </Button>
          </SheetClose>
          <SheetTitle className="text-xl font-bold flex items-center gap-2">
            سبد خرید
            {items.reduce((prev, next) => {
              return prev + next.quantity;
            }, 0) > 0 ? (
              <span className="bg-red-500 text-white rounded-full aspect-square w-6 text-sm flex items-center justify-center">
                {commaThree(
                  items.reduce((prev, next) => {
                    return prev + next.quantity;
                  }, 0),
                )}
              </span>
            ) : null}
          </SheetTitle>
        </SheetHeader>
        <ShoppingCartContent />
        <SheetFooter className="flex-row justify-between">
          <ModeToggle />
          <ButtonLink
            href="/shoppin-cart"
            text={"مشاهده تمامی اطاعات سبد خرید و ادامه خرید"}
            variant={"outline"}
            buttonClassName="flex-1"
          />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
