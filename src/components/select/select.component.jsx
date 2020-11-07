import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import "./select.styles.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
  },
  list: {
    position: "absolute",
    left: "0",
    zIndex: "2",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    backgroundColor: "#303030",
    marginTop: "-8px",
  },
  hide: {
    display: "none",
  },
}));

const SelectComponent = ({
  name,
  searchVal,
  placeholder = "",
  required,
  onSearch,
  onSelect,
  data = [],
  label,
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
  const classes = useStyles();
  return (
    <div className="select-component">
      <div className="select-input">
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={searchVal}
            name={name}
            onChange={onSearch}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setFocus(!focus)} edge="end">
                  {focus ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={100}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </FormControl>
      </div>
      <List
        className={clsx(classes.list, { [classes.hide]: !filteredData.length })}
      >
        {filteredData.map((option, index) => (
          <ListItem button key={option.value}>
            <ListItemText primary={option.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SelectComponent;
