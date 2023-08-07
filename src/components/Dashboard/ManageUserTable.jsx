import React from "react";
import { makeAdmin, makeInstructor } from "../../API/allAPI";
import Swal from "sweetalert2";

const ManageUserTable = ({ user }) => {
  const { name, email, photo, role } = user;

  const handleMakeAdmin = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Make this user as Admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#32AA5A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        makeAdmin(email).then((data) => {
          if (data.modifiedCount > 0) {
            Swal.fire("Done!", "User role set as Admin", "success");
          }
        });
      }
    });
  };

  const handleMakeInstructor = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Make this user as Instructor",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#32AA5A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        makeInstructor(email).then((data) => {
          if (data.modifiedCount > 0) {
            Swal.fire("Done!", "User role set as Instructor", "success");
          }
        });
      }
    });
  };

  return (
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
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <div>
            <div className="font-bold w-36">{name}</div>
          </div>
        </td>
        <td>{email}</td>
        <td className="capitalize">{role}</td>
        <td className="space-y-2 text-center">
          <button
            disabled={role === "admin"}
            onClick={() => {
              handleMakeAdmin(email);
            }}
            className="bg-cyan-300 disabled:bg-slate-100 disabled:text-slate-300 hover:bg-cyan-200 hover:shadow-2xl hover:shadow-black duration-300 text-center px-4 w-36 py-2 rounded-2xl font-medium"
          >
            Make Admin
          </button>
          <br />
          <button
            disabled={role === "instructor"}
            onClick={() => {
              handleMakeInstructor(email);
            }}
            className="bg-teal-300 disabled:bg-slate-100 disabled:text-slate-300 hover:bg-teal-400 hover:shadow-2xl hover:shadow-black duration-300 text-center px-4 w-36 py-2 rounded-2xl font-medium"
          >
            Make Instructor
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageUserTable;
