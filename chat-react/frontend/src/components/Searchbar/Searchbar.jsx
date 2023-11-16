import React, { useState } from 'react';
import './Searchbar.css'
import {lupa} from '../../assets'

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className='searchbar-container'>
      <input
        className='searchbar'
        type="text"
        placeholder="Buscar..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        <img src={lupa} alt="buscar"/>
      </button>
    </div>
  );
}

export default SearchBar;
