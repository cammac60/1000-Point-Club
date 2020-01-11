import React from 'react';

import './Versus.scss';

export const Versus = ({ user, selected }) => {
  let userStats = user.stats;
  let selectedStats = selected.stats;
  let userPPG = Math.round((userStats.points / userStats.games) * 100) / 100;
  let selectedPPG = Math.round((selectedStats.points / selectedStats.games) * 100) / 100;
  let neededGames = Math.ceil(selectedStats.points / userPPG);
  let message = userStats.points > selectedStats.points ?
  message = `Congrats, you have ${userStats.points - selectedStats.points} more points than ${selected.name}!` :
  `At your current rate, you'll pass ${selected.name} in ${neededGames} games!`;
  
  return (
    <div className="versus-wrapper">
      <h2 className="versus-header">{user.name} vs. {selected.name}</h2>
      <table className="versus-table">
        <thead>
          <tr className="versus-tbl-row">
          <th className="versus-tbl-header">Stat</th>
          <th className="versus-tbl-header">{selected.name}</th>
          <th className="versus-tbl-header">You</th>
          <th className="versus-tbl-header">Spread</th>
          </tr>
        </thead>
        <tbody>
          <tr className="versus-tbl-row">
            <td className="versus-tbl-stat-type">Goals</td>
            <td className="versus-table-num">{selectedStats.goals}</td>
            <td className="versus-table-num">{userStats.goals}</td>
            <td className="versus-table-num">{userStats.goals - selectedStats.goals}</td>
          </tr>
          <tr className="versus-tbl-row">
            <td className="versus-tbl-stat-type">Assists</td>
            <td className="versus-table-num">{selectedStats.assists}</td>
            <td className="versus-table-num">{userStats.assists}</td>
            <td className="versus-table-num">{userStats.assists - selectedStats.assists}</td>
          </tr>
          <tr className="versus-tbl-row">
            <td className="versus-tbl-stat-type">Points</td>
            <td className="versus-table-num">{selectedStats.points}</td>
            <td className="versus-table-num">{userStats.points}</td>
            <td className="versus-table-num">{userStats.points - selectedStats.points}</td>
          </tr>
          <tr className="versus-tbl-row">
            <td className="versus-tbl-stat-type">GP</td>
            <td className="versus-table-num">{selectedStats.games}</td>
            <td className="versus-table-num">{userStats.games}</td>
            <td className="versus-table-num">{userStats.games - selectedStats.games}</td>
          </tr>
          <tr className="versus-tbl-row">
            <td className="versus-tbl-stat-type">PPG</td>
            <td className="versus-table-num">{selectedPPG}</td>
            <td className="versus-table-num">{userPPG}</td>
            <td className="versus-table-num">{Math.round((userPPG - selectedPPG) * 100) / 100}</td>
          </tr>
        </tbody>
      </table>
      <span className="versus-message">{message}</span>
    </div>
  )
}
