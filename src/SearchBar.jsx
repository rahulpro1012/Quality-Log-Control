import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center ml-96">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:border-blue-500 w-96 "
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;