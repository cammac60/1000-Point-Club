import React, { Component } from 'react';

class Splash extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      error: ''
    }
  }
  render = () => {
    return (
      <form className="sign-in-form">
      <img alt="NHL Logo" className="nhl-logo-lrg" src={require("../../images/logos/NHL_Logo.png")}/>
      <h1>1000 Point Club</h1>
      </form>
    )
  }
}

export default Splash;
