"use client";

import CheckOutAction from "./checkout-action";
import EmptyWithSession from "./empty-with-session";
import { useCartStore } from "@/store/cart-store";
import EmptyWithoutSession from "./empty-without-session";

export default function CheckoutCardAction({
  session,
}: {
  session?: {
    id?: string | undefined;
    name?: string | null;
    phone: string;
  };
}) {
  const items = useCartStore((state) => state.items);
  return items.length === 0 && !session ? (
    <EmptyWithoutSession />
  ) : items.length === 0 ? (
    <EmptyWithSession />
  ) : (
    <CheckOutAction />
  );
}
