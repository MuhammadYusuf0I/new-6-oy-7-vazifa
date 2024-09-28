import React, { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import { CiMenuBurger } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import Cards from "./Cards";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch products");
      })
      .then((data) => {
        if (data && data.data) {
          setProducts(data.data);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="mt-28">
      <div className="navbar bg-base-100 pb-8 border-b-2">
        <div className="flex-1">
          <h5 className="text-xl font-semibold text-[#294E6A]">
            {products.length} products
          </h5>
        </div>
        <div className="flex-none gap-2">
          <button className="btn btn-primary rounded-3xl">
            <CgMenuGridO className="text-4xl" />
          </button>
          <button className="btn btn-square btn-ghost rounded-3xl">
            <CiMenuBurger className="text-xl h-10 w-7" />
          </button>
        </div>
      </div>
      <div className="base-container mt-12 flex justify-between flex-wrap gap-8">
        {isLoading && <FadeLoader color="red" size={20} />}
        {!isLoading &&
          products.length &&
          products.map((el, index) => {
            return <Cards key={index} product={el} />;
          })}
      </div>
    </div>
  );
}

export default Products;
