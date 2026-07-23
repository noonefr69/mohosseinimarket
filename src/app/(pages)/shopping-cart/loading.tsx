import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ShoppingCartSkeleton() {
  return (
    <div className="grid grid-cols-9 gap-4 relative">
      {/* --- TabContainer Skeleton --- */}
      <div className="col-span-9 lg:col-span-6 flex flex-col gap-4">
        {/* TabsList Skeleton (Line Variant) */}
        <div className="w-full flex justify-between items-center border-b pb-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-28 rounded-md" /> {/* سبد خرید شما */}
            <Skeleton className="h-9 w-20 rounded-md" /> {/* سفارشات */}
          </div>
          <Skeleton className="h-9 w-24 rounded-md" /> {/* ClearCartButton */}
        </div>

        {/* Cart Items Skeleton (Mimics CartItemList) */}
        <div className="flex flex-col gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 border rounded-lg"
            >
              {/* Product Image */}
              <Skeleton className="h-20 w-20 rounded-md shrink-0" />

              {/* Product Details */}
              <div className="flex-1 flex flex-col gap-3">
                <Skeleton className="h-5 w-3/4" /> {/* Title */}
                <Skeleton className="h-4 w-1/2" /> {/* Subtitle/Price */}
                {/* Quantity & Price Controls */}
                <div className="flex items-center justify-between mt-2">
                  <Skeleton className="h-8 w-24 rounded-md" />{" "}
                  {/* Quantity controls */}
                  <Skeleton className="h-8 w-20 rounded-md" /> {/* Price */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- CheckoutCardAction Skeleton --- */}
      <Card className="col-span-9 sticky lg:top-28 bottom-4 lg:col-span-3 h-fit">
        <CardHeader className="flex flex-col gap-4">
          {/* Total Quantity Row */}
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-5 w-16" />
          </div>
          {/* Total Price Row */}
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-24" />
          </div>
        </CardHeader>
        <CardContent>
          {/* Checkout Button */}
          <Skeleton className="h-10 w-full rounded-md" />
        </CardContent>
      </Card>
    </div>
  );
}
