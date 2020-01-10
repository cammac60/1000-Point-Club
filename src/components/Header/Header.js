import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeUser } from '../../actions';
import { getThousandClub } from '../../apiCalls/apiCalls';
import './Header.scss';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render = () => {
    return (
      <header className="main-header">
        <img src={require('../../images/logos/NHL_Logo.png')} alt="NHL Logo" className="header-logo"/>
        <nav className="header-links-wrapper">
          <Link to="/profile" className="nav-link">Your Stats</Link>
          <Link to="/1000club" className="nav-link" onClick={this.fetchClub}>1000 Point Club</Link>
          <Link to="/search" className="nav-link">Search Players</Link>
        </nav>
        <button className="sign-out-button" onClick={this.logOut}>Sign Out ></button>
      </header>
    )
  }

  logOut = () => {
    this.props.removeUser();
    this.props.history.push('/');
  }

  fetchClub = async () => {
    let options = {
        method: 'GET',
        headers: {
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': 'true',
        }
    };
    try {
      const response = await getThousandClub('https://records.nhl.com/site/api/milestone-1000-point-career', options);
      let clubMems = response.data;
      let memIDs = clubMems.reduce((acc, mem) => {
        acc.push(mem.id.skaterId);
        return acc;
      }, []);
      this.fetchMemberData(memIDs);
    }
    catch (error){
      console.log(error);
    }
  }

  fetchMemberData = async (members) => {

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
    removeUser
  }, dispatch)
);

export default withRouter(connect(null, mapDispatchToProps)(Header));
