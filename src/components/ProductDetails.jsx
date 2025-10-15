import React from 'react';
import products from '../assets/productsData';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  if (!product) return <div>Product not found.</div>;
  return (
    <div className="container m-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.images} alt={product.title} className="img-fluid"/>
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
