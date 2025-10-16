import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

  const originalTotal = cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0);
  const finalTotal = cartItems.reduce((acc, item) => acc + item.finalPrice * item.quantity, 0);
  const discount = originalTotal - finalTotal;

  return (
    <div className="container-fluid bg-dark text-light py-4 min-vh-100" style={{fontFamily: 'Verdana'}}>
      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-7">
          <h4 className="mb-4">Tech-Shop</h4>
          <div className="bg-secondary rounded-3 p-4">
            {cartItems.map(item => (
              <div key={item.id} className="row align-items-center mb-4 pb-3 border-bottom border-dark">
                <div className="col-3">
                  <img src={item.images[0]} alt={item.title} className="img-fluid rounded" style={{maxHeight: '90px'}} />
                </div>
                <div className="col-7">
                  <h6>{item.title}</h6>
                  <div className="text-muted">{item.info}</div>
                  <div>
                    <span className="fw-bold h5 text-white">&#8377;{item.finalPrice}</span>
                    <span className="text-decoration-line-through ms-2 text-muted">&#8377;{item.originalPrice}</span>
                  </div>
                  <div className="my-2 d-inline-flex align-items-center bg-dark border rounded">
                    <button className="btn btn-dark px-2 py-0" onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span className="px-3 text-danger fw-bold">{item.quantity}</span>
                    <button className="btn btn-dark px-2 py-0" onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="btn btn-link text-danger p-0 ms-3"
                    onClick={() => removeItem(item.id)} title="Remove">
                    <i className="bi bi-trash"></i> {/* Or use <span>&#128465;</span> for trash icon */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="col-lg-5">
          <div className="bg-secondary rounded-3 p-4 ms-lg-4 mt-4 mt-lg-0">
            <h5>Order Summary ({cartItems.length} items)</h5>
            <div className="d-flex justify-content-between my-2">
              <span>Original Price</span>
              <span>&#8377;{originalTotal}</span>
            </div>
            <div className="d-flex justify-content-between my-2">
              <span>Discount</span>
              <span className="text-success">-&#8377;{discount}</span>
            </div>
            <div className="d-flex justify-content-between my-2">
              <span>Delivery</span>
              <span className="text-success">Free</span>
            </div>
            <hr className="bg-dark"/>
            <div className="d-flex justify-content-between my-2 h5">
              <span>Total Price</span>
              <span>&#8377;{finalTotal}</span>
            </div>
            <button className="btn btn-danger w-100 mt-3">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
