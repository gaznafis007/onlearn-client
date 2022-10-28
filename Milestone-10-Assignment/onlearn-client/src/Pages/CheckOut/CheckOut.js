import React from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const CheckOut = () => {
  useTitle("Checkout");
  const { name, course_img, course_details, price, mentor } = useLoaderData();
  const vat = price * 0.1;
  const total = price + vat;
  const handlePurchase = () => {
    toast.success("Congratulations You successfully enrolled this Course");
  };
  return (
    <Row className="mx-auto justify-content-center">
      <Col lg="3">
        <Card>
          <Card.Img variant="top" src={course_img} />
          <Card.Body>
            <Card.Title className="my-2">Course Title: {name}</Card.Title>
            <Card.Subtitle>Mentor: {mentor}</Card.Subtitle>
            <Card.Text className="my-2">{course_details}</Card.Text>
          </Card.Body>
          <Card.Footer>Price: {price}$</Card.Footer>
        </Card>
      </Col>
      <Col lg="3">
        <Card>
          <Card.Body>
            <ListGroup>
              <Card.Title className="text-center">Receipt</Card.Title>
              <ListGroupItem className="d-flex justify-content-between">
                <p>Course name:</p>
                <p>{name}</p>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                <p>Price:</p>
                <p>{price}$</p>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                <p>Vat (10%):</p>
                <p>{vat.toFixed(2)}$</p>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                <p>Grand Total:</p>
                <p>{total.toFixed(2)}$</p>
              </ListGroupItem>
            </ListGroup>
            <button
              onClick={handlePurchase}
              className="mt-3 mx-auto text-center d-block btn btn-primary"
            >
              Buy Now
            </button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CheckOut;
