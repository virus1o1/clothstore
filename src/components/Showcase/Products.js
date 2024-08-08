import React from 'react';
import './Products.css';
import show1 from "../../assets/Images/show1.jfif";
import show2 from "../../assets/Images/show2.jfif";
import show3 from "../../assets/Images/show3.jfif";
import show4 from "../../assets/Images/show4.jfif";

const Products = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <img src={show1} className="card-img-top" alt="Plain White Shirt" />
            <div className="card-body text-center">
              <h5 className="card-title fs-6 fw-bold">Plain White Shirt</h5>
              <p className="card-text">$29.00</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <img src={show2} className="card-img-top" alt="Denim Jacket" />
            <div className="card-body text-center">
              <h5 className="card-title fs-6 fw-bold">Denim Jacket</h5>
              <p className="card-text">$69.00</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <img src={show3} className="card-img-top" alt="Black Polo Shirt" />
            <div className="card-body text-center">
              <h5 className="card-title fs-6 fw-bold">Black Polo Shirt</h5>
              <p className="card-text">$49.00</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <img src={show4} className="card-img-top" alt="Blue Sweatshirt" />
            <div className="card-body text-center">
              <h5 className="card-title fs-6 fw-bold">Blue Sweatshirt</h5>
              <p className="card-text">$79.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
