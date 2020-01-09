import React, { Component } from 'react';

import './Splash.scss';

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
      <div className="sign-in-wrapper">
        <form className="sign-in-form">
          <img alt="NHL Logo" className="nhl-logo-lrg" src={require("../../images/logos/NHL_Logo.png")}/>
          <h1>1000 Point Club</h1>
          <label className="sign-in-label">Enter your player ID:</label>
          <input className="sign-in-input" type="number" value={this.state.id} onChange={(event) => this.handleChange(event)}/>
          <button className="sign-in-btn" onClick={(event) => this.handleSubmit(event)}>Sign In</button>
          <span className="sign-in-error">{this.state.error}</span>
        </form>
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({
      id: event.target.value,
      error: ''
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.id) {
      this.fetchUser(this.state);
    } else {
        this.setState({error: 'Please enter an ID'});
    }
  }

  fetchUser = async ({ id }) => {
    let baseInfoURL = `https://statsapi.web.nhl.com/api/v1/people/${id}`;
    let statsURL = `${baseInfoURL}/stats?stats=careerRegularSeason`;
    try {
      
    }
    catch {

    }
  }
}

export default Splash;
