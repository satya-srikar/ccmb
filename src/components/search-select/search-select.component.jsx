import React from "react";

import "./search-select.styles.scss";

const SearchSelectComponent = ({ value, data, onSearch }) => (
  <div className="search-select-component">
    <div className="search-select-component--input"></div>
    <div className="search-select-component--result"></div>
  </div>
);

export default SearchSelectComponent;
