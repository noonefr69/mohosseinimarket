"use client";

import CheckOutAction from "./checkout-action";
import EmptyCheckout from "./empty-checkout";
import { useCartStore } from "@/store/cart-store";

export default function CheckoutCardAction({
  user,
}: {
  user?: {
    id?: string | undefined;
    name?: string | null;
    phone: string;
  };
}) {
  const items = useCartStore((state) => state.items);
  return items.length === 0 ? (
    <EmptyCheckout user={user} />
  ) : (
    <CheckOutAction />
  );
}
