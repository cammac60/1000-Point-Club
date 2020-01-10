import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getThousandClub, getUserInfo } from '../../apiCalls/apiCalls';
import { addMembers } from '../../actions';

import './App.scss';

import Splash from '../../containers/Splash/Splash.js';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Profile from '../Profile/Profile';
import Club from '../../containers/Club/Club';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Splash fetchUser={this.fetchUser}/>} />
        <Route exact path="/profile" render={() =>
          this.props.user ?
          <>
            <Header />
            <Profile />
          </> :
          <Loader />
        }
        />
        <Route exact path="/1000club" render={() =>
          this.props.members ?
          <>
            <Header />
            <Club />
          </> :
          <Loader />}
        />
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchClub();
  }

  fetchClub = async () => {
    try {
      const clubMems = await getThousandClub('https://records.nhl.com/site/api/milestone-1000-point-career');
      let memIDs = clubMems.data.map(mem => mem.id.skaterId);
      let memberInfo = await this.createMembers(memIDs);
      this.props.addMembers(memberInfo);
    }
    catch (error){
      console.log(error);
    }
  }

  createMembers  = (members) => {
    let memberList = [];
    members.forEach(async mem => {
      let memberObj = await this.fetchUser(mem);
      memberList.push(memberObj);
    });
    return memberList
  }

  fetchUser = async (id) => {
    let baseInfoURL = `https://statsapi.web.nhl.com/api/v1/people/${id}`;
    let statsURL = `${baseInfoURL}/stats?stats=careerRegularSeason`;
    try {
      const basicUserInfo = await getUserInfo(baseInfoURL);
      const userStats = await getUserInfo(statsURL);
      const user = await this.createUser(basicUserInfo, userStats);
      return user
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
    };
    return user;
  }

}

export const mapStateToProps = state => ({
  user: state.user,
  members: state.members
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addMembers
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
