import React from "react";
import ClassCard from "../../components/Pages/AllClasses/ClassCard/ClassCard";
import { Helmet } from "react-helmet";

const AllClasses = () => {
  return (
    <>
      <Helmet>
        <title>LEARNING CAMP | Classes</title>
      </Helmet>
      <div className="mt-12 mb-28">
        <h1 className="text-5xl font-semibold leading-snug">
          Explore Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse font-bold">
            All Classes
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-12">
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </div>
      </div>
    </>
  );
};

export default AllClasses;