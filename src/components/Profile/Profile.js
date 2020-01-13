import React from 'react';
import { connect } from 'react-redux';

import './Profile.scss';

export const Profile = ({ user }) => {
  let pointsPerGame = Math.round((user.stats.points/user.stats.games) * 100) / 100;
  let welcomeHeader = user.stats.points >= 1000 ?
  'welcome-header-1k' : 'welcome-header';
  let difference = 1000 - user.stats.points;
  let gamesToOneThousand = Math.ceil(difference / pointsPerGame);
  let feedbackText = user.stats.points >= 1000 ?
    `Congrats, you are in the club with ${user.stats.points} points!` :
    `You only need ${difference} more points to join the club! If you continue at your current pace, you'll hit the mark in ${gamesToOneThousand} games.`;
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
          <h3 className="user-status-header">1000 Point Club Status</h3>
          <div className="status-nums-wrap">
            <span className="status-num">{user.stats.points}</span>
            <hr/>
            <span className="status-num">1000</span>
          </div>
          <p className="feedback-text">{feedbackText}</p>
        </section>
      </section>
    </div>
  )
}

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Profile);
