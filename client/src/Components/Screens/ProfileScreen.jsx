import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Shared/Message";
import Loader from "../Shared/Loader";
import {
  getUserDetails,
  updateUserProfile,
} from "../../Redux/Action/AuthAction";
import {
  listMyOrders,
  cancelOrder,
  getOrderDetails,
} from "../../Redux/Action/OrderAction";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userResult } = userLogin;
  // console.log(userResult);

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const listMyOrder = useSelector((state) => state.listMyOrder);
  const { loading: loadingOrders, orders, error: errorOrders } = listMyOrder;

  // console.log(orders.orderItems);

  useEffect(() => {
    if (!userResult) {
      history.push("/login");
    } else {
      if (!userResult.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(userResult.name);
        setEmail(userResult.email);
        setContact(userResult.contact);
      }
    }
  }, [history, userResult, user, dispatch]);

  useEffect(() => {
    dispatch(listMyOrders({ userResult }));
  }, [dispatch, userResult]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    if (password !== confirmPassword) {
      alert("Password Did Not Match");
    } else {
      dispatch(
        updateUserProfile({ id: user._id, name, email, contact, password })
      );
    }
  };

  const productData = (id) => {
    dispatch(getOrderDetails(id));
    history.push(`/order-detail/${id}`);
  };

  const cancelOrderHandler = (id) => {
    dispatch(cancelOrder(id));
  };

  let i = 1;
  return (
    <>
      <section
        className="breadcrumb-section set-bg my-4"
        style={{
          backgroundImage: `url("http://localhost:3000/img/breadcrumb01.jpg")`,
          backgroundRepeat: "no-repeat",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2 style={{ color: "#fff" }}>
                  {userResult.name} Profile Details
                </h2>
                <div className="breadcrumb__option">
                  <Link style={{ color: "#fff" }} to="/">
                    Home
                  </Link>
                  <span>Profile Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Row>
        <Col md={3}>
          <h3
            className="my-3 text-center py-2"
            style={{ background: "#3D077B", color: "#fff" }}
          >
            Update Details
          </h3>
          {error && <Message varient="danger">{error}</Message>}
          {success && <Message variant="success">Profile Updated</Message>}
          {loading && <Loader />}
          {message && <Message variant="danger">{message}</Message>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="contact">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="enter mobile number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>COnfirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button
              type="submit"
              className="btn btn-primary btn-block btn-md"
              style={{ fontSize: "15px" }}
            >
              Update
            </Button>
          </Form>
        </Col>
        <Col md={9} style={{ overflow: "-moz-hidden-unscrollable" }}>
          <h3
            className="my-3 py-2 text-center"
            style={{ background: "#3D077B", color: "#fff" }}
          >
            My Orders
          </h3>
          {loadingOrders ? (
            <Loader />
          ) : errorOrders ? (
            <Message variant="danger">{errorOrders}</Message>
          ) : (
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <td className="text-center"></td>
                  <td className="text-center">ORDER DATE</td>
                  <td className="text-center">TOTAL</td>
                  <td className="text-center">PAID</td>
                  <td className="text-center">DELIVERD</td>
                  <td className="text-center"></td>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td className="text-center">{i++}</td>
                    <td className="text-center">
                      {order.createdAt.substring(0, 10)}
                    </td>
                    <td className="text-center">{order.totalPrice}</td>
                    <td className="text-center">
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <i className="fa fa-times" style={{ color: "red" }}></i>
                      )}
                    </td>
                    <td className="text-center">
                      {order.isDeleverd ? (
                        order.deleverdAt.substring(0, 10)
                      ) : (
                        <i className="fa fa-times" style={{ color: "red" }}></i>
                      )}
                    </td>
                    <td className="text-center">
                      <Button
                        className="btn btn-primary mr-2 "
                        onClick={() => productData(order._id)}
                      >
                        Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </>
  );
};

export default ProfileScreen;
