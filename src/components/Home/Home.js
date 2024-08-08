import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Products from "../Showcase/Products";

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
        <Products />
      </div>
    </>
  );
};

export default Home;
