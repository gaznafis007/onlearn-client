import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import CourseCard from "../CourseCard/CourseCard";

const CourseLayout = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/datas")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course}></CourseCard>
      ))}
    </>
  );
};

export default CourseLayout;
