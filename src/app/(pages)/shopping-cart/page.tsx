import { getOrders } from "@/actions/order/get-orders";
import { auth } from "@/auth";
import CheckoutCardAction from "@/components/cart-checkout/checkout/checkout-card-action";
import TabContainer from "@/components/cart-checkout/tabs/container";

export default async function ShoppingCart() {
  const orders = await getOrders();
  if (!orders.success) {
    return <div>{orders.error}</div>;
  }

  const session = await auth();

  return (
    <div className="grid grid-cols-9 gap-4 relative">
      <TabContainer orders={orders.data || []} />
      <CheckoutCardAction session={session?.user} />
    </div>
  );
}
