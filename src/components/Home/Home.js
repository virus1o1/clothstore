import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Products from "../Showcase/Products";
import { FaShippingFast, FaRedo, FaFingerprint } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <div className="custom-container">
          <h1>Discover NEW Arrivals</h1>
          <p>recent added shirts!</p>
        </div>
        <Products />
        <ul className="list-unstyled d-flex flex-wrap justify-content-between mt-4 mb-4">
          <li className="d-flex align-items-start col-lg-3 col-md-6 mb-4 p-3">
            <FaShippingFast size={30} className="icon-color me-3" />
            <div>
              <h5 className="title mb-1">FREE SHIPPING</h5>
              <p className="text-color mb-0 pe-5">
                Enjoy free shipping on all orders above $100
              </p>
            </div>
          </li>
          <li className="d-flex align-items-start col-lg-3 col-md-6 mb-4 p-3">
            <MdOutlineSupport size={30} className="icon-color me-3" />
            <div>
              <h5 className="title mb-1">SUPPORT 24/7</h5>
              <p className="text-color mb-0 pe-5">
                Our support team is there to help you for queries
              </p>
            </div>
          </li>
          <li className="d-flex align-items-start col-lg-3 col-md-6 mb-4 p-3">
            <FaRedo size={30} className="icon-color me-3" />
            <div>
              <h5 className="title mb-1">30 DAYS RETURN</h5>
              <p className="text-color mb-0 pe-5">
                Simply return it within 30 days for an exchange
              </p>
            </div>
          </li>
          <li className="d-flex align-items-start col-lg-3 col-md-6 mb-4 p-3">
            <FaFingerprint size={30} className="icon-color me-3" />
            <div>
              <h5 className="title mb-1">100% PAYMENT SECURE</h5>
              <p className="text-color mb-0 pe-5">
                Our payments are secured with 256 bit encryption
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
