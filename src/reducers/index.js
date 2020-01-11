import { combineReducers } from 'redux';
import { user } from './User';
import { members } from './Members';
import { selected } from './Selected';
import { teams } from './Teams';

const rootReducer = combineReducers({
  user,
  members,
  selected,
  teams
});

export default rootReducer;
