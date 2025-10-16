 import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Footer from './components/Footer';
import HeroSlider from './components/HeroSlider';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<> <HeroSlider/> <ProductList /></> } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
