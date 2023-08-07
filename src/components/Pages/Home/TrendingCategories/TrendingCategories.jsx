import React from "react";
import TrendingCategoriesCard from "./TrendingCategoriesCard/TrendingCategoriesCard";

const TrendingCategories = () => {

  const categories = [
    {id: 1, category: "Accounting & Finance", logo: "https://trainingtale.org/wp-content/uploads/2021/12/administration-1-1.png"},
    {id: 2, category: "Bundle Courses", logo: "https://i.ibb.co/xH1HFMG/bundle.png"},
    {id: 3, category: "Career development", logo: "https://i.ibb.co/JCQmxKP/career.png"},
    {id: 4, category: "Child Care", logo: "https://trainingtale.org/wp-content/uploads/2021/12/administration-1-2.png"},
    {id: 5, category: "Animal Care", logo: "https://trainingtale.org/wp-content/uploads/2022/10/Frame-47.png"},
    {id: 6, category: "Business Management", logo: "https://trainingtale.org/wp-content/uploads/2021/12/administration-1-27.png"},
    {id: 7, category: "Catering", logo: "https://i.ibb.co/sV3066G/catering.png"},
    {id: 8, category: "Cyber Security", logo: "https://i.ibb.co/syLYMWD/security.png"},
  ]

  return (
    <div className="my-12 md:my-28 mx-4 md:mx-14">
      <h1 className="text-3xl md:text-5xl font-semibold leading-snug ">
        Explore Our <br />{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse font-bold">
          Trending Categories
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          categories.map(category => <TrendingCategoriesCard key={category.id} category={category} />)
        }
      </div>
    </div>
  );
};

export default TrendingCategories;
