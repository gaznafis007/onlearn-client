import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../Pages/Blog/Blog";
import CategoryCourses from "../Pages/CategoryCourse/CategoryCourses";
import ChangePassword from "../Pages/ChangePassword/ChangePassword";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import CourseLayout from "../Pages/CourseLayout.js/CourseLayout";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import ProtectedRoute from "../Pages/ProtectedRoute/ProtectedRoute";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://onlearn-server.vercel.app/datas"),
        children: [
          {
            path: "/courses",
            element: <CourseLayout></CourseLayout>,
          },
          {
            path: "/courses/categories/:name",
            element: <CategoryCourses></CategoryCourses>,
            loader: ({ params }) =>
              fetch(
                `https://onlearn-server.vercel.app/datas/categories/${params.name}`
              ),
          },
        ],
      },
      {
        path: "/courses/:id",
        element: (
          <ProtectedRoute>
            <CourseDetails></CourseDetails>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://onlearn-server.vercel.app/datas/${params.id}`),
      },
      {
        path: "/:profileName",
        element: (
          <ProtectedRoute>
            <Profile></Profile>
          </ProtectedRoute>
        ),
      },
      {
        path: "/course/:id/checkout",
        element: (
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://onlearn-server.vercel.app/datas/${params.id}`),
      },
      {
        path: "/blog",
        element: (
          <ProtectedRoute>
            <Blog></Blog>
          </ProtectedRoute>
        ),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      // {
      //   path: "/resetpass",
      //   element: <ChangePassword></ChangePassword>,
      // },
    ],
  },
]);
