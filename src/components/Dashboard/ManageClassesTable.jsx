import React from "react";
import { updateClassStatus } from "../../API/allAPI";
import Swal from "sweetalert2";

const ManageClassesTable = ({allClass}) => {

  const _id = allClass._id;
  const status = allClass.status;
  const { className, instructorName, instructorEmail, availableSeats, price } = allClass.classInfo;

  const approve = "approved";
  const denied = 'denied';

  const handleApprove = (_id, status) => {
    updateClassStatus(_id, status)
    .then(data => {
      if(data.modifiedCount > 0){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Class successfully Approved',
          showConfirmButton: false,
          timer: 2500
        })
      }
      console.log(data);
    })
  }

  return (
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
            <div>
              <div className="font-bold w-20 text-start">{className}</div>
            </div>
          </div>
        </td>
        <td className="font-semibold text-start">{instructorName}</td>
        <td className="">{instructorEmail}</td>
        <td>{availableSeats}</td>
        <td>{price}</td>
        <td className="text-center">
        {status === "pending" && (
            <p className="bg-yellow-400 text-center px-4 py-2 rounded-2xl">
              Pending
            </p>
          )}
          {status === "approved" && (
            <p className="bg-green-500 text-center px-4 py-2 rounded-2xl">
              Approved
            </p>
          )}
          {status === "denied" && (
            <p className="bg-red-500 text-center px-4 py-2 rounded-2xl">Denied</p>
          )}
        </td>
        <td className="text-center space-y-2 flex flex-col">
          <button onClick={()=>{handleApprove(_id, approve)}} disabled={status === "approved"} className="bg-green-300 hover:bg-green-400 hover:shadow-2xl hover:shadow-black duration-300 text-center px-4 w-36 py-2 rounded-2xl font-medium disabled:bg-slate-200 disabled:text-slate-400">
            Approve
          </button>
          <button disabled={status === "denied"} className="bg-red-300 hover:bg-red-400 hover:shadow-2xl hover:shadow-black duration-300 text-center px-4 w-36 py-2 rounded-2xl font-medium disabled:bg-slate-200 disabled:text-slate-400">
            Deny
          </button>
          <button className="bg-yellow-300 hover:bg-yellow-400 hover:shadow-2xl hover:shadow-black duration-300 text-center px-4 w-36 py-2 rounded-2xl font-medium disabled:bg-slate-200 disabled:text-slate-400">
            Send Feedback
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageClassesTable;
