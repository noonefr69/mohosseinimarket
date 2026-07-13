"use client";

import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import { commaThree } from "@/utils/comma-three";
import { Button } from "../../ui/button";
import { PackageOpenIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Separator } from "../../ui/separator";

export default function ShoppingCartContent() {
  const items = useCartStore((state) => state.items);
  const removeWholeItem = useCartStore((state) => state.removeWholeItem);

  console.log(items);
  if (items.length === 0)
    return (
      <div className="p-4 h-full flex flex-col gap-6 opacity-70 items-center justify-center">
        <h1 className="font-bold text-lg">سبد خریدr شما خالی است</h1>
        <PackageOpenIcon className="size-24" />
      </div>
    );

  return (
    <ul className="p-2 flex flex-col gap-2 overflow-auto">
      {items.map((item, index) => (
        <React.Fragment key={item._id}>
          <li className="flex justify-between rounded h-20 gap-2 hover:bg-accent/70 duration-150 p-2">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="relative rounded bg-accent h-16 w-16 shrink-0">
                <Image
                  className={`${!item.image || item.image.trim() === "" ? "scale-75" : ""} rounded`}
                  src={
                    !item.image || item.image.trim() === ""
                      ? "/placeholder.svg"
                      : item.image
                  }
                  alt={item.name}
                  fill
                />
              </div>
              <div className="flex flex-col h-full justify-between min-w-0 flex-1">
                <h1 className="font-semibold text-lg truncate">{item.name}</h1>
                <h6 className="text-muted-foreground whitespace-nowrap">
                  <span className="font-bold">
                    {commaThree(item.quantity)}x
                  </span>{" "}
                  {commaThree(item.price)}
                </h6>
              </div>
            </div>

            <div className="flex flex-col items-end justify-between shrink-0">
              <p className="font-semibold whitespace-nowrap text-sm sm:text-base">
                {commaThree(item.price * item.quantity)} تومان
              </p>
              <Button
                onClick={() => removeWholeItem(item._id)}
                variant={"destructive"}
                size={"icon"}
              >
                <Trash2Icon />
              </Button>
            </div>
          </li>
          {index < items.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </ul>
  );
}
