import React from "react";

function SearchBar({search, setSearch}) {
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="search">
      <input type="text" className="searchTerm" value={search} onChange={handleSearch}/>
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
