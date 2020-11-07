import React from "react";
import { Link, withRouter } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  CssBaseline,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import HeaderComponent from "../header/header.component";

import "./layout.styles.scss";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerRoot: {
    display: "flex",
    width: "100vw",
    height: "100vh",
  },
  accordianRoot: {
    width: "100%",
    padding: "10px 0",
  },
  heading: {
    fontSize: "1rem",
    fontWeight: "300",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    border: "none !important",
    marginTop: "64px",
    height: "calc(100vh - 64px)",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: "100vw",
    height: `calc(100vh - 64px)`,
    marginTop: "64px",
    overflow: "auto",
  },
  contentDesktopWidth: {
    marginLeft: -drawerWidth,
  },
  contentMobileWidth: {
    marginLeft: "0",
  },
  contentShift: {
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: `calc(100vw - ${drawerWidth})`,
    marginLeft: 0,
  },
  link: {
    "&:hover": {
      backgroundColor: "#5967b5",
    },
  },
  activeLink: {
    backgroundColor: "#3f51b5",
  },
}));

const LayoutComponent = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);
  console.log(props);
  window.onresize = () => {
    setWindowSize(window.innerWidth);
    if (window.innerWidth < 600) {
      setOpen(false);
    }
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.drawerRoot}>
      <CssBaseline />
      <HeaderComponent
        openDrawer={handleDrawerOpen}
        className={clsx(classes.appBar, {})}
      />
      <Drawer
        className={classes.drawer}
        variant={`${windowSize > 600 ? "persistent" : "temporary"}`}
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={handleDrawerOpen}
      >
        <div className={classes.accordianRoot}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Instrument History
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <Link to="/instrument-history/search">
                  <ListItem
                    button
                    className={clsx(classes.link, {
                      [classes.activeLink]:
                        props.location.pathname ===
                        "/instrument-history/search",
                    })}
                  >
                    <ListItemText>Search</ListItemText>
                  </ListItem>
                </Link>
                <Link to="/instrument-history/new">
                  <ListItem
                    button
                    className={clsx(classes.link, {
                      [classes.activeLink]:
                        props.location.pathname === "/instrument-history/new",
                    })}
                  >
                    <ListItemText>New Report</ListItemText>
                  </ListItem>
                </Link>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
          [classes.contentDesktopWidth]: windowSize > 600,
          [classes.contentMobileWidth]: windowSize <= 600,
        })}
      >
        {props.children}
      </main>
    </div>
  );
};

export default withRouter(LayoutComponent);
