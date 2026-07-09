"use client";

import { Card } from "@/components/ui/card";
import CheckOutAction from "./checkout-action";
import EmptyCheckout from "./empty-checkout";
import { useCartStore } from "@/store/cart-store";

export default function CheckoutCardAction() {
  const items = useCartStore((state) => state.items);
  return items.length === 0 ? <EmptyCheckout /> : <CheckOutAction />;
}
