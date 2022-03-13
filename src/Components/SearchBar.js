import React from "react";

const SearchBar = ({ filterText, onFilterTextChange, inStockOnly, onInStockOnlyChange }) => {
  
  const handleChange = (e) => {
    console.log(e)
        onFilterTextChange(e.target?.value)
  }
  
      return (
        <form>
          <input type="text" placeholder="Search..." onChange={handleChange} />
          <input type="checkbox" checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange.toUpperCase(e.target.checked)} />
          

          <p>
          {' '}
            Only show products in stock
          </p>
        </form>
      );
}

export default SearchBar;