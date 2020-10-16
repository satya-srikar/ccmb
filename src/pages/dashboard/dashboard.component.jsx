import React from 'react';
import { Link } from 'react-router-dom';

import './dashboard.styles.scss';

const DashboardPage = () => {
    return (
        <div className="dashboard-page">
            <h1>
                <Link to="/instrument-history">Instrument History</Link>
                <div className="underline"></div>
            </h1>
            <div className="divider" />
            <h1>
                <Link to="/return-test-report">Return Test Report</Link>
                <div className="underline"></div>
            </h1>
        </div>
    )
}

export default DashboardPage;
