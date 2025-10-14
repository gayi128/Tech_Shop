import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../assets/products';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setQuery(e.target.value);
    setResults(products.filter(p => p.title.toLowerCase().includes(e.target.value.toLowerCase())));
  };
  return (
    <div className="search-bar position-relative">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className="form-control"
      />
      {query && (
        <div className="search-results position-absolute bg-white border w-100">
          {results.map(p => (
            <div
              key={p.id}
              className="p-2 search-result-item"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/product/${p.id}`)}
            >
              {p.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
