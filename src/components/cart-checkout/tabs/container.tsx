"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCartStore } from "@/store/cart-store";
import { ListIcon, PackageOpenIcon } from "lucide-react";
import CartItemList from "./cart-item-list";
import EmptyTabContent from "./empty-tab-content";
import ClearCartButton from "./clear-cart-button";

export default function TabContainer() {
  const items = useCartStore((state) => state.items);

  return (
    <Tabs defaultValue="shopping-cart" className="col-span-9 lg:col-span-6">
      <TabsList variant={"line"} className="w-full flex justify-between">
        <div className="flex items-center gap-2">
          <TabsTrigger
            className="cursor-pointer max-w-32"
            value="shopping-cart"
          >
            سبد خرید شما
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer max-w-32" value="orders">
            سفارشات
          </TabsTrigger>
        </div>
        {items.length === 0 ? null : <ClearCartButton />}
      </TabsList>
      <TabsContent className="flex flex-col gap-2" value="shopping-cart">
        {items.length === 0 ? (
          <EmptyTabContent
            title="سبد خرید شما خالی است"
            description="می‌توانید برای مشاهده محصولات بیشتر به صفحه زیر بروید:"
            icon={PackageOpenIcon}
            linkHref="/market"
            linkText="فروشگاه"
          />
        ) : (
          <CartItemList />
        )}
      </TabsContent>
      <TabsContent value="orders">
        <EmptyTabContent
          title="سفارشی ندارید"
          description="می‌توانید برای سفارش محصولات جدید به صفحه زیر بروید:"
          icon={ListIcon}
          linkHref="/market"
          linkText="فروشگاه"
        />
      </TabsContent>
    </Tabs>
  );
}
