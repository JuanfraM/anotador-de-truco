import initialState from './initialState';

export default  (state = initialState.names, action) => {
  switch (action.type) {
    case 'CHANGE_NAME_ELLOS':
      return action.ellos;
    case 'CHANGE_NAME_NOSOTROS':
      return action.nosotros;
    default:
      return state
  }
}
