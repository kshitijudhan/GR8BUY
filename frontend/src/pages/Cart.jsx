import CartGrid from "@/components/Cart/CartGrid";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Helmet } from "react-helmet-async";
import cartIcon from "@/assets/shopping-cart.svg";

export default function Cart() {
  return (
    <>
      <Helmet>
        <title>Cart</title>
        <link rel="icon" href={cartIcon} />
      </Helmet>
      <Header />
      <CartGrid />
      <Footer />
    </>
  );
}
