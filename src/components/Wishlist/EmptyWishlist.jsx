import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

function EmptyWishlist() {
  return (
    <Card className="mx-auto mt-20 max-w-lg">
      <CardContent className="flex flex-col items-center p-10 text-center">
        <Heart className="mb-6 h-20 w-20 text-muted-foreground" />

        <h2 className="text-3xl font-bold">Your Wishlist is Empty</h2>

        <p className="mt-4 text-muted-foreground">
          Save products you like so you can easily find them later.
        </p>

        <Button asChild className="mt-8">
          <Link to="/">Browse Products</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default EmptyWishlist;
