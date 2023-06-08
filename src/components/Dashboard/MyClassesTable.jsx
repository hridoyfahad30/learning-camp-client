import React from "react";

const MyClassesTable = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
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
              <th>Total Enrolled Students</th>
              <th>Feedback</th>
              <th className="text-center">Status</th>
              <th className="text-center">Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover:scale-[102%] duration-200 hover:shadow-2xl rounded-3xl">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
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
              <td>
                <button className="bg-teal-300 p-2 rounded-2xl font-medium hover:bg-teal-400 hover:shadow-2xl hover:shadow-cyan-600">
                  See Feedback
                </button>
              </td>
              <th className="text-center">
                <p className="bg-yellow-400 text-center py-2 rounded-2xl">
                  Pending
                </p>
                {/* <p className="bg-green-400 text-center py-2 rounded-2xl">Approved</p>
                <p className="bg-red-400 text-center py-2 rounded-2xl">Denied</p> */}
              </th>
              <th className="text-center">
                <button className="bg-green-400 text-center px-4 py-2 rounded-2xl">
                  Update
                </button>
              </th>
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

export default MyClassesTable;
