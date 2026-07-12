import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { OrderProps } from "../container";
import { OrderHeader } from "./order-header";
import { OrderItems } from "./order-items";
import { OrderSummary } from "./order-summary";
import { DeleteOrderAlert } from "./delete-order-alert";

interface OrderCardProps {
  order: OrderProps;
  isDeleting: boolean;
  onDelete: () => void;
}

export function OrderCard({ order, isDeleting, onDelete }: OrderCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <OrderHeader order={order} />

          {order.status === "pending" && (
            <DeleteOrderAlert
              orderId={order._id}
              isDeleting={isDeleting}
              onDelete={onDelete}
            />
          )}
        </div>
      </CardHeader>

      <CardContent>
        <OrderItems items={order.items} />
        <OrderSummary
          totalPrice={order.totalPrice}
          shippingAddress={order.shippingAddress}
          phone={order.phone}
        />
      </CardContent>
    </Card>
  );
}
