import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

import ButtonComponent from '../../components/button/button.component';
import InputComponent from '../../components/input/input.component';
import { setCurrentUser } from '../../redux/user/user.actions';

import './login.styles.scss';

class LoginPage extends React.Component {
    constructor() {
        super();

        this.state = {
            username: {
                value: '',
                error: false
            },
            password: {
                value: '',
                error: false
            },
            isAuth: false
        }
    }

    componentDidMount = () => {
        console.log(this.props.currentUser);
        if(this.props.currentUser)
            this.setState({isAuth: true});
    }

    onSubmit = (event) => {
        event.preventDefault();
        const usernameErr = this.state.username.value === '';
        const passwordErr = this.state.password.value === '';

        if(usernameErr) 
            this.setState({
                username: {
                    value: '',
                    error: true
                }
            });

        if(passwordErr) 
            this.setState({
                password: {
                    value: '',
                    error: true
                }
            });

        if(!usernameErr && !passwordErr) {
            this.setState({isAuth: true});
            this.props.setCurrentUser({
                id: 1234567890,
                username: this.state.username.value,
                password: this.state.password.value
            });
        }
    }

    onUsernameChange = (event) => this.setState({ username: {
        value: event.target.value,
        error: false
    } })

    onPasswordChange = (event) => this.setState({ password: {
        value: event.target.value,
        error: false
    } })

    render() {
        return (
            <div className="login-page">
                {!this.state.isAuth ?
                    <form onSubmit={this.onSubmit}>
                        <div className="form-field">
                            <InputComponent
                                placeholder="Username"
                                name="username"
                                value={this.state.username.value}
                                label="Username"
                                onChange={this.onUsernameChange}
                                required={true}
                                type="text"
                                error={this.state.username.error}
                            />
                        </div>

                        <div className="form-field">
                            <InputComponent
                                placeholder="Password"
                                name="password"
                                value={this.state.password.value}
                                label="Password"
                                onChange={this.onPasswordChange}
                                required={true}
                                type="password"
                                error={this.state.password.error}
                            />
                        </div>
                        <div className="submit-btn">
                            <ButtonComponent submit={true} onClick={this.onSubmit}>Login</ButtonComponent>
                        </div>
                    </form>
                    :
                    <Redirect to="/" />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
