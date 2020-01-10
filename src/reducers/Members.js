export const members = (state = null, action) => {
  console.log(action.members);
  switch(action.type) {
    case 'ADD_MEMBERS':
      return action.members
    default:
      return state
  }
}
