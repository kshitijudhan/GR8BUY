import { Skeleton } from "./ui/skeleton";
import { Card, CardContent } from "./ui/card";
import { Separator } from "@base-ui/react";

function ProductDetailSkeleton() {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          {/* Main Image */}
          <Card className="overflow-hidden">
            <CardContent className="flex aspect-square items-center justify-center p-8">
              <Skeleton className="max-h-full max-w-full object-contain" />
            </CardContent>
          </Card>

          {/* Thumbnails */}
          <div className="mt-5 flex gap-3">
            <Skeleton className="h-20 w-20 object-contain" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-54" />
          <Skeleton className="h-8 w-24" />

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-8 64" />
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>

          {/* Availability */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>

          <Separator />

          {/* Quantity */}
          <div>
            <Skeleton className="h-4 w-14" />
            <div className="flex w-fit items-center rounded-lg border">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-14" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailSkeleton;
