import React from "react";
import { motion } from "framer-motion";

const ManageClassesTable = () => {
  return (
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
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            <tr className="hover:scale-[102%] duration-200 hover:shadow-2xl rounded-3xl">
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td className="text-center">
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
                    <div className="font-bold">Music Class</div>
                  </div>
                </div>
              </td>
              <td>234 Students</td>
              <td>fahad@gmail.com</td>
              <td>23 Seats Left</td>
              <td>$23</td>
              <td className="text-center">
                <p className="bg-yellow-400 px-1 py-1 rounded-2xl">
                  Pending
                </p>
                {/* <p className="bg-green-400 text-center py-2 rounded-2xl">Approved</p>
                <p className="bg-red-400 text-center py-2 rounded-2xl">Denied</p> */}
              </td>
              <td className="text-center space-y-2">
                <button className="bg-green-300 hover:bg-green-400 hover:shadow-2xl hover:shadow-black duration-300 text-center px-4 w-36 py-2 rounded-2xl font-medium">
                  Approve
                </button>
                <button className="bg-red-300 hover:bg-red-400 hover:shadow-2xl hover:shadow-black duration-300 text-center px-4 w-36 py-2 rounded-2xl font-medium">
                Deny
                </button>
                <button className="bg-green-300 hover:bg-yellow-400 hover:shadow-2xl hover:shadow-black duration-300 text-center px-4 w-36 py-2 rounded-2xl font-medium">
                Send Feedback
                </button>
              </td>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
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
  );
};

export default ManageClassesTable;
