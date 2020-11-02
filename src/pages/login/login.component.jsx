import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { TextField, Button } from "@material-ui/core";
import Particles from "react-particles-js";

import ccmbLogo from "../../images/ccmb-logo.png";
import nightSky from "../../images/night-sky.jpg";
import { setCurrentUser } from "../../redux/user/user.actions";

import "./login.styles.scss";

class LoginPage extends React.Component {
  constructor() {
    super();

    this.state = {
      emailRegx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      email: {
        value: "",
        error: false,
      },
      password: {
        value: "",
        error: false,
      },
      isAuth: false,
    };
  }

  componentDidMount = () => {
    console.log(this.props.currentUser);
    if (this.props.currentUser) this.setState({ isAuth: true });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const emailErr =
      this.state.email.value === "" ||
      !this.state.emailRegx.test(this.state.email.value);
    const passwordErr = this.state.password.value === "";

    if (emailErr)
      this.setState({
        email: {
          value: this.state.email.value,
          error: true,
        },
      });

    if (passwordErr)
      this.setState({
        password: {
          value: this.state.password.value,
          error: true,
        },
      });

    if (!emailErr && !passwordErr) {
      this.setState({ isAuth: true });
      this.props.setCurrentUser({
        id: 1234567890,
        email: this.state.email.value,
        password: this.state.password.value,
        admin: true,
      });
    }
  };

  onEmailChange = (event) => {
    this.setState({
      email: {
        value: event.target.value,
        error: false,
      },
    });
  };

  onPasswordChange = (event) =>
    this.setState({
      password: {
        value: event.target.value.trim(),
        error: false,
      },
    });

  render() {
    return (
      <div
        className="login-page"
        style={{
          backgroundImage: `url(${nightSky})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        {!this.state.isAuth ? (
          <form onSubmit={this.onSubmit} noValidate>
            <img src={ccmbLogo} alt="CCMB Logo" />
            <TextField
              label="Email"
              variant="outlined"
              value={this.state.email.value}
              error={this.state.email.error}
              onChange={this.onEmailChange}
              required
            />

            <TextField
              label="Password"
              variant="outlined"
              value={this.state.password.value}
              error={this.state.password.error}
              onChange={this.onPasswordChange}
              type="password"
              required
            />

            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </form>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
