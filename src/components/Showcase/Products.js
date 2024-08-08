import React from 'react';
import './Products.css';
import show1 from "../../assets/Images/show1.jfif";
import show2 from "../../assets/Images/show2.jfif";
import show3 from "../../assets/Images/show3.jfif";
import show4 from "../../assets/Images/show4.jfif";

const products = [
  {
    img: show1,
    title: "Plain White Shirt",
    price: "$29.00"
  },
  {
    img: show2,
    title: "Denim Jacket",
    price: "$69.00"
  },
  {
    img: show3,
    title: "Black Polo Shirt",
    price: "$49.00"
  },
  {
    img: show4,
    title: "Blue Sweatshirt",
    price: "$79.00"
  }
];

const Products = () => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4">
            <div className="card h-100">
              <img src={product.img} className="card-img-top" alt={product.title} />
              <div className="card-body text-center">
                <h5 className="card-title fs-6 fw-bold">{product.title}</h5>
                <p className="card-text">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
