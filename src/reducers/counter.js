import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default  (state = initialState.score, action) => {
  switch (action.type) {
    case types.INCREMENT_LEFT:
      return {...state, left: state.left + 1}
    case types.DECREMENT_LEFT: {
      const newScore = (state.left -1 < 0) ? 0 : state.left -1;
      return {...state, left: newScore}
    }
    case types.INCREMENT_RIGHT:
      return {...state, right: state.right + 1}
    case types.DECREMENT_RIGHT: {
      const newScore = (state.right -1 < 0) ? 0 : state.right -1;
      return {...state, right: newScore}
    }
    default:
      return state
  }
}
