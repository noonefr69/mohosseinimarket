"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartTotal } from "@/hooks/use-cart-total";
import { commaThree } from "@/utils/comma-three";
import CheckoutButton from "./checkout-button";

export default function CheckOutAction() {
  const { totalPrice, totalQuantity } = useCartTotal();

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
        <CheckoutButton />
      </CardContent>
    </Card>
  );
}
