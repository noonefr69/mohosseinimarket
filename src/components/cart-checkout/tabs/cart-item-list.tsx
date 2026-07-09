"use client";

import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cart-store";
import React from "react";
import CartItemRow from "./cart-item-row";

export default function CartItemList() {
  const items = useCartStore((state) => state.items);

  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={item._id}>
          <CartItemRow item={item} />
          {index < items.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </>
  );
}
