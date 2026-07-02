"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sorted_values } from "@/consts/sort";
import { Button } from "../../ui/button";
import { ArrowDownWideNarrowIcon, XIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import ButtonLink from "@/components/button-link";

export default function SortSheet() {
  const searchParams = useSearchParams();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"}>
          <ArrowDownWideNarrowIcon />
          مرتب سازی
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" showCloseButton={false}>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <SheetClose asChild>
              <Button className="" size={"icon-xs"} variant={"outline"}>
                <XIcon />{" "}
              </Button>
            </SheetClose>
            <span className="font-bold">مرتب سازی بر اساس</span>
          </SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col">
          {sorted_values.map((s, index) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set("sorted", s.name_en);

            return (
              <li key={s._id}>
                <ButtonLink
                  href={`?sorted=${s.name_en}`}
                  text={s.name_fa}
                  variant="ghost"
                  buttonClassName="w-full justify-start py-6"
                  linkClassName="w-full text-right font-semibold text-lg"
                />
                {index !== sorted_values.length - 1 && (
                  <div className="mx-4 border-b border-border " />
                )}
              </li>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
