import { useCartStore } from "@/store/cart-store";
import { useMemo } from "react";

export function useCartTotal() {
  const items = useCartStore((state) => state.items);

  const totals = useMemo(() => {
    return items.reduce(
      (acc, item) => ({
        totalQuantity: acc.totalQuantity + item.quantity,
        totalPrice: acc.totalPrice + item.price * item.quantity,
      }),
      { totalQuantity: 0, totalPrice: 0 },
    );
  }, [items]);

  return totals;
}
