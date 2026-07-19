"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { commaThree } from "@/utils/comma-three";
import { useCartStore } from "@/store/cart-store";
import { ProductProps } from "@/types/products-t";

export default function AddToCartButtno({
  quantity,
  item,
}: {
  quantity: number;
  item: ProductProps;
}) {
  const { addItem, removeItem } = useCartStore();
  function handleAddItem(e: React.MouseEvent<HTMLButtonElement>) {
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
      image: item.image,
    });
  }

  function handleRemove(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();

    removeItem(item._id);
  }
  return (
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
  );
}
