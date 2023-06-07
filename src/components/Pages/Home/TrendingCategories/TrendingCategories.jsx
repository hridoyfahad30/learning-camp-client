import React from "react";
import TrendingCategoriesCard from "./TrendingCategoriesCard/TrendingCategoriesCard";

const TrendingCategories = () => {
  return (
    <div className="my-28">
      <h1 className="text-5xl font-semibold leading-snug ">
        Explore Our <br />{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse font-bold">
          Trending Categories
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <TrendingCategoriesCard />
        <TrendingCategoriesCard />
        <TrendingCategoriesCard />
        <TrendingCategoriesCard />
        <TrendingCategoriesCard />
        <TrendingCategoriesCard />
        <TrendingCategoriesCard />
        <TrendingCategoriesCard />
      </div>
    </div>
  );
};

export default TrendingCategories;
