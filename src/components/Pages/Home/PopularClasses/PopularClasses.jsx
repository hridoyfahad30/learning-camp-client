import React from "react";
import ProductCard from "./ProductCard/ProductCard";

const PopularClasses = () => {
  return (
    <div className="my-28">
      <h1 className="text-5xl font-semibold leading-snug ">
        Explore Our <br />{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse font-bold">
          Popular Classes
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-12">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default PopularClasses;
