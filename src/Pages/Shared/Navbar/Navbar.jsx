import ActiveLink from "./ActiveLink/ActiveLink";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import defaultUser from "../../../assets/user.png";
import { motion } from "framer-motion";
import { Switch, useDarkreader } from "react-darkreader";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut, loading } = useAuth()
  const [isDark, { toggle }] = useDarkreader(false);

  if(loading){
    return
  }

  const handleLogout = () => {
    logOut();
  };

  const navItem = (
    <div className="flex flex-col md:flex-row md:space-x-6">
      <ActiveLink to="/">
        <button className="px-2 py-2 text-lg font-semibold text-black md:text-white hover:bg-cyan-200 hover:text-black rounded-lg duration-300">
          Home
        </button>
      </ActiveLink>
      <ActiveLink to="/instructors">
        <button className="px-2 py-2 text-lg font-semibold text-black md:text-white hover:bg-cyan-200 hover:text-black rounded-lg duration-300">
          Instructors
        </button>
      </ActiveLink>
      <ActiveLink to="/classes">
        <button className="px-2 py-2 text-lg font-semibold text-black md:text-white hover:bg-cyan-200 hover:text-black rounded-lg duration-300">
          Classes
        </button>
      </ActiveLink>
      {user && (
        <ActiveLink to="/dashboard"> 
          <button className="px-2 py-2 text-lg font-semibold text-black md:text-white hover:bg-cyan-200 hover:text-black rounded-lg duration-300">
            Dashboard
          </button>
        </ActiveLink>
      )}
      <ActiveLink to="/about">
        <button className="px-2 py-2 text-lg font-semibold text-black md:text-white hover:bg-cyan-200 hover:text-black rounded-lg duration-300">
          About Us
        </button>
      </ActiveLink>
      <ActiveLink to="/contact">
        <button className="px-2 py-2 text-lg font-semibold text-black md:text-white hover:bg-cyan-200 hover:text-black rounded-lg duration-300">
          Contact Us
        </button>
      </ActiveLink>
    </div>
  );

  return (
    <div className="navbar sticky top-0 backdrop-blur-md z-50 bg-cyan-950 bg-opacity-70 text-white ">
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
        <Link to="/" className="md:flex items-center">
          <img className="w-12 md:w-20 mx-auto mb-1" src={logo} alt="" />
          <p className="text-sm md:text-xl font-bold">LEARNING CAMP</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="flex items-center space-x-5">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <div className="avatar">
                <div className="w-10 md:w-16 border-2 border-cyan-300 rounded-full">
                  <img
                    className="p-1 rounded-full"
                    src={user?.photoURL || defaultUser}
                  />
                </div>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{
                scale: 1.2,
                rotate: 10,
              }}
            >
              <button
                onClick={handleLogout}
                className="btn md:px-4 md:py-2 md:text-lg font-semibold text-black bg-cyan-300 hover:bg-cyan-200 rounded-lg duration-300"
              >
                Logout
              </button>
            </motion.div>
          </div>
        )}

        <motion.div
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{
            scale: 1.2,
            rotate: 10,
          }}
        >
          {!user && (
            <Link
              to="/login"
              className="btn md:px-4 md:py-2 md:text-lg font-semibold text-black bg-cyan-300 hover:bg-cyan-200 rounded-lg duration-300"
            >
              Login
            </Link>
          )}
        </motion.div>
        <div className="ml-4 mr-2">
        <Switch checked={isDark} onChange={toggle} styling="github" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
