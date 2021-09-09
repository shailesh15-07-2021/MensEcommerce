import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import { listCategories } from "../../../Redux/Action/CategoryAction";
import Loader from "../../Shared/Loader";
import Message from "../../Shared/Message";
import { Link } from "react-router-dom";
import Search from "../../Layout/Search";
import { Route } from "react-router-dom";

const Category = () => {
  const dispatch = useDispatch();
  const [cate, setCate] = useState(false);
  const CategoryList = useSelector((state) => state.CategoryList);
  const { loading, error, categories } = CategoryList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  // console.log(cate);
  const openCategory = () => {
    setCate(!cate);
  };
  if (cate === true) {
    var as = { display: "none" };
  } else {
    as = { display: "block" };
  }
  const cart = useSelector((state) => state.cart);

  // console.log(cart);

  //fun for decimal
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  cart.itemsPrice = addDecimal(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  cart.shippingPrice = addDecimal(cart.cartItems < 500 ? 0 : 50);
  cart.taxPrice = addDecimal(Number((0.18 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const loadProducts = (id) => {
    console.log(id);
  };
  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero__search md-6">
              <div className="hero__search__form ml-6">
                <Route render={({ history }) => <Search history={history} />} />
              </div>
            </div>

            <div
              className="hero__item set-bg"
              style={{
                backgroundImage: `url(
                    "https://source.unsplash.com/1600x900/?fashion,man-fashion"
                  )`,
                backgroundRepeat: "no-repeat",
                color: "#fff",
              }}
            >
              <div className="hero__text">
                <span style={{ color: "orange" }}>Fashion Era</span>
                <h2 style={{ color: "orange" }}>Latest FASHIONABLE Products</h2>

                <Link
                  to="/products"
                  className="primary-btn"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
