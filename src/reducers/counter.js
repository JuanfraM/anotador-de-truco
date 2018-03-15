import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default  (state = initialState.score, action) => {
  switch (action.type) {
    case types.INCREMENT_LEFT: {
      const newScore = state.left + action.count;
      const result = (newScore > action.finalScore) ? action.finalScore : newScore;
      return {...state, left: result}
    }
    case types.DECREMENT_LEFT: {
      const count = action.count;
      const newScore = (state.left - count < 0) ? 0 : state.left - count;
      return {...state, left: newScore}
    }
    case types.INCREMENT_RIGHT: {
      const newScore = state.right + action.count;
      const result = (newScore > action.finalScore) ? action.finalScore : newScore;
      return {...state, right: result}
    }
    case types.DECREMENT_RIGHT: {
      const count = action.count;
      const newScore = (state.right - count < 0) ? 0 : state.right - count;
      return {...state, right: newScore}
    }
    case types.RESET_GAME: {
      return {...state, right: 0, left: 0}
    }
    default:
      return state
  }
}
