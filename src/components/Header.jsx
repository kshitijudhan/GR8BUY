import { useNavigate } from "react-router-dom";
import { ShoppingCart, User, Heart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { HashLink } from "react-router-hash-link";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

function Header({ setSearchitem }) {
  const [searchtext, setSearchtext] = useState("");
  const navigate = useNavigate();
  const searchButtonRef = useRef(null);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlist = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <div
            className="flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white font-bold">
              S
            </div>

            <span className="text-lg font-semibold tracking-tight">ShopUI</span>
          </div>

          {/* Search */}
          <div className=" lg:flex w-full max-w-sm">
            <Field orientation="horizontal">
              <Input
                type="search"
                placeholder="Search..."
                value={searchtext}
                onChange={(e) => setSearchtext(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    searchButtonRef.current?.click();
                  }
                }}
              />
              <HashLink smooth to="/#products">
                <Button
                  ref={searchButtonRef}
                  onClick={() => setSearchitem(searchtext)}
                >
                  Search
                </Button>
              </HashLink>
            </Field>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon-lg"
                className="rounded-full"
                onClick={() => navigate("/wishlist")}
              >
                <Heart size={20} />
              </Button>

              {wishlist.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                  {wishlist.length}
                </span>
              )}
            </div>

            <div className="relative">
              <Button
                variant="ghost"
                size="icon-lg"
                className="rounded-full"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCart size={20} />
              </Button>

              {cartItems.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                  {cartItems.reduce(
                    (prev, currItem) => prev + currItem.quantity,
                    0,
                  )}
                </span>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon-lg"
              className="rounded-full"
              onClick={() => navigate("/login")}
            >
              <User size={30} />
            </Button>

            <Button
              variant="ghost"
              size="icon-lg"
              className="rounded-full"
              onClick={() =>
                toast.info("No notifications", { position: "top-center" })
              }
            >
              <Bell size={30} />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
