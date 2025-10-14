import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';

const Header = () => (
  <header className="d-flex justify-content-between align-items-center p-3 bg-light">
    <h1 className="logo">Tech Shop</h1>
    <div className="d-flex align-items-center">
      <SearchBar />
      <Link to="/cart" className="btn btn-outline-primary ms-2">Cart</Link>
      <UserProfile />
    </div>
  </header>
);

export default Header;
