"use client";

import { useDeleteOrder } from "@/hooks/user-delete-order";
import { OrderProps } from "../container";
import { OrderCard } from "./order-card";

interface OrderRowProps {
  orders: OrderProps[];
}

export default function OrderRow({ orders }: OrderRowProps) {
  const { isDeleting, handleDelete } = useDeleteOrder();

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <OrderCard
          key={order._id}
          order={order}
          isDeleting={isDeleting(order._id)}
          onDelete={() => handleDelete(order._id)}
        />
      ))}
    </div>
  );
}
