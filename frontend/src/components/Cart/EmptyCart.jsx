import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <Card className="mx-auto my-20 max-w-lg">
      <CardContent className="flex flex-col items-center p-10 text-center">
        <ShoppingBag className="mb-6 h-20 w-20 text-muted-foreground" />

        <h2 className="text-3xl font-bold">Your Cart is Empty</h2>

        <p className="mt-4 text-muted-foreground">
          Looks like you haven't added anything yet.
        </p>

        <Button asChild className="mt-8">
          <Link to="/">Continue Shopping</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default EmptyCart;
