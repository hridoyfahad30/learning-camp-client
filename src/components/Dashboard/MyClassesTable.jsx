import React from "react";

const MyClassesTable = ({ myClass }) => {

  const {_id, className, classImage, status } = myClass;

  return (
    <>
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
                  <img src={classImage} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </div>
          </td>
          <td>
            <div>
              <div className="font-bold w-40">{className}</div>
            </div>
          </td>
          <td>234 Students</td>
          <td>
            {myClass?.feedback && (
              <button className="btn bg-teal-300 p-2 rounded-2xl font-medium hover:bg-teal-400 hover:shadow-2xl px-4 w-32"
              >
                See Feedback
              </button>
            )}
          </td>
          <th className="text-center">
            {status === "" && (
              <p className="bg-yellow-400 text-center py-2 rounded-2xl w-20">
                Pending
              </p>
            )}
            {status === "approved" && (
              <p className="bg-green-500 text-center py-2 rounded-2xl w-20">
                Approved
              </p>
            )}
            {status === "denied" && (
              <p className="bg-red-500 text-center py-2 rounded-2xl w-20">
                Denied
              </p>
            )}
          </th>
          <th className="text-center">
            <button className="bg-teal-300 hover:bg-teal-400 text-center px-4 py-2 rounded-2xl">
              Update
            </button>
          </th>
        </tr>
      </tbody>
    </>
  );
};

export default MyClassesTable;
