import React from "react";
import { Card, Spinner } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaPeopleCarry } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CourseDetails = () => {
  const { dark, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const courseData = useLoaderData();
  const {
    id,
    category,
    name,
    course_img,
    duration,
    total_enroll,
    mentor,
    price,
    course_details,
  } = courseData;
  if (loading) {
    return (
      <div className="mx-auto w-50 text-center">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
      </div>
    );
  }
  return (
    <div className="mx-auto w-75">
      <Card
        className={dark ? "bg-dark text-white" : "bg-transparent text-dark"}
      >
        <Card.Img variant="top" src={course_img} />
        <Card.Title className="ms-2 mt-4">{name}</Card.Title>
        <Card.Subtitle className="ps-2 w-100 d-flex">
          <p className="me-2">Mentor: {mentor}</p>
          <p className="ms-2">
            Total Enroll <FaPeopleCarry></FaPeopleCarry> : {total_enroll}
          </p>
        </Card.Subtitle>
        <Card.Body>
          <Card.Text>{course_details}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-evenly">
          <p className="fw-semibold">Course Category: {category}</p>
          <p className="fw-semibold">Course Duration: {duration}</p>
          <p className="fw-semibold">Price: {price}$</p>
          <button
            onClick={() => navigate(`/course/${id}/checkout`)}
            className="btn btn-primary"
          >
            Enroll now!
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CourseDetails;
