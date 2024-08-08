import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Products from "../Showcase/Products";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <div className="container text-center m-4">
          <h2 className="fs-3 fw-bold">Discover NEW Arrivals</h2>
          <p className="custom-slog">Recent added shirts!</p>
        </div>
        <Products />
      </div>
    </>
  );
};

export default Home;
