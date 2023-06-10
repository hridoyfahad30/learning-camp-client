import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import ManageClassesTable from "../../components/Dashboard/ManageClassesTable";
import { getAllClasses } from "../../API/allAPI";
import { ImSpinner9 } from "react-icons/im";

const ManageClasses = () => {
  const [reactLoading, setReactLoading] = useState(false);
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    getAllClasses().then((data) => {
      setAllClasses(data);
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
            <h2 className="text-4xl font-semibold text-center my-4">
              Total Class: {allClasses.length}
            </h2>
            <table className="table w-9/12">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th className="">Class Name</th>
                  <th className="">Instructor Name</th>
                  <th className="">Instructor Email</th>
                  <th className="">Available Seats</th>
                  <th className="">Price</th>
                  <th className="">Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              {allClasses.length == 0 ? (
                <div>
                  <ImSpinner9 className="text-6xl text-center" />
                </div>
              ) : (
                allClasses.map((allClass) => (
                  <ManageClassesTable key={allClass._id} allClass={allClass} />
                ))
              )}
              {/* foot */}
              <tfoot>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th className="">Class Name</th>
                  <th className="">Instructor Name</th>
                  <th className="">Instructor Email</th>
                  <th className="">Available Seats</th>
                  <th className="">Price</th>
                  <th className="">Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageClasses;
