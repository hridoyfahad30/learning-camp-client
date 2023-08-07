import React, { useEffect, useState } from "react";
import Slider from "../../components/Pages/Home/Slider/Slider";
import WhyChose from "../../components/Pages/Home/WhyChose/WhyChose";
import PopularClasses from "../../components/Pages/Home/PopularClasses/PopularClasses";
import PopularInstructor from "../../components/Pages/Home/PopularInstructor/PopularInstructor";
import TrendingCategories from "../../components/Pages/Home/TrendingCategories/TrendingCategories";
import WeWorksWith from "../../components/Pages/Home/WeWorksWith/WeWorksWith";
import { Helmet } from "react-helmet";
import { GridLoader } from "react-spinners";
import SuccessStories from "../../components/Pages/Home/SuccessStories/SuccessStories";
import Timer from "../../components/Pages/Home/Timer/Timer";
import NewsLetter from "../../components/Pages/Home/NewsLetter/NewsLetter";

const Home = () => {
  const [reactLoading, setReactLoading] = useState(false);

  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 400);
  }, []);
  return (
    <>
      {reactLoading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <GridLoader
            color="#0ee9ff"
            margin={10}
            size={50}
            speedMultiplier={2}
            width={0}
          />
        </div>
      ) : (
        <>
          <Helmet>
            <title>LEARNING CAMP | Home</title>
          </Helmet>
          <div className="min-h-[30vh]">
            <Slider />
            <Timer />
            <WhyChose />
            <PopularClasses />
            <SuccessStories />
            <PopularInstructor />
            <TrendingCategories />
            <WeWorksWith />
            <NewsLetter />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
