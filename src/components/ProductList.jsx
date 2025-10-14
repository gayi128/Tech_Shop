import React from 'react';
import products from '../productsData';
import { Link } from 'react-router-dom';

const ProductList = () => (
  <div className="row m-3">
    {products.map(product => (
      <div key={product.id} className="col-md-4 mb-4">
       <div className="card">
  <img src={product.images} className="card-img-top" alt={product.title} />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
  </div>
</div>

      </div>
    ))}
  </div>
);

export default ProductList;
