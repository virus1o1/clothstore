import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container className="text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
