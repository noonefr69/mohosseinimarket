"use client";

import ButtonLink from "@/components/button-link";
import ShoppingCartContent from "@/components/header/mid/shopping-cart-content";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCartTotal } from "@/hooks/use-cart-total";
import { commaThree } from "@/utils/comma-three";
import { ShoppingCartIcon } from "lucide-react";

export default function ShoppingCartDropdown() {
  const { totalQuantity } = useCartTotal();

  return (
    <DropdownMenu dir="ltr">
      <DropdownMenuTrigger asChild>
        <Button className="relative" variant="ghost" size={"icon-lg"}>
          <ShoppingCartIcon className="size-5" />
          <div className="absolute right-0 top-0 bg-red-500 text-white rounded-full aspect-square w-4 text-xs flex items-center justify-center">
            {commaThree(totalQuantity)}{" "}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 h-64 m-2 relative">
        <DropdownMenuGroup dir="rtl">
          <DropdownMenuLabel className="flex items-center justify-between">
            سبد خرید
            <ButtonLink
              href="/shopping-cart"
              text={"مشاهده تمام اطلاعات و ادامه خرید"}
              variant={"link"}
              buttonClassName="p-0"
            />
          </DropdownMenuLabel>
          <ShoppingCartContent />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
