"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OrderProps } from "../container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2Icon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { deleteOrder } from "@/actions/order/delete-order";
import { Spinner } from "@/components/ui/spinner";
import { toPersianDigits } from "@/utils/to-persian-digits";
import { commaThree } from "@/utils/comma-three";
import { Separator } from "@/components/ui/separator";

const statusMap = {
  pending: { label: "در انتظار پرداخت", variant: "warning" },
  paid: { label: "پرداخت شده", variant: "success" },
  shipped: { label: "ارسال شده", variant: "default" },
  delivered: { label: "تحویل داده شده", variant: "default" },
  cancelled: { label: "لغو شده", variant: "destructive" },
} as const;

export default function OrderRow({ orders }: { orders: OrderProps[] }) {
  const [isPending, startTransition] = useTransition();
  const [deletingOrderId, setDeletingOrderId] = useState<string | null>(null);

  const handleDelete = (orderId: string) => {
    setDeletingOrderId(orderId);
    startTransition(async () => {
      const result = await deleteOrder(orderId);

      if (!result.success) {
        toast.error(result.error);
        setDeletingOrderId(null);
        return;
      }

      toast.success(result.message || "سفارش شما با موفقیت لغو شد.");
      setDeletingOrderId(null);
    });
  };

  return (
    <div className="space-y-4">
      {orders.map((order) => {
        const isDeleting = isPending && deletingOrderId === order._id;
        const statusInfo = statusMap[order.status] || {
          label: order.status,
          variant: "default",
        };

        return (
          <Card key={order._id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold">
                    {"سفارش "}
                    {"#" + toPersianDigits(order._id.slice(0, 6))}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    وضعیت:{" "}
                    <Badge
                      className={`mx-1 ${order.status === "pending" ? "animate-pulse" : ""}`}
                      variant={statusInfo.variant as any}
                    >
                      {statusInfo.label}
                    </Badge>
                    <Separator className="mx-2" orientation="vertical" />
                    <span className="text-sm text-muted-foreground">
                      {new Date(order.createdAt).toLocaleDateString("fa-IR")}
                    </span>
                  </CardDescription>
                </div>

                {/* Delete Button - Only for pending orders */}
                {order.status === "pending" && (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        disabled={isDeleting}
                        variant="destructive"
                        size="icon-sm"
                      >
                        {isDeleting ? <Spinner /> : <Trash2Icon />}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          لغو و پاک کردن سفارش
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          آیا می‌خواهید سفارش #
                          {toPersianDigits(order._id.slice(0, 6))} را لغو و پاک
                          کنید؟
                          <br />
                          این عمل غیرقابل بازگشت است.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel variant="secondary">
                          برگشت
                        </AlertDialogCancel>
                        <AlertDialogAction
                          disabled={isDeleting}
                          onClick={() => handleDelete(order._id)}
                        >
                          {isDeleting ? <Spinner /> : "تایید"}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex flex-col gap-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>
                      {item.name} ×{toPersianDigits(item.quantity)}
                      {item.unit && ` ${item.unit}`}
                    </span>
                    <span>
                      {toPersianDigits(commaThree(item.price * item.quantity))}{" "}
                      تومان
                    </span>
                  </div>
                ))}
                <Separator className="my-2" />
                <div className="flex justify-between font-semibold">
                  <h1 className="text-lg">مجموع</h1>
                  <span className="text-lg">
                    {toPersianDigits(commaThree(order.totalPrice))} تومان
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>آدرس: {order.shippingAddress}</p>
                  <p>تلفن: {toPersianDigits(order.phone)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
