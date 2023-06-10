import React from "react";
import { sendFeedback, updateClassStatus, updateInstructorApproveClass } from "../../API/allAPI";
import Swal from "sweetalert2";
import SendFeedback from "../Modal/SendFeedback";
import { useState } from "react";

const ManageClassesTable = ({ allClass }) => {

  const {_id, className, instructorName, instructorEmail, availableSeats, price, status, classImage } =
    allClass;

  const approve = "approved";
  const denied = "denied";

  const [modalOpen, setModalOpen] = useState(false);

  const handleApprove = (_id, status) => {
    updateClassStatus(_id, status).then((data) => {
      if (data.modifiedCount > 0) {
        updateInstructorApproveClass(instructorEmail);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class successfully Approved",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  const handleDeny = (_id, status) => {
    updateClassStatus(_id, status).then((data) => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class Denied",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  const modalHandler = (_id, feedback) => {
    sendFeedback(_id, feedback)
    .then((data) => {
      if (data.modifiedCount > 0) {
        setModalOpen(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Feedback send Successful",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    
    <>
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
                <img src={classImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
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
            {status === "" && (
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
              <p className="bg-red-500 text-center px-4 py-2 rounded-2xl">
                Denied
              </p>
            )}
          </td>
          <td className="text-center space-y-2 flex flex-col">
            <button
              onClick={() => {
                handleApprove(_id, approve);
              }}
              disabled={status === "approved"}
              className="bg-green-300 hover:bg-green-400 hover:shadow-2xl hover:shadow-black duration-300 text-center px-4 w-36 py-2 rounded-2xl font-medium disabled:bg-slate-200 disabled:text-slate-400"
            >
              Approve
            </button>
            <button
              onClick={() => {
                handleDeny(_id, denied);
              }}
              disabled={status === "denied"}
              className="bg-red-300 hover:bg-red-400 hover:shadow-2xl hover:shadow-black duration-300 text-center px-4 w-36 py-2 rounded-2xl font-medium disabled:bg-slate-200 disabled:text-slate-400"
            >
              Deny
            </button>
            <button
              onClick={() => {
                setModalOpen(true);
              }}
              className="bg-yellow-300 hover:bg-yellow-400 hover:shadow-2xl hover:shadow-black duration-300 text-center px-4 w-36 py-2 rounded-2xl font-medium disabled:bg-slate-200 disabled:text-slate-400"
            >
              Send Feedback
            </button>
          </td>
        </tr>
      </tbody>
      <SendFeedback
        closeModal={closeModal}
        _id={_id}
        modalHandler={modalHandler}
        isOpen={modalOpen}
      />
    </>
  );
};

export default ManageClassesTable;
