import React from 'react';
import { Carousel } from 'react-bootstrap';

// Update these slides with your own hero images, titles, prices, and button links
const slides = [
  {
    image: '/images/products/sonyXb910n-1.png',
    title: 'Sony WH-XB910N',
    description: 'Give Your Favourite Music A Boost.',
    price: '₹13,489',
    originalPrice: '₹19,990',
    buttonText: 'Shop Now'
  },
  {
    image: '/images/products/boat410-1.png',
    title: 'boAt Rockerz 518',
    description: 'Experience Pure Sound.',
    price: '₹1,299',
    originalPrice: '₹3,990',
    buttonText: 'Shop Now'
  },
  {
    image: '/images/products/jbl660nc-1.png',
    title: 'JBL Live 660NC',
    description: 'Keep the noise out, or in. You choose.',
    price: '₹9,999',
    originalPrice: '₹14,999',
    buttonText: 'Shop Now'
  }
];

const HeroSlider = () => (
  <Carousel fade indicators={true} controls={true} interval={3500} className="hero-carousel">
    {slides.map((slide, idx) => (
      <Carousel.Item key={idx}>
        <div style={{
          minHeight: "460px",
          background: "#191a1e",
          display: "flex",
          alignItems: "center",
          padding: "60px 0"
        }}>
          <div className="container d-flex align-items-center">
            <div className="col-lg-6 text-light p-4">
              <div style={{ fontSize: "18px", color: "#bbb" }}>{slide.title}</div>
              <h1 style={{ fontWeight: 700 }}>{slide.description}</h1>
              <div className="my-3">
                <span style={{ fontSize: "2rem", fontWeight: 600 }}>{slide.price}</span>
                <span className="text-decoration-line-through ms-2" style={{ color: "#888" }}>{slide.originalPrice}</span>
              </div>
              <button className="btn btn-danger px-4 py-2">{slide.buttonText}</button>
            </div>
            <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
              <img src={slide.image} alt={slide.title} className="img-fluid" style={{ maxHeight: "320px" }} />
            </div>
          </div>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default HeroSlider;
