import React from "react";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import CourseCard from "../CourseCard/CourseCard";
import SideNav from "../Shared/SideNav/SideNav";

const Courses = () => {
  const { dark } = useContext(AuthContext);
  const courses = useLoaderData();
  useTitle("Courses");
  return (
    <div className={`d-flex ${dark ? "bg-dark" : "bg-transparent"}`}>
      <div className="w-25 mt-2 px-2">
        <SideNav></SideNav>
      </div>
      <div className="w-75">
        <Row className="mx-auto">
          {/* {courses.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))} */}
          <Outlet></Outlet>
        </Row>
      </div>
    </div>
  );
};

export default Courses;
