import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redux/Action/AuthAction";
import Message from "../Shared/Message";
import Loader from "../Shared/Loader";
import FormContainer from "../Shared/FormContainer";

const Register = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/login";

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/profile");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    //Dispatch
    if (password !== password2) {
      setMessage("Password did not match");
    } else {
      dispatch(register(name, email, password, password2, contact, role));
      history.push("/login");
    }
  };

  return (
    <div>
      <FormContainer>
        <h1>Register New User</h1>
        {error && <Message varient="danger">{error}</Message>}
        {loading && <Loader />}
        {message && <Message varient="danger">{message}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="cpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your Confirm Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="contact">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="contact">
            <Form.Label>Role</Form.Label>
            <select
              type="text"
              className="form-control"
              name="role"
              value="role"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select</option>
              <option value="user">User</option>
              <option value="channel-partner">Channel Partner</option>
            </select>
          </Form.Group>

          <Button type="submit" varient="primary">
            SIGN-UP
          </Button>
        </Form>

        <Row>
          <Col>
            Already Have A Account ? &nbsp;
            <Link to={redirect ? `login?redirect=${redirect}` : "/login"}>
              Login
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default Register;
