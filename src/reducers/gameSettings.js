import initialState from './initialState';

export default  (state = initialState.settings, action) => {
  switch (action.type) {
    case 'CHANGE_GAME_STATE': {
      const gamePlaying = !state.gamePlaying;
      return { ...state, gamePlaying: gamePlaying };
    }
    case 'UPDATE_FINAL_SCORE': {
      return { ...state, finalScore: action.finalScore };
    }
    default:
      return state
  }
}
