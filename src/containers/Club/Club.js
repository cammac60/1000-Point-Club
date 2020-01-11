import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Club.scss';

export class Club extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    let sortedMembers = this.sortMembers(this.props.members);

    let cards = this.props.members.map((mem, i) => {
      let stats = mem.stats;
      let ppg = Math.round((stats.points / stats.games) * 100) / 100;
      let hometown;
      mem.birthStateProvince ?
      hometown = `${mem.birthCity}\, ${mem.birthStateProvince}\, ${mem.birthCountry}` :
      hometown = `${mem.birthCity}\, ${mem.birthCountry}`;
      return (
        <section className="legend-card">
          <h3 className="rank-num">{i + 1}</h3>
          <section className="player-info">
            <h3 className="player-name">{mem.name}</h3>
            <div className="player-info-small-wrap">
              <span className="info-label">Birthplace:   </span>
              <span className="player-info-data">{hometown}<img className="flag-icon" src={require(`../../images/flags/${mem.birthCountry}.png`)} alt="Country Flag"/></span>
            </div>
            <div className="player-info-small-wrap">
              <span className="info-label">Birthdate:   </span>
              <span className="player-info-data">{mem.birthDate}</span>
            </div>
            <Link className="versus-link" to="/vs" id={mem.id}>You vs. Him</Link>
          </section>
          <section className="player-stats">
            <h4 className="player-stats-header">Stats</h4>
            <div className="player-stat-wrapper-small">
              <span className="player-stat-label">Goals:   </span>
              <span className="player-stat-num">{stats.goals}</span>
            </div>
            <div className="player-stat-wrapper-small">
              <span className="player-stat-label">Assists:   </span>
              <span className="player-stat-num">{stats.assists}</span>
            </div>
            <div className="player-stat-wrapper-small">
              <span className="player-stat-label">Points:   </span>
              <span className="player-stat-num">{stats.points}</span>
            </div>
            <div className="player-stat-wrapper-small">
              <span className="player-stat-label">GP:   </span>
              <span className="player-stat-num">{stats.games}</span>
            </div>
            <div className="player-stat-wrapper-small">
              <span className="player-stat-label">PPG:   </span>
              <span className="player-stat-num">{ppg}</span>
            </div>
          </section>
        </section>
      )
    });

    return (
      <div className="club-wrapper">
        {cards}
      </div>
    )
  }

  sortMembers = (members) => {
    return members.sort((a, b) => {
      return b.stats.points - a.stats.points
    });
  }

}

export const mapStateToProps = state => ({
  user: state.user,
  members: state.members
});

export default connect(mapStateToProps)(Club);
