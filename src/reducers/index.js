import { combineReducers } from 'redux';
import { user } from './User';
import { members } from './Members';
import { selected } from './Selected';

const rootReducer = combineReducers({
  user,
  members,
  selected
});

export default rootReducer;
