"use client";

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
import { MenuIcon, ShoppingCartIcon } from "lucide-react";
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

export default function HeaderNavMobile() {
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
        <SheetContent showCloseButton={false} side="left">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>This action cannot be undone.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
