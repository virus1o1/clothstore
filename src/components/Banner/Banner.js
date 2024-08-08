import React from "react";
import "./Banner.css";
import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="d-flex justify-content-end banner-content text-center">
        <div className="w-50 px-xxl-5">
          <h2 className="banner-title">STYLIST PICKS BEAT THE HEAT</h2>
          <button className="btn btn-danger">SHOP NOW</button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
