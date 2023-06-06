import React from "react";
import ActiveLink from "./ActiveLink/ActiveLink";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'

const Navbar = () => {
  const navItem = (
    <div className="flex flex-col md:flex-row md:space-x-6">
      <ActiveLink to="/">
        <button className="px-2 py-2 text-lg font-semibold text-black hover:bg-cyan-400 rounded-lg duration-300">
          Home
        </button>
      </ActiveLink>
      <ActiveLink to="/instructors">
        <button className="px-2 py-2 text-lg font-semibold text-black hover:bg-cyan-400 rounded-lg duration-300">
          Instructors
        </button>
      </ActiveLink>
      <ActiveLink to="/classes">
        <button className="px-2 py-2 text-lg font-semibold text-black hover:bg-cyan-400 rounded-lg duration-300">
          Classes
        </button>
      </ActiveLink>
      <ActiveLink to="/dashboard">
        <button className="px-2 py-2 text-lg font-semibold text-black hover:bg-cyan-400 rounded-lg duration-300">
          Dashboard
        </button>
      </ActiveLink>
    </div>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to='/' className="flex items-center">
            <img className="w-24" src={logo} alt="" />
        <p className="text-xl font-bold">LEARNING CAMP</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center space-x-5">
          <div className="tooltip tooltip-bottom" data-tip="User Name Here">
            <div className="avatar">
              <div className="w-14 border-2 border-cyan-300 rounded-full">
                <img src={logo} />
              </div>
            </div>
          </div>
          <Link className="btn px-4 py-2 text-lg font-semibold text-black bg-cyan-500 hover:bg-cyan-400 rounded-lg duration-300">
            Logout
          </Link>
        </div>
        <Link to='/login' className="btn px-4 py-2 text-lg font-semibold text-black bg-cyan-500 hover:bg-cyan-400 rounded-lg duration-300">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
