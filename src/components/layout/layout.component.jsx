import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  Divider,
  CssBaseline,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Toolbar,
  Button,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
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
    // padding: theme.spacing(3),
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
}));

export default function LayoutComponent({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);

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
        className={clsx(classes.appBar, {
          // [classes.appBarShift]: open && windowSize > 600,
        })}
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
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">Home</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.accordianRoot}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem button>
                  <ListItemText>Read/Edit</ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText>New Report</ListItemText>
                </ListItem>
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
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
          [classes.contentDesktopWidth]: windowSize > 600,
          [classes.contentMobileWidth]: windowSize <= 600,
        })}
      >
        {children}
      </main>
    </div>
  );
}
