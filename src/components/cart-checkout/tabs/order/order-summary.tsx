import { Separator } from "@/components/ui/separator";
import { toPersianDigits } from "@/utils/to-persian-digits";
import { commaThree } from "@/utils/comma-three";

interface OrderSummaryProps {
  totalPrice: number;
  shippingAddress: string;
  phone: string;
}

export function OrderSummary({
  totalPrice,
  shippingAddress,
  phone,
}: OrderSummaryProps) {
  return (
    <>
      <Separator className="my-2" />
      <div className="flex justify-between font-semibold">
        <h1 className="text-lg">مجموع</h1>
        <span className="text-lg">
          {toPersianDigits(commaThree(totalPrice))} تومان
        </span>
      </div>
      <div className="text-sm text-muted-foreground">
        <p>آدرس: {shippingAddress}</p>
        <p>تلفن: {toPersianDigits(phone)}</p>
      </div>
    </>
  );
}
