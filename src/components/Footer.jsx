import React from "react";

const Footer = () => (
  <footer className="bg-dark text-light pt-4 pb-2 mt-5">
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-3 col-sm-6 mb-3">
          <h5 className="fw-bold">Tech-Shop</h5>
          <div style={{fontSize: "15px"}}>
            Subscribe to our  Email alerts to receive<br />
            early discount offers, and new products info.
          </div>
          <div className="input-group my-3">
            <input type="email" className="form-control bg-dark text-light border-secondary" placeholder="Email Address" style={{fontSize: "14px"}} /><br/>
            <button className="btn btn-danger px-3">Subscribe</button>
          </div>
        </div>

        <div className="col-md-2 col-sm-6 mb-3">
          <h6 className="fw-bold">Help</h6>
          <ul className="list-unstyled" style={{fontSize: "15px"}}>
            <li>FAQs</li>
            <li className="text-light">Track Order</li>
            <li className="text-light">Cancel Order</li>
            <li className="text-light">Return Order</li>
            <li className="text-light">Warranty Info</li>
          </ul>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <h6 className="fw-bold">Policies</h6>
          <ul className="list-unstyled" style={{fontSize: "15px"}}>
            <li>Return Policy</li>
            <li>Security</li>
            <li>Sitemap</li>
            <li className="text-light">Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="col-md-2 col-sm-6 mb-3">
          <h6 className="fw-bold">Company</h6>
          <ul className="list-unstyled" style={{fontSize: "15px"}}>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Service Centres</li>
            <li>Careers</li>
            <li className="text-light">Affiliates</li>
          </ul>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center border-top border-secondary pt-3" style={{fontSize:"15px"}}>
        <span>2025 | All Rights Reserved &copy;.</span>
        <div>
          <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
