import React from "react";

import ccmbLogo from "../../images/ccmb-logo.png";

import "./home.styles.scss";

const HomePage = () => (
  <div className="home-page">
    <img src={ccmbLogo} alt="CSIR-CCMB" className="home-page--logo" />
    <h1 className="home-page--heading">
      Instrument Test Report, Return Test Report and Instrument History
      Maintenance Program
    </h1>
  </div>
);

export default HomePage;
