import React from "react";

const SearchFilter = ({ searchQuery, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search author.."
      />
    </div>
  );
};

export default SearchFilter;