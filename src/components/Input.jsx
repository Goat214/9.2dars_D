import React from "react";

function Input() {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by name or ingredient..."
        className="search-input"
      />
      <img
        src="/images/icon-search.svg"
        alt="search icon"
        className="search-icon"
      />
    </div>
  );
}

export default Input;
