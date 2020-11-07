import React from "react";
import { TextField } from "@material-ui/core";

import SelectComponent from "../select/select.component";

import "./input.styles.scss";

const InputComponent = ({
  label,
  name,
  placeholder = "",
  value = "",
  searchVal = "",
  onChange,
  required = false,
  type = "text",
  error = false,
  selectData,
  labelPos = "default",
  onSelectSearch,
  onSelect,
  className,
}) => {
  let selectOptions = selectData;
  if (
    type === "autocomplete" &&
    !selectOptions.filter((option) =>
      option.value.trim().toLowerCase().includes(value.trim().toLowerCase())
    ).length
  ) {
    selectOptions.push({
      value: value.trim().toLowerCase(),
      label: value.trim(),
    });
  }
  return (
    <div
      className={`${
        labelPos === "default"
          ? "input-container"
          : "input-container-side-label"
      } ${className}`}
    >
      {type === "select" ? (
        <SelectComponent
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          searchVal={searchVal}
          data={selectData}
          onSearch={onSelectSearch}
          onSelect={onSelect}
          label={label}
          error={error}
        />
      ) : type === "date" ? (
        <TextField
          label={label}
          variant="outlined"
          value={value}
          error={error}
          onChange={onChange}
          required={required}
          type={type}
          InputLabelProps={{
            shrink: true,
          }}
        />
      ) : (
        <TextField
          label={label}
          variant="outlined"
          value={value}
          error={error}
          onChange={onChange}
          required={required}
          type={type}
          multiline={type === "textbox"}
        />
      )}
      {required && error && (
        <div className="error-msg">This field is required!</div>
      )}
    </div>
  );
};

export default InputComponent;
