import React from "react";
import productsData from "../assets/productsData";

const FeaturedProducts = () => (
  <div className="container py-4 bg-dark">
    <h5 className="text-center mb-4" style={{ color: "#d4d7dd" }}>Featured Products</h5>
    <div className="d-flex flex-wrap justify-content-center">
      {productsData
        .filter(p => p.tag === "featured-product")
        .slice(0,5)
        .map(product => (
        <div key={product.id} className="card m-2 shadow" style={{ minWidth: "150px", maxWidth: "180px", background: "#232326", borderRadius: "12px" }}>
          <img
            src={product.images[0]}
            alt={product.title}
            className="card-img-top p-3"
            style={{ height: "110px", objectFit: "contain" }}
          />
          <div className="card-body text-center py-3">
            <span className="fw-bold d-block" style={{ fontSize: '0.95rem', color: "#fff" }}>{product.title}</span>
            <span className="text-danger fw-bold">&#8377;{product.finalPrice}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturedProducts;
