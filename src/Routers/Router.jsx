import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error404 from "../Pages/Error404/Error404";
import Instructors from "../Pages/Instructors/Instructors";
import DashBoard from "../Layout/DashBoard";
import AllClasses from "../Pages/AllClasses/AllClasses";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses";
import AddaClass from "../Pages/Dashboard/AddaClass";
import MyClasses from "../Pages/Dashboard/MyClasses";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import UserHome from "../Pages/Dashboard/UserHome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error404 />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: '/instructors',
          element: <Instructors />
        },
        {
          path: '/classes',
          element: <AllClasses />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        }
      ]
    },
    {
      path: '/dashboard',
      element: <DashBoard />,
      children: [
        {
          path: '/dashboard/',
          element: <UserHome />
        },
        {
          path: '/dashboard/my-selected-classes',
          element: <MySelectedClasses />
        },
        {
          path: '/dashboard/my-enrolled-classes',
          element: <MyEnrolledClasses />
        },
        {
          path: '/dashboard/add-a-class',
          element: <AddaClass />
        },
        {
          path: '/dashboard/my-classes',
          element: <MyClasses />
        },
        {
          path: '/dashboard/manage-classes',
          element: <ManageClasses />
        },
        {
          path: '/dashboard/manage-users',
          element: <ManageUsers />
        },
      ]
    }
  ]);