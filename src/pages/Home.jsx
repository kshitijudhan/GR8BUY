import { useState, useEffect, useMemo } from "react";
import Banner from "@/components/Banner";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import Categories from "@/components/Categories";
import ProductGridSkeleton from "@/components/ProductGridSkeleton";
import { useSelector } from "react-redux";
import WhatWeSell from "@/components/WhatWeSell";
import { PaginationIndex } from "@/components/PaginationIndex";

const PRODUCTS_PER_PAGE = 16;

function Home() {
  const [products, setProducts] = useState([]);
  const [searchitem, setSearchitem] = useState("");
  const [selectedcategories, setSelectedcategories] = useState("");
  const [isloading, setIsLoading] = useState(true);
  const [iserror, setIsError] = useState(false);
  const cart = useSelector((state) => state.cart.cartItems);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const filteredProducts = useMemo(() => {
    if (!products.length) return [];

    const cartMap = new Map(cart.map((item) => [item.id, item.quantity]));
    const searchLower = searchitem.trim().toLowerCase();

    return products
      .filter(
        (product) =>
          selectedcategories === "" || product.category === selectedcategories,
      )
      .filter(
        (product) =>
          searchitem === "" ||
          product.title.toLowerCase().includes(searchLower),
      )
      .map((product) => {
        const cartQuantity = cartMap.get(product.id) || 0;
        return {
          ...product,
          stock: Math.max(0, product.stock - cartQuantity),
        };
      });
  }, [products, cart, selectedcategories, searchitem]);

  const visibleProducts = useMemo(
    () => filteredProducts.slice(startIndex, endIndex),
    [filteredProducts, startIndex, endIndex],
  );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [searchitem, selectedcategories]);

  return (
    <div>
      <Header setSearchitem={setSearchitem} />
      <Categories setSelectedcategories={setSelectedcategories} />
      <Banner />
      <WhatWeSell />
      <main style={{ marginTop: "10px", padding: "10px" }}>
        {iserror ? (
          <div>There is something wrong try again</div>
        ) : isloading ? (
          <ProductGridSkeleton />
        ) : (
          <>
            <ProductGrid visibleProducts={visibleProducts} />
            {totalPages > 1 && (
              <PaginationIndex
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
