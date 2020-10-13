import React from 'react';
import { Link } from 'react-router-dom';

import './instrument-history.styles.scss';

class InstrumentHistoryPage extends React.Component {
    render() {
        return (
            <div className="instrument-history-page">
                <div className="options">
                    <div className="option">
                        <span>
                            <Link to="/instrument-history/read-or-edit">Read/Edit</Link>
                            <div className="underline"></div>
                        </span>
                    </div>
                    <div className="option">
                        <span>
                            <Link to="/instrument-history/new">Enter New</Link>
                            <div className="underline"></div>
                        </span>
                    </div>
                    <div className="option">
                        <span>
                            <Link to="/instrument-history/all">Display all history cards</Link>
                            <div className="underline"></div>
                        </span>
                    </div>
                    <div className="option">
                        <span>
                            <Link to="/">Find</Link>
                            <div className="underline"></div>
                        </span>
                    </div>
                    <div className="option">
                        <span>
                            <Link to="/">Display All Test Reports</Link>
                            <div className="underline"></div>
                        </span>
                    </div>
                    <div className="option">
                        <span>
                            <Link to="/">Close</Link>
                            <div className="underline"></div>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default InstrumentHistoryPage;