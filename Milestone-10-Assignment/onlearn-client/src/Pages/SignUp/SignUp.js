import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const {
    googleSignIn,
    facebookSignIn,
    userSignUp,
    getProfile,
    verifyEmail,
    logOut,
  } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const displaName = form.name.value;
    const photoURL = form.img.value;
    const email = form.email.value;
    const password = form.password.value;
    userSignUp(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        getProfile(displaName, photoURL);
        verifyEmail();
        if (user.emailVerified) {
          logOut();
          navigate("/");
        } else {
          toast.caller(
            "Please verify your email check email at inbox or spam folder"
          );
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((res) => {
        const user = res.user;
        navigate("/");
      })
      .catch((error) => {
        setError(error);
      });
  };
  const handleFacebookSignIn = () => {
    facebookSignIn(facebookProvider)
      .then((res) => {
        const user = res.user;
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Row>
      <Col lg="8" md="10" className="mx-auto">
        <Card>
          <Card.Title>
            <h2 className="py-2 text-center">Signup Here</h2>
          </Card.Title>
          <Card.Body>
            <Form onSubmit={handleSignUp}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formimg">
                <Form.Label>Image Url</Form.Label>
                <Form.Control
                  type="name"
                  name="img"
                  placeholder="Enter image url"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Terms and conditions " />
              </Form.Group>
              <Form.Group>
                <Form.Text>
                  Already have an account? Please <Link to="/login">Login</Link>
                </Form.Text>
              </Form.Group>
              {error ? <p>{error.message}</p> : ""}
              <Button
                size="md"
                className="btn d-block text-center mx-auto"
                type="submit"
              >
                Sign up
              </Button>
              <p className="text-center">or</p>
              <Button
                onClick={handleGoogleSignIn}
                className="btn d-block  text-center mx-auto my-2"
                variant="outline-success"
              >
                <FaGoogle /> Sign in with Google
              </Button>
              <Button
                onClick={handleFacebookSignIn}
                className="btn d-block  text-center mx-auto my-2"
                variant="outline-primary"
              >
                <FaFacebook /> Sign in with Facebook
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SignUp;
