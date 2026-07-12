import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { statusMap } from "@/consts/order-map";
import { toPersianDigits } from "@/utils/to-persian-digits";
import { OrderProps } from "../container";

interface OrderHeaderProps {
  order: Pick<OrderProps, "_id" | "status" | "createdAt">;
}

export function OrderHeader({ order }: OrderHeaderProps) {
  const statusInfo = statusMap[order.status] || {
    label: order.status,
    variant: "default",
  };

  const shortId = toPersianDigits(order._id.slice(0, 6));
  const formattedDate = new Date(order.createdAt).toLocaleDateString("fa-IR");

  return (
    <div>
      <CardTitle className="text-2xl font-bold">
        {"سفارش "}
        {"#" + shortId}
      </CardTitle>
      <CardDescription className="flex items-center gap-1">
        وضعیت:{" "}
        <Badge
          className={`mx-1 ${order.status === "pending" ? "animate-pulse" : ""}`}
          variant={statusInfo.variant}
        >
          {statusInfo.label}
        </Badge>
        <Separator className="mx-2" orientation="vertical" />
        <span className="text-sm text-muted-foreground">{formattedDate}</span>
      </CardDescription>
    </div>
  );
}
