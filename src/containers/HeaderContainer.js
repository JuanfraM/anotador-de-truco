import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { resetGame } from '../actions/counter';
import { changeGameState } from '../actions/gameSettings';
import Header from '../components/Header/Header';

const mapStateToProps = state => ({
  gamePlaying: state.settings.gamePlaying,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(resetGame()),
  changeGameState: () => dispatch(changeGameState()),
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
