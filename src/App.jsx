 import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
