import React, { useContext, useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import { AuthContext } from "../../Providers/AuthProvider";

const UserHome = () => {
    const { user } = useContext(AuthContext);
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
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full space-y-5">
            <div className="bg-cyan-100 w-10/12 mx-auto p-12 rounded-2xl space-y-4">
              <img className="w-44 rounded-full" src={user?.photoURL} alt="" />
              <h3 className="text-3xl font-semibold">Name: {user?.displayName}</h3>
              <p className="text-xl font-medium">Email: {user?.email}</p>
              <p className="text-lg font-medium">Role: Student</p>
            </div>
            <div className="bg-cyan-100 w-10/12 mx-auto p-12 rounded-2xl space-y-4">
              <h2 className="text-2xl font-medium">Total Enrolled Classes: 12</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserHome;
