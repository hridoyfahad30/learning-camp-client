import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

const ManageUsers = () => {
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
              <tbody>
                {/* row 1 */}
                <tr className="hover:scale-[102%] duration-200 hover:shadow-2xl rounded-3xl">
                  <td>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Fahad</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    fahad@gmail.com
                  </td>
                  <td>Student</td>
                  <td className="space-y-2 text-center">
                <button className="bg-cyan-300 hover:bg-cyan-400 hover:shadow-2xl hover:shadow-black duration-300 text-center px-4 w-36 py-2 rounded-2xl font-medium">
                  Make Admin
                </button>
                <br />
                <button className="bg-teal-300 hover:bg-teal-400 hover:shadow-2xl hover:shadow-black duration-300 text-center px-4 w-36 py-2 rounded-2xl font-medium">
                Make Instructor
                </button>
              </td>
                </tr>
              </tbody>
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
