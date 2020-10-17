import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

import "./select.styles.scss";

const SelectComponent = ({
  name,
  searchVal,
  placeholder = "",
  required,
  onSearch,
  onSelect,
  data = [],
}) => {
  const [focus, setFocus] = useState(false);
  let filteredData = searchVal
    ? data.filter((option) =>
        option.label
          .toLowerCase()
          .trim()
          .includes(searchVal.toLowerCase().trim())
      )
    : data;
  filteredData = focus ? filteredData : [];
  return (
    <div className="select-component">
      <div className="select-input">
        {required ? (
          <input
            type="text"
            name={name}
            value={searchVal}
            placeholder={`${placeholder}`}
            required
            onChange={onSearch}
          />
        ) : (
          <input
            type="text"
            name={name}
            value={searchVal}
            placeholder={placeholder}
            onChange={onSearch}
          />
        )}
        <div
          onClick={() => setFocus(!focus)}
          className={`icon ${focus ? "closed-icon" : "open-icon"}`}
        >
          {focus ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
        </div>
      </div>
      <div className={`select-options`}>
        {filteredData &&
          filteredData.map((option, index) => {
            return (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  onSelect(name, option.label);
                  setFocus(false);
                }}
                key={index}
                className="select-option"
              >
                {option.label}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SelectComponent;
