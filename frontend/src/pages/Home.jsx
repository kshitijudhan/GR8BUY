import { useState, useEffect, useMemo } from "react";
import Banner from "@/components/Home/Banner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/Home/ProductGrid";
import Categories from "@/components/Home/Categories";
import ProductGridSkeleton from "@/components/Home/ProductGridSkeleton";
import WhatWeSell from "@/components/Home/WhatWeSell";
import { PaginationIndex } from "@/components/Home/PaginationIndex";
import ProductNotFound from "@/components/Home/ProductNotFound";
import { Helmet } from "react-helmet-async";
import houseIcon from "@/assets/house.svg";

const PRODUCTS_PER_PAGE = 16;

function Home() {
  const [products, setProducts] = useState([]);
  const [searchitem, setSearchitem] = useState("");
  const [selectedcategories, setSelectedcategories] = useState("");
  const [isloading, setIsLoading] = useState(true);
  const [iserror, setIsError] = useState(false);
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
      );
  }, [products, selectedcategories, searchitem]);

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
    <>
      <Helmet>
        <title>GR8 BUY</title>
        <link rel="icon" href={houseIcon} />
      </Helmet>
      <div>
        <Header setSearchitem={setSearchitem} />
        <Categories setSelectedcategories={setSelectedcategories} />
        <Banner products={products} />
        <WhatWeSell />
        <main style={{ marginTop: "10px", padding: "10px" }}>
          {iserror ? (
            <div>There is something wrong try again</div>
          ) : isloading ? (
            <ProductGridSkeleton />
          ) : visibleProducts.length <= 0 ? (
            <ProductNotFound
              setSearchitem={setSearchitem}
              setSelectedcategories={setSelectedcategories}
            />
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
    </>
  );
}

export default Home;
