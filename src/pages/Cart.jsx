import CartGrid from "@/components/Cart/CartGrid";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

export default function Cart() {
  return (
    <>
      <Header />
      <CartGrid />
      <Toaster />
      <Footer />
    </>
  );
}
