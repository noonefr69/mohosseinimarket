"use client";

import { deleteOrder } from "@/actions/order/delete-order";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export function useDeleteOrder() {
  const [isPending, startTransition] = useTransition();
  const [deletingOrderId, setDeletingOrderId] = useState<string | null>(null);

  function handleDelete(orderId: string) {
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
  }

  const isDeleting = (orderId: string) =>
    isPending && deletingOrderId === orderId;

  return {
    isDeleting,
    handleDelete,
  };
}
