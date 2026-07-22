// import { getOrders } from "@/actions/order/get-orders";
import { auth } from "@/auth";
import CheckoutCardAction from "@/components/cart-checkout/checkout/checkout-card-action";
import TabContainer from "@/components/cart-checkout/tabs/container";

export default async function ShoppingCart() {
  const session = await auth();
  // const orders = await getOrders();

  return (
    <div className="grid grid-cols-9 gap-4 relative">
      <TabContainer />
      <CheckoutCardAction user={session?.user} />
    </div>
  );
}
