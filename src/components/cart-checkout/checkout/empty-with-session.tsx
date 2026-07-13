import Link from "next/link";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeftIcon, ShoppingCart } from "lucide-react";
import ButtonLink from "@/components/button-link";

export default function EmptyWittSession() {
  return (
    <Link className="contents" href={`/market`}>
      <Card className="col-span-9 sticky lg:top-28 bottom-4 lg:col-span-3 h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-1">
            <ShoppingCart />
            جزئیات سبد خرید
          </CardTitle>
          <CardAction>
            <ChevronLeftIcon />
          </CardAction>
          <CardDescription>
            سبد خرید شما خالی است. شما میتوانید به
            <ButtonLink
              href="/market"
              text={"سوپرمارکت"}
              variant={"link"}
              buttonClassName="px-1"
            />
            مراجعه و کالا هارا به سبد خرید خود اضافه کنید.
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
