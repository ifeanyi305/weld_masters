/* eslint-disable react/prop-types */
import React from 'react';

const Search = ({ onSearch }) => (
  <div className="search-input">
    <input type="search" onChange={onSearch} className="search" placeholder="Search Projects" />
  </div>
);

export default Search;
