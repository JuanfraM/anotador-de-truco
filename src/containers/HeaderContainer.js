import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { resetGame } from '../actions/counter';
import Header from '../components/Header/Header';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(resetGame()),
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
