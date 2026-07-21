"use client";

import { checkoutAction } from "@/actions/order/checkout-action";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useCartStore } from "@/store/cart-store";
import { useTransition } from "react";
import { toast } from "sonner";

export default function CheckoutButton() {
  const [isPending, startTransition] = useTransition();
  const { items, clearCart } = useCartStore();

  function handleOrder() {
    startTransition(async () => {
      try {
        const result = await checkoutAction(items);
        if (!result.success) {
          toast.error(result.error);
          return;
        }

        toast.success(`سفارش شما ثبت شد. لطفا منتظر تایید ادمین باشید.`);
        clearCart();
      } catch (err) {
        console.error(err);
        toast.error(`مشکلی پیش آمده است. از متصل بودن اینترنت خود مطمعا شوید `);
      }
    });
  }

  return (
    <Button
      disabled={isPending}
      onClick={handleOrder}
      variant={"default"}
      className="w-full text-lg font-bold py-6"
      size={"lg"}
    >
      {isPending ? <Spinner /> : "خرید"}
    </Button>
  );
}
