import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfo } from '../../apiCalls/apiCalls';
import { addUser } from '../../actions';
import './Splash.scss';

export class Splash extends Component {
  constructor(props) {
    super(props);
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
      const basicUserInfo = await getUserInfo(baseInfoURL);
      const userStats = await getUserInfo(statsURL);
      const user = await this.createUser(basicUserInfo, userStats);
      this.props.addUser(user);
    }
    catch (error) {
      this.setState({error: error.message});
    }
  }

  createUser = (basicUserInfo, userStatsInfo) => {
    let basicData = basicUserInfo.people[0];
    let userCareerStats = userStatsInfo.stats[0].splits[0].stat;
    let user = {
      id: basicData.id,
      name: basicData.fullName,
      birthDate: basicData.birthDate,
      birthCity: basicData.birthCity,
      birthStateProvince: basicData.birthStateProvince,
      birthCountry: basicData.birthCountry,
      position: basicData.primaryPosition.code,
      stats: userCareerStats
    }
    return user;
  }

}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addUser
  }, dispatch)
)

export default withRouter(connect(null, mapDispatchToProps)(Splash));
