import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { commaThree } from "@/utils/comma-three";
import { ChevronLeftIcon } from "lucide-react";
import ButtonLink from "@/components/button-link";
import { orders_tabs } from "@/consts/order-tabs";
import { getOrders } from "@/actions/order/get-orders";
import { ErrorAll } from "../Error-all";

export default async function OrderCardInProfile() {
  const orders = await getOrders();

  if (!orders.success) {
    return <ErrorAll error_message={orders.error} />;
  }

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="sm:text-lg lg:text-xl font-semibold">
          سفارش‌های من
        </CardTitle>
        <CardAction>
          <ButtonLink
            href="/profile/orders"
            text={
              <>
                مشاهده همه <ChevronLeftIcon />
              </>
            }
            variant={"link"}
          />
        </CardAction>
      </CardHeader>
      <CardContent className="grid grid-cols-3 divide-x-2">
        {orders_tabs.map((tab, i) => {
          const number = orders.data.filter((order) => {
            return order.status === tab.href;
          }).length;
          return (
            <div key={i}>
              <ButtonLink
                href={`/profile/orders/?tabActive=${tab.href}`}
                text={
                  <div className="flex relative sm:p-0 py-2 px-2 md:flex-row flex-col text-center md:text-start items-center gap-2">
                    {<tab.icon className="size-10" />}
                    <div>
                      <h5 className="font-semibold flex items-center gap-1">
                        <span className="sm:relative sm:bg-transparent sm:w-auto sm:h-auto absolute top-0 left-0 bg-primary rounded-full w-5 h-5">
                          {commaThree(number)}
                        </span>
                        <span className="sm:block hidden">سفارش</span>
                      </h5>
                      <h6 className="text-muted-foreground text-sm">
                        {tab.label}
                      </h6>
                    </div>
                  </div>
                }
                buttonClassName="h-fit w-full sm:py-6 p-0"
                variant={"ghost"}
              />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
