import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const CategoryCourses = () => {
  const categoryCourses = useLoaderData();
  console.log(categoryCourses);
  return (
    <>
      {categoryCourses.map((cateCourse) => (
        <CourseCard key={cateCourse.id} course={cateCourse}></CourseCard>
      ))}
    </>
  );
};

export default CategoryCourses;
