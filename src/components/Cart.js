import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  if (items.length === 0) {
    return (
      <div className="text-center m-5">
        <h2>Cart is empty</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Start Shopping</button>
      </div>
    );
  }
  // Otherwise, display cart items...
  return (
    <div className="container m-4">
      <h2>Your Cart</h2>
      {/* list items here */}
    </div>
  );
};

export default Cart;
