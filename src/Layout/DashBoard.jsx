import React from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <Helmet>
        <title>LEARNING CAMP | Dashboard</title>
      </Helmet>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default DashBoard;
