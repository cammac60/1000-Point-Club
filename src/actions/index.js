export const addUser = user => ({
 type: 'ADD_USER',
 user
});

export const removeUser = () => ({
  type: 'REMOVE_USER',
  user: null
});

export const addMembers = clubMembers => ({
  type: 'ADD_MEMBERS',
  members: clubMembers
});

export const addSelectedPlayer = player => ({
  type: 'SELECT_PLAYER',
  player
});

export const addTeams = teams => ({
  type: 'ADD_TEAMS',
  teams
});
