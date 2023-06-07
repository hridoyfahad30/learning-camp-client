import React, { useEffect, useState } from "react";
import AllInstructors from "../../components/Pages/AllInstructors/AllInstructors";
import { Helmet } from "react-helmet";
import { ScaleLoader, GridLoader } from "react-spinners";

const Instructors = () => {
    const [reactLoading, setReactLoading] = useState(false);

  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 400);
  }, []);
  return (
    
    <>
    {reactLoading?
        
        <div className="flex justify-center items-center h-[100vh]">
          <GridLoader
        color="#0ee9ff"
        margin={10}
        size={100}
        speedMultiplier={2}
        width={0}
      />
        </div>
      :
    <>
      <Helmet>
        <title>LEARNING CAMP | Instructor</title>
      </Helmet>
      <div>
        <AllInstructors />
      </div>
    </>}
    </>
  );
};

export default Instructors;
