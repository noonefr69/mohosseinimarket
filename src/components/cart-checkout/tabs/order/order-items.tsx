import { toPersianDigits } from "@/utils/to-persian-digits";
import { commaThree } from "@/utils/comma-three";
import { OrderProps } from "../container";

interface OrderItemsProps {
  items: OrderProps["items"];
}

export function OrderItems({ items }: OrderItemsProps) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between text-sm">
          <span>
            {item.name} ×{toPersianDigits(item.quantity)}
            {item.unit && ` ${item.unit}`}
          </span>
          <span>
            {toPersianDigits(commaThree(item.price * item.quantity))} تومان
          </span>
        </div>
      ))}
    </div>
  );
}
