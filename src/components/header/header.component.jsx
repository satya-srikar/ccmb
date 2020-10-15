import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../redux/user/user.actions';

import './header.styles.scss';

const HeaderComponent = ({ currentUser, setCurrentUser }) => {
    const [scrolled, setScrolled] = useState(true);
    
    const scrollEvent = useCallback((e) => {
        if(window.scrollY > 0)
            setScrolled(true);
        else
            setScrolled(false);
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);

        return () => window.removeEventListener('scroll', scrollEvent);
    }, [scrollEvent])
    
    return (
        <header className={`header ${scrolled > 0 ? 'header-shadow' : ''}`}>
            <div className="header-link"><Link to="/">Home</Link></div>
            <div className="header-content">
                {
                    currentUser &&
                    <div className="header-link">
                        <Link to="/dashboard">Create User</Link>
                    </div>
                }
                {
                    currentUser &&
                    <div className="header-link">
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
                }
                <div className="header-link">
                    {
                        currentUser ?
                        <span style={{ cursor: 'pointer' }} onClick={() => setCurrentUser(null)}>Logout</span>
                        :
                        <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
