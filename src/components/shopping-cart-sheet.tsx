"use client";

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
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";

export default function ShoppingCartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative" variant={"ghost"} size={"icon-lg"}>
          <ShoppingCartIcon />
          <div className="absolute right-0 top-0 bg-red-500 text-white rounded-full aspect-square w-4 text-xs flex items-center justify-center">
            0
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>This action cannot be undone.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
