"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../../ui/button";
import { SlidersHorizontalIcon, XIcon } from "lucide-react";
import FilterPanel from "../panel/filter-panel";
import { CategoryProps, ProductProps } from "@/types/products-t";
import ButtonLink from "@/components/button-link";

export default function FilterSheet({
  categories,
  products,
}: {
  products: ProductProps[];
  categories: CategoryProps[];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"}>
          <SlidersHorizontalIcon />
          فیلتر
        </Button>
      </SheetTrigger>
      <SheetContent showCloseButton={false} side="bottom">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SheetClose asChild>
                <Button variant={"outline"} size={"icon-xs"}>
                  <XIcon />
                </Button>
              </SheetClose>
              <span className="font-bold">فیلترها</span>
            </div>
            <ButtonLink
              href="/market"
              text={`حذف فیلترها`}
              variant={"link"}
              size={"xs"}
            />
          </SheetTitle>
        </SheetHeader>
        <div className="p-4">
          <FilterPanel categories={categories} products={products} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
