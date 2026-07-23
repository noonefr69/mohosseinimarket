import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ProfileLoading() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex items-center justify-between">
          {/* "سفارش‌های من" Title Skeleton */}
          <Skeleton className="h-6 w-32 sm:h-7" />

          {/* "مشاهده همه" Action Skeleton */}
          <Skeleton className="h-5 w-24" />
        </CardHeader>

        <CardContent className="grid grid-cols-3 divide-x-2">
          {/* Maps 3 times to match orders_tabs length */}
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <div className="flex relative sm:p-0 py-2 px-2 md:flex-row flex-col text-center md:text-start items-center justify-center gap-2 sm:py-6">
                {/* Icon Skeleton (size-10) */}
                <Skeleton className="size-10 rounded-full shrink-0" />

                <div className="flex flex-col items-center md:items-start gap-1">
                  <h5 className="font-semibold flex items-center gap-1">
                    {/* Number Badge Skeleton (w-5 h-5) */}
                    <Skeleton className="h-5 w-5 rounded-full" />

                    {/* "سفارش" Text Skeleton */}
                    <Skeleton className="h-4 w-8 hidden sm:block" />
                  </h5>

                  {/* Tab Label Skeleton */}
                  <Skeleton className="h-4 w-16 sm:w-20" />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
