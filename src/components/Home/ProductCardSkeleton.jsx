import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <Card className="group overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative overflow-hidden bg-muted">
        <div className="flex h-64 items-center justify-center bg-muted p-4">
          <Skeleton className="h-full w-full object-contain" />
        </div>
        <Skeleton />
      </div>

      <CardContent className="space-y-3 p-5">
        {/* Category + Brand */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-20" />

          <Skeleton className="h-4 w-24" />
        </div>

        {/* Title */}
        <Skeleton className="h-8 w-54" />

        {/* Description */}
        <Skeleton className="h-4 flex-1" />

        {/* Rating */}
        <div className="flex items-center gap-2">
          <Skeleton size={18} />

          <Skeleton className="h-4 w-20" />

          <Skeleton className="h-4 w-24" />
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">
            <Skeleton className="h-4 w-20" />
          </span>

          <span className="text-muted-foreground line-through">
            <Skeleton className="h-4 w-20" />
          </span>
        </div>

        {/* Stock */}

        <Skeleton className="h-4 w-16" />
      </CardContent>

      <CardFooter className="flex gap-3">
        <Skeleton className="h-4 w-20" />

        <Skeleton className="h-4 w-24" />
      </CardFooter>
    </Card>
  );
}
