import CartCard from "@/components/Cart/CartCard";
import OrderSummary from "@/components/Cart/OrderSummary";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

function CartGrid() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <section className="container mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-bold">Shopping Cart</h1>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          {/* Cart Items */}
          {cartItems.map((item) => (
            <CartCard item={item} key={item.id} />
          ))}
        </div>

        {/* Summary */}
        <OrderSummary />
      </div>
    </section>
  );
}

export default CartGrid;
