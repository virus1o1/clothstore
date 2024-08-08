import React from 'react';
import "./CartModal.css";
import { Modal, Button } from 'react-bootstrap';
import { FiShoppingBag } from 'react-icons/fi';

const CartModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your cart is empty. Add some items to your cart!</p>
        {/* Add cart items here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary rounded-3" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" className='custom-button'>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
