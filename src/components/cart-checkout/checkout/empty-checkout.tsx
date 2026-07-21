import Link from "next/link";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeftIcon, LogInIcon } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

export default function EmptyCheckout() {
  const { items } = useCartStore();
  if (items.length === 0) return null;
  return (
    <Link className="contents" href={`/sign-in`}>
      <Card className="col-span-9 sticky lg:top-28 bottom-4 lg:col-span-3 h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-1">
            <LogInIcon />
            ورود به حساب کاربری
          </CardTitle>
          <CardAction>
            <ChevronLeftIcon />
          </CardAction>
          <CardDescription>
            برای مشاهده محصولاتی که پیش‌تر به سبد خرید خود اضافه کرده‌اید وارد
            شوید.
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
