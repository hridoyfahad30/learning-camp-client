import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { getAllClasses } from "../../../../API/allAPI";
import { GridLoader } from "react-spinners";

const PopularClasses = () => {
  
  const [filterClasses, setFilterClasses] = useState([]);


  useEffect(() => {
    getAllClasses().then((data) => {
      setFilterClasses(data);
    });
  }, []);

  const allClasses = filterClasses.filter(filterClass => filterClass.status === "approved")

  return (
    <div className="my-12 md:my-28 mx-4 md:mx-14">
      <h1 className="text-3xl md:text-5xl font-semibold leading-snug ">
        Explore Our <br />{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse font-bold">
          Popular Classes
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 my-12">
        {allClasses?.length == 0 ? (
          <GridLoader
            color="#0ee9ff"
            margin={10}
            size={20}
            speedMultiplier={2}
            width={0}
          />
        ) : (
          allClasses
            .slice(0, 6)
            .map((singleClass) => (
              <ProductCard key={singleClass._id} singleClass={singleClass} />
            ))
        )}
      </div>
    </div>
  );
};

export default PopularClasses;
