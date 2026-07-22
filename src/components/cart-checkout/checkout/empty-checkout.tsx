import Link from "next/link";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeftIcon, LogInIcon, ShoppingBagIcon } from "lucide-react";

export default function EmptyCheckout({
  user,
}: {
  user?: {
    id?: string | undefined;
    name?: string | null;
    phone: string;
  };
}) {
  if (!user)
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

  return (
    <Link className="contents" href="/market">
      <Card className="col-span-9 sticky lg:top-28 bottom-4 lg:col-span-3 h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-1">
            <ShoppingBagIcon />
            سبد خرید شما خالی است
          </CardTitle>
          <CardAction>
            <ChevronLeftIcon />
          </CardAction>
          <CardDescription>
            برای مشاهده و خرید محصولات به بازار مراجعه کنید.
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
