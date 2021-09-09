import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./ChannelPartnerProfile.css";
import {
  loadchannelPartnerDetail,
  updatechannelPartnerDetail,
  addchannelPartnerDetail,
} from "../../Redux/Action/ChannelPartnerAction";

const ChannelPartnerProfile = () => {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    address: "",
    landMark: "",
    city: "",
    stateName: "",
    country: "",
    postalCode: "",
    accountNumber: "",
    bank: "",
    IFSC_Code: "",
  });
  const {
    address,
    landMark,
    city,
    stateName,
    country,
    postalCode,
    accountNumber,
    bank,
    IFSC_Code,
  } = state;

  const userLogin = useSelector((state) => state.userLogin);
  const { userResult } = userLogin;

  useEffect(() => {
    dispatch(loadchannelPartnerDetail(userResult.id));
  }, []);

  const singledata = useSelector((state) => state.channelPartner.singledata);
  console.log(singledata);

  let history = useHistory();
  let dispatch = useDispatch();

  useEffect(() => {
    if (singledata) {
      setState({ ...singledata });
    }
  }, [singledata]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address || !postalCode) {
      setError("Please input all input Field");
    } else {
      dispatch(updatechannelPartnerDetail(state, userResult.id));
      history.push("/products-channel");
    }
  };

  return (
    <div className="container">
      <div className="main-body">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="main-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/products-channel">Get Products</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              User Profile
            </li>
          </ol>
          <h2>Channel Partner</h2>
        </nav>
        {/* /Breadcrumb */}

        <div className="row gutters-sm">
          <div className="col-md-4 mb-3 ">
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    // src={userResult.avatar}
                    alt={userResult.name}
                    className="rounded-circle"
                    width={150}
                  />
                  <div className="mt-3">
                    <h4>{userResult.name}</h4>
                    <p className="text-secondary mb-1">{userResult.email}</p>
                    <p className="text-secondary mb-1">{userResult.contact}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-4 ">
              <h5 className="my-2">Download Products Links</h5>
              <div className="download">
                <Link
                  to="/products-channel"
                  className="btn btn-success btn-block my-4"
                >
                  Get Products
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Enter Your Full Address"
                        value={address || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Landmark</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        name="landMark"
                        className="form-control"
                        placeholder="Landmark"
                        value={landMark || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">City</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City Name"
                        name="city"
                        value={city || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">State</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="State Name"
                        name="stateName"
                        value={stateName || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Country</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Country Name"
                        name="country"
                        value={country || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Postal Code</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postal Code"
                        name="postalCode"
                        value={postalCode || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Account Number</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Bank Account Number"
                        name="accountNumber"
                        value={accountNumber || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Bank Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Bank"
                        name="bank"
                        value={bank || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">IFSC Code</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="IFSC Code"
                        name="IFSC_Code"
                        value={IFSC_Code || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <Button
                      type="submit"
                      className="btn btn-success form-control"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelPartnerProfile;
