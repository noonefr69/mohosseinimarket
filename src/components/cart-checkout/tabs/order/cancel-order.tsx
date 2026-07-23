"use client";

import { CancelOrderAction } from "@/actions/order/cancel-order-action";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useTransition } from "react";
import { toast } from "sonner";

export function CancelOrderButton({ orderId }: { orderId: string }) {
  const [isPending, startTransition] = useTransition();

  function handleCancelOrder() {
    startTransition(async () => {
      try {
        const result = await CancelOrderAction(orderId);

        if (!result.success) {
          toast.error(result.error);
          return;
        }

        toast.success(result.data);
      } catch (err) {
        console.error(err);
        toast.error(`مشکلی پیش آمد. لطفا از وصل بودن اینترنت خود مطمعا شوید`);
      }
    });
  }

  return (
    <Button
      disabled={isPending}
      onClick={handleCancelOrder}
      variant={"destructive"}
      size="sm"
    >
      {isPending ? <Spinner /> : "لغو سفارش"}
    </Button>
  );
}
