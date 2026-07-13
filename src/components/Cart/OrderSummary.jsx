import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrencies } from "@/redux/currencySlice";

function OrderSummary() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currencyrate = useSelector((state) => state.currency.rates);
  const currencyState = useSelector((state) => state.currency.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currencyState === "idle") dispatch(fetchCurrencies());
  }, [currencyState, dispatch]);

  const { totalSum, discountSum } = useMemo(() => {
    let total = 0;
    let discount = 0;

    const rate = currencyrate.inr || 1;

    cartItems.forEach((item) => {
      const convertedPrice = item.price * rate * item.quantity;
      const discountPrice =
        convertedPrice * (1 - item.discountPercentage / 100);
      total += discountPrice;
      discount += convertedPrice - discountPrice;
    });
    return {
      totalSum: total.toFixed(2),
      discountSum: discount.toFixed(2),
    };
  }, [cartItems, currencyrate.inr]);

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
