import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error404 from "../Pages/Error404/Error404";
import Instructors from "../Pages/Instructors/Instructors";
import AllClasses from "../components/Pages/AllClasses/AllClasses";

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
  ]);