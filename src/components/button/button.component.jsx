import React from "react";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, red } from "@material-ui/core/colors";

import "./button.styles.scss";

const SafeButton = withStyles({
  root: {
    backgroundColor: green[500],
    padding: "6px 12px",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    "&:hover": {
      backgroundColor: green[700],
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    },
    "&:active": {
      boxShadow:
        "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  btnWidth: {
    width: "100%",
  },
}));

const DangerButton = withStyles({
  root: {
    backgroundColor: red[500],
    padding: "6px 12px",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    "&:hover": {
      backgroundColor: red[700],
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    },
    "&:active": {
      boxShadow:
        "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
    },
  },
})(Button);

const ButtonComponent = ({
  type = "button",
  btnType = "default",
  onClick,
  children,
  className,
}) => {
  const classes = useStyles();
  return (
    <div className={className}>
      {btnType === "safe" && (
        <SafeButton className={classes.btnWidth} type={type} onClick={onClick}>
          {children}
        </SafeButton>
      )}
      {btnType === "danger" && (
        <DangerButton
          className={classes.btnWidth}
          type={type}
          onClick={onClick}
        >
          {children}
        </DangerButton>
      )}
      {btnType === "primary" && (
        <Button
          className={classes.btnWidth}
          type={type}
          onClick={onClick}
          color="primary"
          variant="contained"
        >
          {children}
        </Button>
      )}
      {btnType === "default" && (
        <Button
          className={classes.btnWidth}
          type={type}
          onClick={onClick}
          variant="contained"
        >
          {children}
        </Button>
      )}
    </div>
  );
};

export default ButtonComponent;
//   {submit ? (
//     <button
//       onClick={onClick}
//       type="submit"
//       className={`button button-${type}`}
//     >
//       {children}
//     </button>
//   ) : (
//     <button
//       onClick={onClick}
//       type="button"
//       className={`button button-${type}`}
//     >
//       {children}
//     </button>
//   )}
