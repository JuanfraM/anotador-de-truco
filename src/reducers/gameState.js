import initialState from './initialState';

export default  (state = initialState.gamePlaying, action) => {
  switch (action.type) {
    case 'CHANGE_GAME_STATE': {
      const gamePlaying = !state;
      return gamePlaying;
    }
    default:
      return state
  }
}
