import { combineReducers } from 'redux';
import { user } from './User';
import { members } from './Members';
import { selected } from './Selected';
import { teams } from './Teams';
import { roster } from './Roster';

const rootReducer = combineReducers({
  user,
  members,
  selected,
  teams,
  roster
});

export default rootReducer;
