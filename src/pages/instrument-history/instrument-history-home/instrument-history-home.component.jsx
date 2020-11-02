import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

import "./instrument-history-home.styles.scss";

const InstrumentHistoryHomePage = () => (
  <div className="instrument-history-home-page container-fluid">
    <div className="instrument-history-home-page--options row">
      <div className="instrument-history-home-page--options--option col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <span>
          <Link to="/instrument-history/read-or-edit">
            <Typography variant="h2" component="p">
              Read/Edit
            </Typography>
          </Link>
          <div className="underline"></div>
        </span>
      </div>
      <div className="instrument-history-home-page--options--option col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <span>
          <Link to="/instrument-history/new">
            <Typography variant="h2" component="p">
              Enter New
            </Typography>
          </Link>
          <div className="underline"></div>
        </span>
      </div>
      <div className="instrument-history-home-page--options--option col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <span>
          <Link to="/instrument-history/all">
            <Typography variant="h2" component="p">
              Display all history cards
            </Typography>
          </Link>
          <div className="underline"></div>
        </span>
      </div>
      <div className="instrument-history-home-page--options--option col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <span>
          <Link to="/">
            <Typography variant="h2" component="p">
              Find
            </Typography>
          </Link>
          <div className="underline"></div>
        </span>
      </div>
      <div className="instrument-history-home-page--options--option col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <span>
          <Link to="/">
            <Typography variant="h2" component="p">
              Display All Test Reports
            </Typography>
          </Link>
          <div className="underline"></div>
        </span>
      </div>
      <div className="instrument-history-home-page--options--option col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <span>
          <Link to="/">
            <Typography variant="h2" component="p">
              Close
            </Typography>
          </Link>
          <div className="underline"></div>
        </span>
      </div>
    </div>
  </div>
);

export default InstrumentHistoryHomePage;
