import { useSelector } from "react-redux";
import EmptyWishlist from "./EmptyWishlist";
import WishlistCard from "./WishlistCard";

export default function WishlistGrid() {
  const wishlist = useSelector((state) => state.wishlist.wishlistItems);
  return (
    <section className="container mx-auto max-w-7xl px-6 py-10">
      {wishlist.length > 0 ? (
        <>
          <div className="mb-10">
            <h1 className="text-4xl font-bold">My Wishlist</h1>

            <p className="mt-2 text-muted-foreground">
              Save your favorite products for later.
            </p>
          </div>{" "}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlist.map((item) => (
              <WishlistCard key={item.id} item={item} />
            ))}
          </div>
        </>
      ) : (
        <EmptyWishlist />
      )}
    </section>
  );
}
