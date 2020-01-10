import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './Profile.scss';

const Profile = ({ user }) => {
  console.log(user);
  let pointsPerGame = Math.round((user.stats.points/user.stats.games) * 100) / 100;
  let welcomeHeader = user.stats.points >= 1000 ?
  'welcome-header-1k' : 'welcome-header';
  return (
    <div className="profile-wrapper">
      <h2 className={welcomeHeader}>Welcome, {user.name}!</h2>
      <section className="user-stats-wrapper">
        <section className="user-career-stats">
          <h3 className="user-career-stats-header">Career Stats</h3>
          <div className="indiv-stat-wrap">
            <span className="user-stat-type">Goals:</span>
            <span>{user.stats.goals}</span>
          </div>
          <div className="indiv-stat-wrap">
            <span className="user-stat-type">Assists:</span>
            <span>{user.stats.assists}</span>
          </div>
          <div className="indiv-stat-wrap">
            <span className="user-stat-type">Points:</span>
            <span>{user.stats.points}</span>
          </div>
          <div className="indiv-stat-wrap">
            <span className="user-stat-type">GP:</span>
            <span>{user.stats.games}</span>
          </div>
          <div className="indiv-stat-wrap">
            <span className="user-stat-type">PPG:</span>
            <span>{pointsPerGame}</span>
          </div>
        </section>
        <section className="user-status-wrapper">
        </section>
      </section>
    </div>
  )
}

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Profile);
