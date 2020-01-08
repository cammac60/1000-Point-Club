import { combineReducers } from 'redux';
import { favoriteTeams } from './favoriteTeams';

const rootReducer = combineReducers({
  favorites: favoriteTeams
});

export default rootReducer;
