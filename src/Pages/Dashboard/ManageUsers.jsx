import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import ManageUserTable from "../../components/Dashboard/ManageUserTable";

const ManageUsers = () => {
  const [reactLoading, setReactLoading] = useState(false);

  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    const options = { method: "GET" }

    fetch("http://localhost:5000/allUsers", options)
      .then((res) => res.json())
      .then((data) => {
        setAllUser(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
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
        <div className="flex justify-center items-center min-h-screen">
           <div className="overflow-x-auto w-full">
        <table className="table w-11/12">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Manage User</th>
            </tr>
          </thead>
          {
            allUser.map(user => <ManageUserTable key={user._id} user={user} />)
          }
          {/* foot */}
          <tfoot>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Manage User</th>
            </tr>
          </tfoot>
        </table>
      </div>
        </div>
      )}
    </>
  );
};

export default ManageUsers;
