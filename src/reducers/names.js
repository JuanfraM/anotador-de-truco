import initialState from './initialState';

export default  (state = initialState.names, action) => {
  switch (action.type) {
    case 'CHANGE_NAMES':
      return {...state, ellos: action.names.ellos, nosotros: action.names.nosotros};
    default:
      return state
  }
}
