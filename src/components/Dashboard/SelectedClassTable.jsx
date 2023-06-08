import React from "react";

const SelectedClassTable = () => {
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
              <th>Price</th>
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
                    <div className="font-bold">Class Name</div>
                    <div className="text-sm opacity-50">Instructor Bane</div>
                  </div>
                </div>
              </td>
              <td>$345</td>

              <th className="text-center flex flex-col space-y-2">
                <button className="btn bg-green-400 hover:bg-green-500 hover:shadow-2xl">
                  Pay
                </button>
                <button className="btn bg-red-400 hover:bg-red-500 hover:shadow-2xl">
                  Delete
                </button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Class Name</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SelectedClassTable;