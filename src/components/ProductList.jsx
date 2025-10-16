import React, { useContext } from "react";
import productsData from "../assets/productsData";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container py-4 bg-dark"> 
    <h5 className="text-center mb-2" style={{ color: "#d4d7dd" }}>All Products</h5>
    <div className="row m-3">
      {productsData.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card h-100 bg-dark" style={{ color: "#d4d7dd" }}>
            <img
              src={product.images[0]}
              alt={product.title}
              className="card-img-top"
              style={{ height: "200px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.info}</p>
              <p className="card-text">
                <strong>&#8377;{product.finalPrice}</strong>
              </p>
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

export default ProductList;
