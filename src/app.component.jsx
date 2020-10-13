import React from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import HeaderComponent from './components/header/header.component';
import HomePage from './pages/home/home.component';
import LoginPage from './pages/login/login.component';

import './app.styles.scss';
import DashboardPage from './pages/dashboard/dashboard.component';
import InstrumentHistoryPage from './pages/instrument-history/instrument-history.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
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

          <Route path="/instrument-history"
            render={() => 
              this.props.currentUser ? 
              <InstrumentHistoryPage />
              :
              <Redirect to="/login" />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
})

export default withRouter(connect(mapStateToProps)(App));
