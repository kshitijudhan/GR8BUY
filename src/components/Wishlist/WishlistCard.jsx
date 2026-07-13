import { HeartOff, ShoppingCart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useDispatch } from "react-redux";
import { removeFromwishlist } from "@/redux/wishlistSlice";
import { addToCart } from "@/redux/cartSlice";

function WishlistCard({ item }) {
  const dispatch = useDispatch();
  return (
    <Card className="overflow-hidden">
      <div className="flex aspect-square items-center justify-center bg-muted p-6">
        <img
          src={item.thumbnail}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <CardContent className="space-y-3 p-5">
        <Badge variant="secondary">{item.category}</Badge>

        <h2 className="line-clamp-2 text-lg font-semibold">{item.title}</h2>

        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

          <span>{item.rating}</span>
        </div>

        <p className="text-2xl font-bold">₹4,299</p>
      </CardContent>

      <CardFooter className="flex flex-col gap-3">
        <Button
          className="w-full"
          onClick={() => {
            dispatch(addToCart(item));
          }}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>

        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            dispatch(removeFromwishlist(item.id));
          }}
        >
          <HeartOff className="mr-2 h-4 w-4" />
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
}

export default WishlistCard;
