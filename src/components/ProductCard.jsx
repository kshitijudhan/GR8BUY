import { ShoppingCart, Heart, Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { addToCart } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { addToWishlist, removeFromwishlist } from "@/redux/wishlistSlice";
import useCurrencyinr from "@/hooks/useCurrencyinr";
import { toast } from "sonner";
import { getAvailableStock } from "./utilities/availableStock";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlist = useSelector((state) => state.wishlist.wishlistItems) ?? [];
  const isInWishlist = wishlist.some((item) => item.id === product.id);
  const { convertedPrice, discountedPrice, currencyStatus } =
    useCurrencyinr(product);

  if (currencyStatus === "loading" || currencyStatus === "pending") {
    return <ProductCardSkeleton />;
  }
  const availableStock = getAvailableStock(product, cartItems);

  return (
    <Card className="group overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative overflow-hidden bg-muted">
        <div className="flex h-64 items-center justify-center bg-muted p-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-contain"
          />
        </div>

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3">
            {Math.round(product.discountPercentage)}% OFF
          </Badge>
        )}

        <Button
          size="lg"
          variant="icon"
          className="absolute right-3 top-3"
          onClick={() => {
            isInWishlist
              ? dispatch(removeFromwishlist(product.id))
              : dispatch(addToWishlist(product));
          }}
        >
          <Heart className={isInWishlist ? "fill-red-600 text-red-600" : ""} />
        </Button>
      </div>

      <CardContent className="space-y-3 p-5">
        {/* Category + Brand */}
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{product.category}</Badge>

          <span className="text-xs text-muted-foreground">{product.brand}</span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-semibold">{product.title}</h2>

        {/* Description */}
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <Star className="fill-yellow-400 text-yellow-400" size={18} />

          <span className="font-medium">{product.rating}</span>

          <span className="text-sm text-muted-foreground">
            ({product.reviews.length} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">₹{discountedPrice}</span>

          <span className="text-muted-foreground line-through">
            ₹{convertedPrice}
          </span>
        </div>

        {/* Stock */}
        <Badge variant={availableStock > 0 ? "default" : "destructive"}>
          {availableStock > 0 ? "In Stock" : "Out of Stock"}
        </Badge>
      </CardContent>

      <CardFooter className="flex gap-3">
        {cartItems.find((item) => item.id === product.id) ? (
          <Link to="/cart" className="flex-1">
            <Button className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Go to Cart
            </Button>
          </Link>
        ) : (
          <Button
            className="flex-1"
            onClick={() => {
              if (availableStock <= 0) {
                toast.info("Item is out of stock", {
                  position: "top-center",
                });
              } else dispatch(addToCart(product));
            }}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add
          </Button>
        )}

        <Link to={`product/${product.id}`}>
          <Button variant="outline" className="flex-1">
            Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
