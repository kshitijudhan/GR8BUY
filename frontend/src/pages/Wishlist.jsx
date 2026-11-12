import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WishlistGrid from "@/components/Wishlist/WishlistGrid";
import { Helmet } from "react-helmet-async";
import heartIcon from "@/assets/heart.svg";

function Wishlist() {
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
        <link rel="icon" href={heartIcon} />
      </Helmet>
      <Header />
      <WishlistGrid />
      <Footer />
    </>
  );
}

export default Wishlist;
