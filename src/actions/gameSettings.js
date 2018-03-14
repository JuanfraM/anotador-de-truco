import * as types from './actionTypes';

export const changeGameState = () => ({
  type: types.CHANGE_GAME_STATE
});

export const selectFinalScore = (score) => ({
  finalScore: score,
  type: types.SELECT_FINAL_SCORE
});
