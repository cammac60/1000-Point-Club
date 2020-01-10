import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-content-wrapper">
        <img alt="NHL Logo" className="nhl-logo-loader" src={require("../../images/logos/NHL_Logo.png")}/>
        <h2 className="loading-text">Loading...</h2>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  )
}

export default Loader;
