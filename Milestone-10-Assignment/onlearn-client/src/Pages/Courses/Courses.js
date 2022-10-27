import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet, useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import SideNav from "../Shared/SideNav/SideNav";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="d-flex">
      <div className="w-25">
        <SideNav></SideNav>
      </div>
      <div className="w-75">
        <Row className="mx-auto">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Courses;
