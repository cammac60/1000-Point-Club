export const roster = (state = null, action) => {
  switch(action.type) {
    case 'SELECT_ROSTER':
      return action.roster
    default:
      return state
  }
}
