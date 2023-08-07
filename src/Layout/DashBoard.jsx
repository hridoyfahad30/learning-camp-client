import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";
import { GridLoader } from "react-spinners";
import useAuth from "../hooks/useAuth";

const DashBoard = () => {
  const {user, loading} = useAuth();
  if(!user){
    return
  }
  const [reactLoading, setReactLoading] = useState(false);

  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 400);
  }, []);

  return (
    <>
      {loading || reactLoading ? (
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

          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start w-full">
              {/* Page content here */}
              <Outlet />
              <label
                htmlFor="my-drawer-2"
                className="btn bg-cyan-400 hover:bg-cyan-200 drawer-button lg:hidden"
              >
                Open drawer
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              {/* Sidebar content here */}
              {!loading &&
                <Sidebar />}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DashBoard;
