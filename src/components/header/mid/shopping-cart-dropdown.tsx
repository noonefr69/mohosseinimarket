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
import { ShoppingCartIcon } from "lucide-react";

export default function ShoppingCartDropdown() {
  return (
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
  );
}
