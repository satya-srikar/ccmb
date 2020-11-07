import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import HomePage from "./pages/home/home.component";
import LoginPage from "./pages/login/login.component";
import DashboardPage from "./pages/dashboard/dashboard.component";
import InstrumentHistoryHomePage from "./pages/instrument-history/instrument-history-home/instrument-history-home.component";
import InstrumentHistorySearchPage from "./pages/instrument-history/instrument-history-search/instrument-history-search.component";
import InstrumentHistoryNewPage from "./pages/instrument-history/instrument-history-new/instrument-history-new.component";
import CreateUser from "./pages/create-user/create-user.component";

import "./app.styles.scss";
import TestPage from "./pages/test/test.component";
import LayoutComponent from "./components/layout/layout.component";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App = ({ currentUser }) => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Switch>
          <Route
            path="/login"
            render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
          />
          <LayoutComponent>
            <Route exact path="/" component={HomePage} />

            <Route
              path="/dashboard"
              render={() =>
                currentUser ? <DashboardPage /> : <Redirect to="/login" />
              }
            />

            <Route
              path="/instrument-history/search"
              render={() =>
                currentUser ? (
                  <InstrumentHistorySearchPage />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

            <Route
              path="/instrument-history/new"
              render={() =>
                currentUser ? (
                  <InstrumentHistoryNewPage />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

            <Route
              exact
              path="/instrument-history"
              render={() =>
                currentUser ? (
                  <InstrumentHistoryHomePage />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

            <Route
              exact
              path="/create-user"
              render={() =>
                currentUser ? <CreateUser /> : <Redirect to="/login" />
              }
            />

            <Route path="/test" component={TestPage} />
          </LayoutComponent>
        </Switch>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default withRouter(connect(mapStateToProps)(App));
