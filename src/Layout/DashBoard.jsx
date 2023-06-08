import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";
import { GridLoader } from "react-spinners";

const DashBoard = () => {
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
            <title>LEARNING CAMP | Dashboard</title>
          </Helmet>
          <div className="flex">
            <div className="w-3/12">
              <Sidebar />
            </div>
            <div className="w-9/12">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DashBoard;
