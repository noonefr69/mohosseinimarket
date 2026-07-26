import { getOrders } from "@/actions/order/get-orders";
import ButtonLink from "@/components/button-link";
import OrderCard from "@/components/cart-checkout/tabs/order/order-card";
import EmptyPlace from "@/components/empty-place";
import { ErrorAll } from "@/components/Error-all";
import { Card } from "@/components/ui/card";
import { ArchiveXIcon } from "lucide-react";

export default async function Orders() {
  const result = await getOrders();
  if (!result.success) return <ErrorAll error_message={result.error} />;

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {result.data.length === 0 ? (
        <Card className="col-span-2 justify-center items-center w-full">
          <EmptyPlace
            icon={<ArchiveXIcon className="size-8" />}
            head="سفارشی برای مشاهده وجود ندارد"
            desc="لطفاً وارد فروشگاه بشید، محصولات مورد نظرتون رو انتخاب کرده و داخل سبد خرید قرار بدید. در انتها هم برای تکمیل فرایند، ثبت سفارش رو انجام بدید"
            buttons={
              <ButtonLink
                href="/market"
                text={"فروشگاه"}
                variant={"secondary"}
              />
            }
          />
        </Card>
      ) : (
        result.data.map((order) => <OrderCard order={order} key={order._id} />)
      )}
    </div>
  );
}
