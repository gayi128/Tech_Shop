// SignupModal.js
import React from 'react';
const SignupModal = ({ show, handleClose }) => (
  show ? (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign Up</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <form>
              <input type="text" placeholder="Username" className="form-control mb-2" />
              <input type="email" placeholder="Email" className="form-control mb-2" />
              <input type="password" placeholder="Password" className="form-control mb-2" />
              <button type="submit" className="btn btn-secondary">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null
);

export default SignupModal;
