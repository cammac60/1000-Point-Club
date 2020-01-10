import { combineReducers } from 'redux';
import { user } from './User';
import { members } from './Members';

const rootReducer = combineReducers({
  user,
  members
});

export default rootReducer;
