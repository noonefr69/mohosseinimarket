export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Skeleton */}
      <div className="py-20 md:py-40 rounded-2xl">
        <div className="max-w-xl flex p-4 flex-col items-center mx-auto">
          <div className="h-6 w-48 bg-muted rounded-full animate-pulse mb-6" />
          <div className="h-12 md:h-20 w-3/4 bg-muted rounded-xl animate-pulse mb-6" />
          <div className="h-4 w-full bg-muted rounded animate-pulse mb-2" />
          <div className="h-4 w-2/3 bg-muted rounded animate-pulse mb-8" />
          <div className="flex items-center gap-3">
            <div className="h-11 w-36 bg-muted rounded-md animate-pulse" />
            <div className="h-11 w-32 bg-muted rounded-md animate-pulse" />
          </div>
        </div>
      </div>

      {/* Container Skeleton (Products & Categories) */}
      <div className="py-12 space-y-16 px-4 max-w-7xl mx-auto">
        {/* Daily Products Section */}
        <div className="space-y-6">
          <div className="h-8 w-48 bg-muted rounded-md animate-pulse" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-40 md:h-48 bg-muted rounded-xl animate-pulse" />
                <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* More Categories Section */}
        <div className="space-y-6">
          <div className="h-8 w-48 bg-muted rounded-md animate-pulse" />
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-20 md:h-24 bg-muted rounded-xl animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* Famous Products Section */}
        <div className="space-y-6">
          <div className="h-8 w-48 bg-muted rounded-md animate-pulse" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-40 md:h-48 bg-muted rounded-xl animate-pulse" />
                <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Skeleton */}
      <div className="mt-7 px-4 max-w-7xl mx-auto pb-20">
        <div className="gap-6 grid-cols-1 grid lg:grid-cols-9 items-center">
          <div className="lg:col-span-4 col-span-1 space-y-6">
            <div className="h-10 w-full bg-muted rounded-md animate-pulse" />
            <div className="h-10 w-5/6 bg-muted rounded-md animate-pulse" />
            <div className="space-y-3 my-7">
              <div className="h-4 w-full bg-muted rounded animate-pulse" />
              <div className="h-4 w-full bg-muted rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
            </div>
            <div className="h-11 w-40 bg-muted rounded-md animate-pulse" />
          </div>
          <div className="lg:col-span-5 col-span-1 flex items-center gap-6">
            <div className="rounded-2xl w-full h-[300px] md:h-[400px] bg-muted animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
