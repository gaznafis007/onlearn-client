import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import SideNav from "../Shared/SideNav/SideNav";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="d-flex">
      <div>
        <SideNav></SideNav>
      </div>
      <div className="w-100">
        <Row>
          <Col lg="6">
            {courses.map((course) => (
              <CourseCard key={course.id}></CourseCard>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Courses;
