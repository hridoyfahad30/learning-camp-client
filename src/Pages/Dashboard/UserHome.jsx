import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import { getUserProfile } from "../../API/allAPI";
import useAuth from "../../hooks/useAuth";

const UserHome = () => {
    const { user, loading } = useAuth()
    if(loading){
      return
    }

    const [reactLoading, setReactLoading] = useState(false);
    const [mUser, setMUser] = useState([]);

  useEffect(()=>{
    getUserProfile(user?.email)
    .then(data => {
      setMUser(data)
    })

  },[])

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
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-[600px] space-y-5">
            <div className="bg-cyan-100 w-10/12 mx-auto p-12 rounded-2xl space-y-4">
              <img className="w-44 rounded-full" src={user?.photoURL} alt="" />
              <h3 className="text-3xl font-semibold">Name: {user?.displayName}</h3>
              <p className="text-xl font-medium">Email: {user?.email}</p>
              <p className="text-lg font-medium capitalize">Role: {mUser[0]?.role}</p>
            </div>
            {mUser[0]?.role === "admin" ||
              <div className="bg-cyan-100 w-10/12 mx-auto p-12 rounded-2xl space-y-4">
              {mUser[0]?.role === "student" && <h2 className="text-2xl font-medium">Total Enrolled Classes: 12</h2>}
             {mUser[0]?.role === "instructor" && <h2 className="text-2xl font-medium">Total Approved Classes: {mUser[0]?.approved}</h2>}
            </div>}
          </div>
        </div>
      )}
    </>
  );
};

export default UserHome;
