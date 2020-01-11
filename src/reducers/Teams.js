export const teams = (state = null, action) => {
  switch(action.type) {
    case 'ADD_TEAMS':
      return action.teams
    default:
      return state
  }
}
