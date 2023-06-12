import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import SelectedClassTable from "../../components/Dashboard/SelectedClassTable";
import useAuth from "../../hooks/useAuth";
import { getSelectedClasses } from "../../API/allAPI";

const MySelectedClasses = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return;
  }

  const [reactLoading, setReactLoading] = useState(false);
  const [mySelectedClasses, setMySelectedClasses] = useState([]);

  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 400);
  }, []);

  useEffect(() => {
    getSelectedClasses(user?.email).then((data) => {
      setMySelectedClasses(data);
    });
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
        <div className="h-screen">
          <div className="flex justify-center items-center min-h-screen ">
            <div className="overflow-x-auto">
              <h1 className="my-4 text-center text-4xl font-semibold">Total Selected Class: {mySelectedClasses.length}</h1>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Class Name</th>
                    <th></th>
                    <th></th>
                    <th>Price</th>
                    <th></th>
                    <th></th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                {mySelectedClasses.map((selectClass) => (
                  <SelectedClassTable key={selectClass._id} selectClass={selectClass} />
                ))}
                {/* foot */}
                <tfoot>
                  <tr>
                    <th></th>
                    <th>Class Name</th>
                    <th></th>
                    <th></th>
                    <th>Price</th>
                    <th></th>
                    <th></th>
                    <th className="text-center">Action</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MySelectedClasses;
