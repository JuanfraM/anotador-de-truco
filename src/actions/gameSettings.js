import * as types from './actionTypes';

export const changeGameState = () => ({
  type: types.CHANGE_GAME_STATE
});

export const updateFinalScore = (score) => ({
  finalScore: score,
  type: types.UPDATE_FINAL_SCORE
});
