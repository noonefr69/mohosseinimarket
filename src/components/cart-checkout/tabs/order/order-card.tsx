import { OrderType } from "@/types/order-t";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { commaThree } from "@/utils/comma-three";
import { Button } from "@/components/ui/button";
import { ChevronDown, EditIcon } from "lucide-react";
import { status_config } from "@/consts/status";
import Image from "next/image";

export default function OrderCard({ order }: { order: OrderType }) {
  const status = status_config[order.status] || status_config.pending;
  const isFinalStatus =
    order.status === "verified" || order.status === "rejected";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          سفارش #{order._id.slice(0, 6)}
        </CardTitle>
        <CardDescription>
          تعداد کالاها: {commaThree(order.quantity)}
        </CardDescription>
        <CardAction>
          <Badge
            className={`${status.color} ${status.label === "در انتظار" ? "animate-pulse" : ""} `}
            variant={"outline"}
          >
            {status.label}
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="pb-4">
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant={"ghost"}>
              جزئیات
              <ChevronDown />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="">
            <div className="grid grid-cols-3 gap-2 mt-2">
              {order.items.map((item, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>
                      {commaThree(item.price)} تومان
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h1>تعداد: {commaThree(item.quantity)}</h1>
                    <span>
                      {commaThree(item.weight_or_volume)} {item.unit}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="mt-4 relative">
          <h1 className="lg:text-xl font-semibold">عکس فاکتور:</h1>
          {/*<Button
            className="absolute left-0 top-0"
            size={"icon"}
            variant={"ghost"}
          >
            <EditIcon />
          </Button>*/}
          <Image
            src={
              !order.validation_image || order.validation_image.trim() === ""
                ? "/placeholder.svg"
                : order.validation_image
            }
            alt="عکس فاکتور"
            width={1980}
            height={1080}
            className="h-200 mt-7 object-cover"
          />
        </div>
      </CardContent>
      {!isFinalStatus && (
        <CardFooter className="flex justify-end">
          <Button variant={"destructive"} size="sm">
            لغو سفارش
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
