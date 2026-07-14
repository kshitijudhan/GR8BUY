import Header from "@/components/Header";
import ProductDetails from "@/components/ProductDetails";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <>
      <Header />
      <ProductDetails product={product} />
      <Toaster />
      <Footer />
    </>
  );
}

export default Product;
