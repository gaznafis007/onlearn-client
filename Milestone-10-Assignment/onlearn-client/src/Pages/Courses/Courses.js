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
    <Row className={`d-flex ${dark ? "bg-dark" : "bg-transparent"}`}>
      <Col lg="4" md="6">
        <div className="mt-2 px-2">
          <SideNav></SideNav>
        </div>
      </Col>
      <Col lg="8" md="6">
        <Row className="mx-auto">
          {/* {courses.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))} */}
          <Outlet></Outlet>
        </Row>
      </Col>
    </Row>
  );
};

export default Courses;
