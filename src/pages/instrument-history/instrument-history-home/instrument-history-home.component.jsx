import React from 'react';
import { Link } from 'react-router-dom';

import './instrument-history-home.styles.scss';

const InstrumentHistoryHomePage = () => (
    <div className="instrument-history-home-page">
                <div className="instrument-history-home-page--options">
                    <div className="instrument-history-home-page--options--option">
                        <span>
                            <Link to="/instrument-history/read-or-edit">Read/Edit</Link>
                            <div className="underline"></div>
                        </span>
                    </div>
                    <div className="instrument-history-home-page--options--option">
                        <span>
                            <Link to="/instrument-history/new">Enter New</Link>
                            <div className="underline"></div>
                        </span>
                    </div>
                    <div className="instrument-history-home-page--options--option">
                        <span>
                            <Link to="/instrument-history/all">Display all history cards</Link>
                            <div className="underline"></div>
                        </span>
                    </div>
                    <div className="instrument-history-home-page--options--option">
                        <span>
                            <Link to="/">Find</Link>
                            <div className="underline"></div>
                        </span>
                    </div>
                    <div className="instrument-history-home-page--options--option">
                        <span>
                            <Link to="/">Display All Test Reports</Link>
                            <div className="underline"></div>
                        </span>
                    </div>
                    <div className="instrument-history-home-page--options--option">
                        <span>
                            <Link to="/">Close</Link>
                            <div className="underline"></div>
                        </span>
                    </div>
                </div>
            </div>
);

export default InstrumentHistoryHomePage;
