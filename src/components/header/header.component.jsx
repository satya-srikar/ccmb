import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { setCurrentUser } from "../../redux/user/user.actions";

import "./header.styles.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HeaderComponent = ({
  currentUser,
  setCurrentUser,
  openDrawer,
  className,
}) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={className}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={openDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link to="/">Home</Link>
        </Typography>
        {currentUser ? (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setCurrentUser(null)}
          >
            <Typography className={classes.title}>Logout</Typography>
          </span>
        ) : (
          <Link to="/login">
            <Typography className={classes.title}>Login</Typography>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
