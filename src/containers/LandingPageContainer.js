import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeNames } from '../actions/names';
import { changeGameState } from '../actions/gameSettings';
import LandingPage from '../components/LandingPage';

const mapStateToProps = state => ({
  ellos: state.names.ellos,
  nosotros: state.names.nosotros,
  gamePlaying: state.settings.gamePlaying,
});

const mapDispatchToProps = (dispatch) => ({
  changeNames: names => dispatch(changeNames(names)),
  changeGameState: names => dispatch(changeGameState()),
});

const LandingPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);

export default LandingPageContainer;
