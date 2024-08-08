import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiUser, FiShoppingBag } from "react-icons/fi";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Navbar, Container, Nav, Button, Modal, Form } from "react-bootstrap";
import CartModal from "../Cart/CartModal";
import "./Header.css";
import logo1 from "../../assets/Images/logo1.png";
import logo2 from "../../assets/Images/logo2.png";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [navExpanded, setNavExpanded] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // Track sign-in status
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNavExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    if (navExpanded) {
      setNavExpanded(false);
    }
  };

  const handleProfileClick = () => {
    if (!isSignedIn) {
      setShowSignIn(true);
    } else {
      navigate("/profile");
    }
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Dummy sign-in logic
    if (email === "test@gmail.com" && password === "123") {
      setIsSignedIn(true);
      setShowSignIn(false);
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="px-4 custom-bg"
        expanded={navExpanded}
        onToggle={() => setNavExpanded(!navExpanded)}
        ref={menuRef}
      >
        <Container fluid>
          <Link to="/" className="navbar-brand">
            <img
              src={isMobile ? logo2 : logo1}
              alt="Logo"
              style={{ height: "40px" }}
            />
          </Link>
          <div className="d-flex align-items-center d-lg-none ms-auto">
            <FiUser className="custom-icon rounded-1 fs-5" onClick={handleProfileClick} />
            <FiShoppingBag
              className="custom-icon rounded-1 fs-5"
              onClick={() => setShowCart(true)}
            />
            <Navbar.Toggle aria-controls="navbarNav">
              <IoReorderThreeOutline className="fs-2" />
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={`text-uppercase mx-2 ${
                  location.pathname === "/" ? "active" : ""
                }`}
                onClick={handleLinkClick}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={`text-uppercase mx-2 ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                onClick={handleLinkClick}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contactus"
                className={`text-uppercase mx-2 ${
                  location.pathname === "/contactus" ? "active" : ""
                }`}
                onClick={handleLinkClick}
              >
                Contact Us
              </Nav.Link>
              <Button
                className="mx-2 custom-signin fs-6 fw-bold"
                onClick={() => setShowSignIn(true)}
              >
                SIGN IN
              </Button>
            </Nav>
            <div className="d-none d-lg-flex align-items-center ms-3">
              <span className=" mouse-pointer custom-icon">
                <FiUser className="mx-2" onClick={handleProfileClick} />
              </span>
              <span className=" mouse-pointer custom-icon">
                <FiShoppingBag className="mx-2" onClick={() => setShowCart(true)} />
              </span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CartModal show={showCart} handleClose={() => setShowCart(false)} />

      <Modal
        show={showSignIn}
        onHide={() => setShowSignIn(false)}
        centered
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                className="rounded-0"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                className="rounded-0"
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3 custom-button"
            >
              Sign In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
