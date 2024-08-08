import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/CartModal";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
