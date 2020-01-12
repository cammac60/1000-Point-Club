import React from 'react';

import './TeamFilter.scss';

export const TeamFilter = (props) => {
  let { teams, selectRoster } = props;
  teams.sort((a, b) => a.abbreviation.localeCompare(b.abbreviation));
  let teamButtons = teams.map((team) => {
    return (
      <div key={team.id} className="team-btn" id={team.id} onClick={(event) => selectRoster(event)}>
        <img src={require(`../../images/logos/${team.abbreviation}.svg`)} alt={`${team.name} Logo`} className="team-logo" id={team.id}/>
        {team.name}
      </div>
    )
  });
  return (
    <div className="team-filter-wrapper">
      <h3 className="team-filter-header">Select a team:</h3>
      {teamButtons}
    </div>
  )
}
