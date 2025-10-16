import React, { useState } from "react";
import productsData from "../assets/productsData";

const categories = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];

const TopProducts = () => {
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All"
    ? productsData
    : productsData.filter(p => p.category === selected);

  return (
    <div className="container py-4 bg-dark">
      <h5 className="text-center mb-2" style={{ color: "#d4d7dd" }}>Top Products</h5>
      <div className="d-flex justify-content-center mb-3">
        {categories.map(cat => (
          <button
            key={cat}
            className={`btn mx-2 ${selected === cat ? "btn-danger" : "btn-secondary"}`}
            onClick={() => setSelected(cat)}
          >{cat}</button>
        ))}
      </div>
      <div className="row">
        {filtered.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 p-2" style={{ background: "#232326", borderRadius: "10px" }}>
              <img
                src={product.images[0]}
                className="mx-auto d-block"
                alt={product.title}
                style={{ height: "120px", objectFit: "contain" }}
              />
              <div className="card-body pb-4">
                <h6 className="card-title text-light">{product.title}</h6>
                <div className="pb-2">
                  <span className="fw-bold">&#8377;{product.finalPrice}</span>
                  <span className="text-decoration-line-through ms-2 text-muted">&#8377;{product.originalPrice}</span>
                </div>
                <button className="btn btn-success w-100" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
