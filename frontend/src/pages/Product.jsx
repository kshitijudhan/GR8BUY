import Header from "@/components/Header";
import ProductDetails from "@/components/Product/ProductDetails";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import barcodeIcon from "@/assets/barcode.svg";

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
      <Helmet>
        <title>Product Details</title>
        <link rel="icon" href={barcodeIcon} />
      </Helmet>
      <Header />
      <ProductDetails product={product} />

      <Footer />
    </>
  );
}

export default Product;
