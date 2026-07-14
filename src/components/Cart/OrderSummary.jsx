import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useSelector } from "react-redux";

function OrderSummary() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const exchangeRate = useSelector((state) => state.currency.rates?.inr || 1);

  const { totalSum, discountSum } = useMemo(() => {
    let total = 0;
    let discount = 0;

    cartItems.forEach((item) => {
      const price = item?.price || 1;
      const discountPercentage = item?.discountPercentage || 0;
      const convertedPrice = price * exchangeRate;
      const discountedPrice = convertedPrice * (1 - discountPercentage / 100);

      total += discountedPrice;
      discount += convertedPrice - discountedPrice;
    });
    return {
      totalSum: total.toFixed(2),
      discountSum: discount.toFixed(2),
    };
  }, [cartItems, exchangeRate]);

  return (
    <Card className="h-fit lg:sticky lg:top-24">
      <CardContent className="space-y-5 p-6">
        <h2 className="text-2xl font-semibold">Order Summary</h2>

        <div className="flex justify-between">
          <span>Subtotal</span>

          <span>₹{totalSum}</span>
        </div>

        <div className="flex justify-between">
          <span>Discount</span>

          <span className="text-green-600">-₹{discountSum}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>

          <span>Free</span>
        </div>

        <Separator />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>

          <span>₹{totalSum}</span>
        </div>

        <Button className="w-full">Proceed to Checkout</Button>
      </CardContent>
    </Card>
  );
}

export default OrderSummary;
