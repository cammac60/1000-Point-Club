export const favoriteTeams = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEAM':
      return action.team;
    default:
      return state;
  }
}
