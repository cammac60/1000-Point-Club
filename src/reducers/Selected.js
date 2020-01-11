export const selected = (state = null, action) => {
  switch(action.type) {
    case 'SELECT_PLAYER':
      return action.player
    default:
      return state
  }
};
