import { Trash2, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/redux/cartSlice";
import useCurrencyinr from "@/hooks/useCurrencyinr";

function CartCard({ item }) {
  const dispatch = useDispatch();

  const { convertedPrice, discountedPrice } = useCurrencyinr(item);

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
                  disabled={item.quantity >= item.stock}
                  onClick={() => {
                    if (item.quantity >= item.stock) {
                      toast.error("Maximum stock reached", {
                        position: "top-center",
                      });
                    } else {
                      dispatch(increaseQuantity(item.id));
                    }
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
