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
import Payment from "../Pages/Dashboard/Payment";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

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
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/contact',
            element: <Contact />
        },
      ]
    },
    {
      path: '/dashboard',
      element: <DashBoard />,
      children: [
        {
          path: '/dashboard/',
          element: <PrivateRoute><UserHome /></PrivateRoute>
        },
        {
          path: '/dashboard/my-selected-classes',
          element: <PrivateRoute> <MySelectedClasses /></PrivateRoute>
        },
        {
          path: '/dashboard/my-enrolled-classes',
          element: <PrivateRoute><MyEnrolledClasses /></PrivateRoute>
        },
        {
          path: '/dashboard/add-a-class',
          element: <InstructorRoute><AddaClass /></InstructorRoute>
        },
        {
          path: '/dashboard/my-classes',
          element: <InstructorRoute><MyClasses /></InstructorRoute>
        },
        {
          path: '/dashboard/manage-classes',
          element: <AdminRoute><ManageClasses /></AdminRoute>
        },
        {
          path: '/dashboard/manage-users',
          element: <AdminRoute><ManageUsers /></AdminRoute>
        },
        {
          path:'/dashboard/payment/:id',
          element: <Payment />
        }
      ]
    }
  ]);