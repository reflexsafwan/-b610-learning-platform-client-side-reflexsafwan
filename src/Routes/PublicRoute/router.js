import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import Courses from "../../Pages/Courses/Courses";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import PrivetRoute from "../PrivateRoute/PrivetRoute";
import CheckOut from "../../Pages/CheakoutPage/CheckOut";
import Profile from "../../Pages/Profile/Profile";
import Blog from "../../Pages/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://techportal-server.vercel.app/courses"),
      },
      {
        path: "course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`https://techportal-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivetRoute>
            <CheckOut></CheckOut>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://techportal-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
