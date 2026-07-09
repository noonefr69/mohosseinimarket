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
import { commaThree } from "@/utils/comma-three";
import { useCartTotal } from "@/hooks/use-cart-total";

export default function ShoppingCartSheet() {
  const { totalQuantity } = useCartTotal();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative" variant={"ghost"} size={"icon-lg"}>
          <ShoppingCartIcon />
          <div className="absolute right-0 top-0 bg-red-500 text-white rounded-full aspect-square w-4 text-xs flex items-center justify-center">
            {commaThree(totalQuantity)}
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
            {totalQuantity > 0 ? (
              <span className="bg-red-500 text-white rounded-full aspect-square w-6 text-sm flex items-center justify-center">
                {commaThree(totalQuantity)}
              </span>
            ) : null}
          </SheetTitle>
        </SheetHeader>
        <ShoppingCartContent />
        <SheetFooter className="flex-row justify-between">
          <ModeToggle />
          <ButtonLink
            href="/shopping-cart"
            text={"مشاهده تمامی اطاعات سبد خرید و ادامه خرید"}
            variant={"outline"}
            buttonClassName="flex-1"
          />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
