import ProductCardSkeleton from "./ProductCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

function ProductGridSkeleton() {
  return (
    <>
      <section className="container mx-auto max-w-7xl px-6 py-17" id="products">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          <Skeleton className="h-8 w-full" />
        </h2>

        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </>
  );
}

export default ProductGridSkeleton;
