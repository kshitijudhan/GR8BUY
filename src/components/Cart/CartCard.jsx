import { useEffect } from "react";
import { Trash2, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrencies } from "@/redux/currencySlice";
import { toast } from "sonner";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/redux/cartSlice";

function CartCard({ item }) {
  const currencyrate = useSelector((state) => state.currency.rates);
  const currencyState = useSelector((state) => state.currency.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currencyState === "idle") dispatch(fetchCurrencies());
  }, [currencyState, dispatch]);

  const convertedPrice = (item.price * currencyrate?.inr).toFixed(2);

  const discountedPrice = (
    convertedPrice *
    (1 - item.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="space-y-5">
      {/* Card */}

      <Card>
        <CardContent className="flex flex-col gap-6 p-6 md:flex-row">
          <img
            src={item.thumbnail}
            alt=""
            className="h-36 w-36 rounded-lg object-cover"
          />

          <div className="flex flex-1 flex-col">
            <h2 className="text-xl font-semibold">{item.title}</h2>

            <p className="text-sm text-muted-foreground">{item.brand}</p>

            {/* <p className="mt-3 text-2xl font-bold">₹{discountedPrice}</p> */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">₹{discountedPrice}</span>

              <span className="text-muted-foreground line-through">
                ₹{convertedPrice}
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between">
              {/* Quantity */}

              <div className="flex items-center rounded-lg border">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    dispatch(decreaseQuantity(item.id));
                  }}
                >
                  <Minus size={16} />
                </Button>

                <span className="w-10 text-center">{item.quantity}</span>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    if (item.stock <= item.quantity) {
                      toast.info("Item is out of stock", {
                        position: "top-center",
                      });
                    } else dispatch(increaseQuantity(item.id));
                  }}
                >
                  <Plus size={16} />
                </Button>
              </div>

              <Button
                variant="destructive"
                size="icon"
                onClick={() => {
                  dispatch(removeFromCart(item.id));
                }}
              >
                <Trash2 size={18} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Repeat Cards */}
    </div>
  );
}

export default CartCard;
