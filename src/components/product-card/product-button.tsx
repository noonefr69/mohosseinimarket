"use client";

import { useCartStore } from "@/store/cart-store";
import { Button } from "../ui/button";
import { ProductProps } from "@/types/products-t";
import { MinusIcon, PlusIcon } from "lucide-react";
import { commaThree } from "@/utils/comma-three";

export default function ProductButton({ item }: { item: ProductProps }) {
  const { addItem, items, removeItem } = useCartStore();

  function handleAddItem(e: any) {
    e.stopPropagation();
    e.preventDefault();

    addItem({
      _id: item._id,
      name: item.name,
      price: item.price,
      brand: item.brand,
      description: item.description,
      unit: item.unit,
      weight_or_volume: item.weight_or_volume,
    });
  }

  function handleRemove(e: any) {
    e.stopPropagation();
    e.preventDefault();

    removeItem(item._id);
  }

  const cartItem = items.find((cartItem) => cartItem._id === item._id);
  const quantity = cartItem?.quantity || 0;

  return (
    <>
      {items.some((cartItem) => cartItem._id === item._id) ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          className="whitespace-normal wrap-break-word cursor-default"
        >
          <div className="flex items-center py-2 gap-2 ring rounded overflow-hidden justify-between">
            <Button
              onClick={handleAddItem}
              className="hover:opacity-100 lg:opacity-60 text-accent-foreground rounded ring-0 border-0 outline-0 bg-transparent"
              variant="link"
              size="icon"
            >
              <PlusIcon />
            </Button>
            <span className="text-lg">{commaThree(quantity)} </span>
            <Button
              onClick={handleRemove}
              className="hover:opacity-100 lg:opacity-60 text-accent-foreground rounded ring-0 border-0 outline-0 bg-transparent"
              variant="link"
              size="icon"
            >
              <MinusIcon />
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={handleAddItem}
          className="py-6 whitespace-normal wrap-break-word"
          variant="ghost"
        >
          اضافه به سبد
        </Button>
      )}
    </>
  );
}
