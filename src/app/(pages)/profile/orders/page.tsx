import { getOrders } from "@/actions/order/get-orders";
import OrderCard from "@/components/cart-checkout/tabs/order/order-card";
import { ErrorAll } from "@/components/Error-all";

export default async function Orders() {
  const result = await getOrders();
  if (!result.success) return <ErrorAll error_message={result.error} />;
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {result.data.map((order) => (
        <OrderCard order={order} key={order._id} />
      ))}
    </div>
  );
}
