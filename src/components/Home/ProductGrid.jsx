import ProductCard from "./ProductCard";

function ProductGrid({ visibleProducts }) {
  return (
    <>
      <section className="container mx-auto max-w-7xl px-6 py-17" id="products">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Featured Products
        </h2>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          Explore our latest collection of quality products across every
          category. Find your next favorite with just a few clicks.
        </p>
      </section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductGrid;
