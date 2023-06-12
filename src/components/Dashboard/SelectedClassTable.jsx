import React from "react";
import { deleteSelectedClass } from "../../API/allAPI";
import Swal from "sweetalert2";

const SelectedClassTable = ({ selectClass }) => {
  const { _id, classImage, className, instructorName, price, paymentStatus } =
    selectClass;

  const handleDeleteSelectClass = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSelectedClass(_id).then((res) => {
          if (res.deletedCount > 0) {
            Swal.fire("Deleted!", "Your class has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
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
                <img src={classImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{className}</div>
              <div className="text-sm opacity-50">{instructorName}</div>
            </div>
          </div>
        </td>
        <td></td>
        <td></td>
        <td>${price}</td>
        <td></td>
        <td></td>

        <th className="text-center flex flex-col space-y-2">
          <button
            disabled={paymentStatus === "paid"}
            className="btn bg-green-400 hover:bg-green-500 hover:shadow-2xl disabled:bg-gray-200 disabled:text-gray-300"
          >
            Pay
          </button>
          <button
            onClick={() => {
              handleDeleteSelectClass(_id);
            }}
            className="btn bg-red-400 hover:bg-red-500 hover:shadow-2xl"
          >
            Delete
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default SelectedClassTable;
