import React from "react";
import ProductCard from "../../../ProductCard/ProductCard";

const PopularClasses = () => {
  return (
    <div className="my-28">
      <h1 className="text-5xl font-semibold leading-snug ml-28">
        Explore Our <br />{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 animate-pulse font-bold">
          Popular Courses
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-32">
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
