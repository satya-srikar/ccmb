import React, { useState } from "react";

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
    <div
      className="select-component"
      onFocus={() => setFocus(true)}
      onBlur={() =>
        setTimeout(() => {
          if (focus) setFocus(false);
        }, 200)
      }
    >
      <div className="select-input">
        {required ? (
          <input
            type="text"
            name={name}
            value={searchVal}
            placeholder={`${placeholder}`}
            required
            onChange={(e) => {
              if (!focus) setFocus(true);
              onSearch(e);
            }}
          />
        ) : (
          <input
            type="text"
            name={name}
            value={searchVal}
            placeholder={placeholder}
            onChange={(e) => {
              if (!focus) setFocus(true);
              onSearch(e);
            }}
          />
        )}
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
