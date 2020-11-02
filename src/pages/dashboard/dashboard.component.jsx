import React from "react";
import { Link } from "react-router-dom";
import { Typography, ThemeProvider, createMuiTheme } from "@material-ui/core";

import "./dashboard.styles.scss";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const DashboardPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="dashboard-page">
        <h1>
          <Link to="/instrument-history">
            <Typography variant="h1" component="p">
              Instrument History
            </Typography>
          </Link>
          <div className="underline"></div>
        </h1>
        <div className="divider" />
        <h1>
          <Link to="/return-test-report">
            <Typography variant="h1" component="p">
              Return Test Report
            </Typography>
          </Link>
          <div className="underline"></div>
        </h1>
      </div>
    </ThemeProvider>
  );
};

export default DashboardPage;
