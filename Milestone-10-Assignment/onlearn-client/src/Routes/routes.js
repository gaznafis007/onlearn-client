import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../Pages/Blog/Blog";
import CategoryCourses from "../Pages/CategoryCourse/CategoryCourses";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import CourseLayout from "../Pages/CourseLayout.js/CourseLayout";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";

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
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/datas"),
        children: [
          {
            path: "/courses",
            element: <CourseLayout></CourseLayout>,
          },
          {
            path: "/courses/categories/:name",
            element: <CategoryCourses></CategoryCourses>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/datas/categories/${params.name}`),
          },
        ],
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/datas/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
]);
