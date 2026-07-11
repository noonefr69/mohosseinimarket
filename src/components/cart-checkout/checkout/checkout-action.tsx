"use client";

import { CheckoutAction } from "@/actions/order/checkout_action";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useCartTotal } from "@/hooks/use-cart-total";
import { useCartStore } from "@/store/cart-store";
import { commaThree } from "@/utils/comma-three";
import { useTransition } from "react";
import { toast } from "sonner";

export default function CheckOutAction() {
  const { totalPrice, totalQuantity } = useCartTotal();
  const { items, clearCart } = useCartStore();
  const [isPending, startTransition] = useTransition();

  function handleCheckoutAction() {
    const cartItems = items.map((item) => ({
      _id: item._id,
      quantity: item.quantity,
    }));

    startTransition(async () => {
      const result = await CheckoutAction(cartItems);
      if (!result.success) {
        toast.error(result.error);
        return;
      }

      clearCart();
      toast.success("سفارش شما با موفقیت ثبت شد!");
      window.location.href = "/profile";
    });
  }

  return (
    <Card className="col-span-9 sticky lg:top-28 bottom-4 lg:col-span-3 h-fit">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>تعداد کل کالاها</CardTitle>
          <span className="text-sm opacity-90">
            {commaThree(totalQuantity)} عدد
          </span>
        </div>
        <div className="flex items-center justify-between">
          <CardTitle>قیمت کل</CardTitle>
          <span className="text-sm opacity-90">
            {commaThree(totalPrice)} تومان
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <Button
          variant={"default"}
          className="w-full text-lg font-bold py-6"
          size={"lg"}
          disabled={isPending || items.length === 0}
          onClick={handleCheckoutAction}
        >
          {isPending ? <Spinner /> : "خرید"}
        </Button>
      </CardContent>
    </Card>
  );
}
