import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function MarketLoading() {
  return (
    <div>
      {/* Banner Skeleton */}
      <div className="w-full h-80 bg-accent rounded-2xl relative overflow-hidden">
        <Skeleton className="w-full h-full rounded-2xl" />
      </div>

      {/* Categories Bar Skeleton */}
      <div className="flex items-center gap-3 mt-6 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-24 rounded-full shrink-0" />
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mt-7">
        {/* Filter Panel Sidebar Skeleton */}
        <div className="col-span-1 lg:col-span-3 relative lg:block hidden">
          <Card className="block sticky top-28">
            {/* Card Header */}
            <div className="flex items-center justify-between p-6 pb-3">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-16" />
            </div>

            <CardContent className="space-y-6">
              {/* Filter Section 1 */}
              <div className="space-y-3">
                <Skeleton className="h-5 w-24" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4 rounded" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Filter Section 2 - Price Range */}
              <div className="space-y-3">
                <Skeleton className="h-5 w-20" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-9 w-full rounded-md" />
                  <Skeleton className="h-9 w-full rounded-md" />
                </div>
              </div>

              {/* Filter Section 3 */}
              <div className="space-y-3">
                <Skeleton className="h-5 w-28" />
                <div className="space-y-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4 rounded" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <Skeleton className="h-10 w-full rounded-md" />
            </CardContent>
          </Card>
        </div>

        {/* Products Area Skeleton */}
        <div className="col-span-1 lg:col-span-9">
          {/* Sorting/Filtering Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-36 rounded-md" />
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-9 w-9 rounded-md" />
              <Skeleton className="h-9 w-9 rounded-md" />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                {/* Product Image */}
                <Skeleton className="h-48 w-full rounded-none" />

                <CardContent className="p-4 space-y-3">
                  {/* Brand / Tag */}
                  <Skeleton className="h-3 w-16" />

                  {/* Product Title */}
                  <Skeleton className="h-5 w-3/4" />

                  {/* Description */}
                  <div className="space-y-1">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between pt-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-9 w-24 rounded-md" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
