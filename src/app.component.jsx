import React from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import HeaderComponent from './components/header/header.component';
import HomePage from './pages/home/home.component';
import LoginPage from './pages/login/login.component';
import DashboardPage from './pages/dashboard/dashboard.component';
import InstrumentHistoryHomePage from './pages/instrument-history/instrument-history-home/instrument-history-home.component';
import InstrumentHistoryReadEditPage from './pages/instrument-history/instrument-history-read-edit/instrument-history-read-edit.component';
import InstrumentHistoryNewPage from './pages/instrument-history/instrument-history-new/instrument-history-new.component';

import './app.styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <div id="scrollable_content" className="main-content">
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/login"
              render={() =>
                this.props.currentUser ?
                <Redirect to="/" />
                :
                <LoginPage />
              }
            />
            
            <Route path="/dashboard"
              render={() =>
                this.props.currentUser ?
                <DashboardPage />
                :
                <Redirect to="/login" />
              }
            />

            <Route path="/instrument-history/read-or-edit"
              render={() => 
                this.props.currentUser ? 
                <InstrumentHistoryReadEditPage />
                :
                <Redirect to="/login" />
              }
            />

            <Route path="/instrument-history/new"
              render={() => 
                this.props.currentUser ? 
                <InstrumentHistoryNewPage />
                :
                <Redirect to="/login" />
              }
            />

            <Route exact path="/instrument-history"
              render={() => 
                this.props.currentUser ? 
                <InstrumentHistoryHomePage />
                :
                <Redirect to="/login" />
              }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
})

export default withRouter(connect(mapStateToProps)(App));
