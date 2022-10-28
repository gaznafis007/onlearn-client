import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const [error, setError] = useState({});
  const { googleSignIn, facebookSignIn, userSignIn, dark } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error);
        console.log(error);
        toast.error(error.message);
      });
  };
  const handleFacebookSignIn = () => {
    facebookSignIn(facebookProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  return (
    <Row>
      <Col lg="8" md="10" className="mx-auto">
        <Card>
          <Card.Title>
            <h2 className="p-2 text-center">Please Log in</h2>
          </Card.Title>
          <Card.Body>
            <Form onSubmit={handleSignIn}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
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

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Text>
                  New to our site? Please <Link to="/signup">Sign up</Link>
                </Form.Text>
              </Form.Group>

              <Button
                size="md"
                className="btn d-block text-center mx-auto"
                type="submit"
              >
                Login
              </Button>
              <p className="text-center">or</p>
              <Button
                onClick={handleGoogleSignIn}
                className=" d-block text-center mx-auto my-2"
                variant="outline-success"
              >
                <FaGoogle /> Sign in with Google
              </Button>
              <Button
                onClick={handleFacebookSignIn}
                className="d-block text-center mx-auto my-2"
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

export default Login;
