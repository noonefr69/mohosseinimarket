import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCartTotal } from "@/hooks/use-cart-total";
import { useCartStore } from "@/store/cart-store";
import { commaThree } from "@/utils/comma-three";

export default function CheckOutAction() {
  const items = useCartStore((state) => state.items);
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
        <Button
          variant={"default"}
          className="w-full text-lg font-bold py-6"
          size={"lg"}
        >
          خرید
        </Button>
      </CardContent>
    </Card>
  );
}
