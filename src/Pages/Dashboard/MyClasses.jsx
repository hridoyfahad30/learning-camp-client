import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import MyClassesTable from "../../components/Dashboard/MyClassesTable";
import { getMyClasses } from "../../API/allAPI";

const MyClasses = () => {
  const [reactLoading, setReactLoading] = useState(false);
  const [myClasses, setMyClasses] = useState([]);

  useEffect(() => {
    getMyClasses().then((data) => {
      setMyClasses(data);
    });
  }, []);

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
        
          <div className="flex justify-start items-center min-h-screen">
          <div className="overflow-x-auto">
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
                {
                  myClasses.map(myClass => <MyClassesTable key={myClass._id} myClass={myClass} />)
                }
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
