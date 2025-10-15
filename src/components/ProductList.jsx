import productsData from '../assets/productsData';

const ProductList = () => (
  <div className="row m-3">
    {productsData.map(product => (
      <div key={product.id} className="col-md-4 mb-4">
        <div className="card h-100">
          {/* Use first image from images array */}
          <img
            src={product.images[0]}   // eg, "/images/products/jbl660nc-1.png"
            alt={product.title}
            className="card-img-top"
            style={{height: "200px", objectFit: "contain"}}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.info}</p>
            <p className="card-text"><strong>&#8377;{product.finalPrice}</strong></p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProductList;
