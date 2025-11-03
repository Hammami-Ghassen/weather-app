import React, { useState } from "react";
import "../styles/SearchBar.css";

export default function SearchBar({ onChange }) {
  const [query, setQuery] = useState('');

  return (
    <div className="search-container">
      <form
        className="search-form"
        onChange={(e) => {
          e.preventDefault();
          onChange(query);
        }}
      >
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}
