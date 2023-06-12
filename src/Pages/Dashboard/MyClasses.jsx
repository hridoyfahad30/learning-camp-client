import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import MyClassesTable from "../../components/Dashboard/MyClassesTable";
import { getInstructorClasses } from "../../API/allAPI";
import { ImSpinner9 } from "react-icons/im";
import useAuth from "../../hooks/useAuth";

const MyClasses = () => {
  const {user, loading} = useAuth();

  if(loading){
    return
  }

  const [reactLoading, setReactLoading] = useState(false);
  const [myClasses, setMyClasses] = useState([]);
console.log(myClasses);
  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 400);
  }, []);

  useEffect(() => {
    getInstructorClasses(user?.email).then((data) => {
      setMyClasses(data);
    });
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
        <div className="flex justify-start items-center min-h-screen">
          <div className="overflow-x-auto">
            <h2 className="text-4xl font-semibold text-center my-4">
              My Total Class: {myClasses.length}
            </h2>
            <table className="table  w-9/12">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Class Image</th>
                  <th>Class Name</th>
                  <th>Total Enrolled Students</th>
                  <th>Feedback</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Update</th>
                </tr>
              </thead>
              {myClasses.length == 0 ? (
                <div>
                  <ImSpinner9 className="text-6xl text-center" />
                  
                </div>
              ) :
              
              myClasses.map((myClass) => (
                <MyClassesTable key={myClass._id} myClass={myClass} />
              ))}
              {/* foot */}
              <tfoot>
                <tr>
                  <th></th>
                  <th>Class Image</th>
                  <th>Class Name</th>
                  <th>Total Enrolled Students</th>
                  <th>Feedback</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Update</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default MyClasses;
