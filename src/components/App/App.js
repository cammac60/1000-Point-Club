import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getThousandClub, getUserInfo, getTeams } from '../../apiCalls/apiCalls';
import { addMembers, addTeams, selectRoster } from '../../actions';

import './App.scss';

import Splash from '../../containers/Splash/Splash.js';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Profile from '../Profile/Profile';
import Club from '../../containers/Club/Club';
import { CheatSheet } from '../CheatSheet/CheatSheet';
import { Versus } from '../Versus/Versus';
import { TeamFilter } from '../TeamFilter/TeamFilter';

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
        <Route exact path="/cheat-sheet" render={() => <CheatSheet />}/>
        <Route exact path="/vs" render={() =>
          <>
            <Header />
            <Versus user={this.props.user} selected={this.props.selected}/>
          </>
        }/>
        <Route exact path="/search" render={() =>
          <>
            <Header />
            <TeamFilter teams={this.props.teams} selectRoster={this.addRoster}/>
          </>
        }/>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchClub();
    this.fetchTeams();
  }

  addRoster = ({ target }) => {
    let { id } = target;
    let teamObj = this.props.teams.find(team => team.id === parseInt(id));
    let rosterData = teamObj.roster.roster;
    let roster = this.createRoster(rosterData);
    this.props.selectRoster(roster);
    this.props.history.push('/search/roster');
  }

  createRoster = rosterData => {
    let filteredRoster = rosterData.filter(player => player.position.code !== 'G');
    return filteredRoster.map(player => {
      return {
        id: player.person.id,
        name: player.person.fullName,
        position: player.position.code
      }
    })
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

  fetchTeams = async () => {
    try {
      const teamData = await getTeams();
      const teams = await this.createTeams(teamData.teams);
      this.props.addTeams(teams);
    }
    catch (error){
      console.log(error);
    }
  }

  createTeams = teamData => {
    let teams = [];
    teamData.forEach((team) => {
      let { id, name, abbreviation, roster } = team;
      let teamObj = {id, name, abbreviation, roster};
      teams.push(teamObj);
    });
    return teams;
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
  members: state.members,
  selected: state.selected,
  teams: state.teams,
  roster: state.roster
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addMembers,
    addTeams,
    selectRoster
  }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
