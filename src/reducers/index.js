import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import score from './counter';
import names from './names';
import settings from './gameSettings';

const rootReducer = combineReducers({
  routing: routerReducer,
  score,
  settings,
  names,
});

export default rootReducer;
