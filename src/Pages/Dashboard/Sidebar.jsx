import React from "react";
import {
  FaAddressCard,
  FaBook,
  FaCogs,
  FaFirstAid,
  FaHome,
  FaLeanpub,
  FaShapes,
  FaUserCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Switch, useDarkreader } from "react-darkreader";


const Sidebar = () => {
  const [isDark, { toggle }] = useDarkreader(false);
  const pathname = useLocation().pathname;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn bg-cyan-400 hover:bg-cyan-300 drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        {/* Sidebar content here */}
        <div className="min-h-screen py-10 bg-gradient-to-t from-cyan-500 to-teal-500 flex flex-col gap-14">
          <div className="flex flex-col justify-center items-center shadow-2xl py-4 rounded-3xl shadow-cyan-800">
            <img className="w-36" src={logo} alt="" />
            <h1 className="text-center text-3xl font-bold text-white">
              LEARNING CAMP
            </h1>
          </div>
          <div className="mx-auto">
          <Switch checked={isDark} onChange={toggle} styling="github" />
          </div>
          {/* Student Dashboard */}
          <div className="flex flex-col gap-6 pl-2">
            <Link to="/dashboard" className="">
              <button
                style={{ borderRadius: "10px 0px 0px 10px" }}
                className={`${
                  pathname === "/dashboard"
                    ? "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-white px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-center"
                    : "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-cyan-400 px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-start"
                }`}
              >
                <span className="flex items-center gap-2">
                  <FaShapes /> User Dashboard
                </span>
              </button>
            </Link>
            <Link to="/dashboard/my-selected-classes" className="">
              <button
                style={{ borderRadius: "10px 0px 0px 10px" }}
                className={`${
                  pathname === "/dashboard/my-selected-classes"
                    ? "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-white px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-center"
                    : "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-cyan-400 px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-start"
                }`}
              >
                <span className="flex items-center gap-2">
                  <FaFirstAid /> My Selected Classes
                </span>
              </button>
            </Link>
            <Link to="/dashboard/my-enrolled-classes" className="">
              <button
                style={{ borderRadius: "10px 0px 0px 10px" }}
                className={`${
                  pathname === "/dashboard/my-enrolled-classes"
                    ? "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-white px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-center"
                    : "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-cyan-400 px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-start"
                }`}
              >
                <FaLeanpub /> My Enrolled Classes
              </button>
            </Link>
            <Link
              to="/"
              className="bg-cyan-100 px-6 py-3 rounded-2xl ml-10 mr-12 text-center text-xl font-semibold hover:bg-teal-200 hover:shadow-2xl flex items-center gap-2 justify-start"
            >
              <FaHome /> Back To Home
            </Link>
          </div>

          {/* Instructor Dashboard */}
          <div className="flex flex-col gap-6 pl-2">
            <Link to="/dashboard" className="">
              <button
                style={{ borderRadius: "10px 0px 0px 10px" }}
                className={`${
                  pathname === "/dashboard"
                    ? "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-white px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-center"
                    : "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-cyan-400 px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-start"
                }`}
              >
                <FaShapes /> User Dashboard
              </button>
            </Link>
            <Link to="/dashboard/add-a-class" className="">
              <button
                style={{ borderRadius: "10px 0px 0px 10px" }}
                className={`${
                  pathname === "/dashboard/add-a-class"
                    ? "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-white px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-center"
                    : "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-cyan-400 px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-start"
                }`}
              >
                <FaAddressCard /> Add a Class
              </button>
            </Link>
            <Link to="/dashboard/my-classes" className="">
              <button
                style={{ borderRadius: "10px 0px 0px 10px" }}
                className={`${
                  pathname === "/dashboard/my-classes"
                    ? "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-white px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-center"
                    : "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-cyan-400 px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-start"
                }`}
              >
                <FaBook /> My Classes
              </button>
            </Link>
            <Link
              to="/"
              className="bg-cyan-100 px-6 py-3 rounded-2xl ml-10 mr-12 text-center text-xl font-semibold hover:bg-teal-200 hover:shadow-2xl flex items-center gap-2 justify-start"
            >
              <FaHome /> Back To Home
            </Link>
          </div>

          {/* Admin Dashboard */}
          <div className="flex flex-col gap-6 pl-2">
            <Link to="/dashboard" className="">
              <button
                style={{ borderRadius: "10px 0px 0px 10px" }}
                className={`${
                  pathname === "/dashboard"
                    ? "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-white px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-center"
                    : "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-cyan-400 px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-start"
                }`}
              >
                <FaShapes /> User Dashboard
              </button>
            </Link>
            <Link to="/dashboard/manage-classes" className="">
              <button
                style={{ borderRadius: "10px 0px 0px 10px" }}
                className={`${
                  pathname === "/dashboard/manage-classes"
                    ? "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-white px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-center"
                    : "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-cyan-400 px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-start"
                }`}
              >
                <FaCogs /> Manage Classes
              </button>
            </Link>
            <Link to="/dashboard/manage-users" className="">
              <button
                style={{ borderRadius: "10px 0px 0px 10px" }}
                className={`${
                  pathname === "/dashboard/manage-users"
                    ? "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-white px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-center"
                    : "text-xl shadow-lg hover:shadow-2xl hover:shadow-black-500 font-semibold bg-cyan-400 px-4 py-3 w-full hover:bg-teal-300 flex items-center gap-2 justify-start"
                }`}
              >
                <FaUserCog /> Manage Users
              </button>
            </Link>
            <Link
              to="/"
              className="bg-cyan-100 px-6 py-3 rounded-2xl ml-10 mr-12 text-center text-xl font-semibold hover:bg-teal-200 hover:shadow-2xl flex items-center gap-2 justify-start"
            >
              <FaHome /> Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
