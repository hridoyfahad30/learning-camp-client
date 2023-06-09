import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import ManageUserTable from "../../components/Dashboard/ManageUserTable";
import { getUser } from "../../API/allAPI";

const ManageUsers = () => {
  const [reactLoading, setReactLoading] = useState(false);

  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    getUser()
      .then((data) => {
        setAllUser(data);
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
        <div className="flex justify-start items-center min-h-screen">
          <div className="overflow-x-auto">
            <table className="table w-9/12">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>User Image</th>
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
              <th>User Image</th>
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
