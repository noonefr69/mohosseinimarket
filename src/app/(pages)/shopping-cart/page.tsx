import CheckoutCardAction from "@/components/cart-checkout/checkout/checkout-card-action";
import TabContainer from "@/components/cart-checkout/tabs/container";

export default function ShoppingCart() {
  return (
    <div className="grid grid-cols-9 gap-4 relative">
      <TabContainer />
      <CheckoutCardAction />
    </div>
  );
}
