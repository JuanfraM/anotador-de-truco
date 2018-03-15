import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Score from '../components/Score';
import { incrementLeft, decrementLeft, incrementRight, decrementRight } from '../actions/counter';

const mapStateToProps = (state, ownProps) => (checkStateLeft(state, ownProps));

const checkStateLeft = (state, ownProps) => {
  if (ownProps.left) {
    return { score: state.score.left, finalScore: state.settings.finalScore };
  }
  return { score: state.score.right, finalScore: state.settings.finalScore };
}

const checkDispatchLeft = (dispatch, ownProps) => {
  if (ownProps.left) {
    return {
      increment: (count, finalScore) => dispatch(incrementLeft(count, finalScore)),
      decrement: (count, finalScore) => dispatch(decrementLeft(count, finalScore)),
    }
  }
  return {
    increment: (count, finalScore) => dispatch(incrementRight(count, finalScore)),
    decrement: (count, finalScore) => dispatch(decrementRight(count, finalScore)),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => (checkDispatchLeft(dispatch, ownProps))

const ScoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Score);

const { bool } = PropTypes;

ScoreContainer.propTypes = {
  left: bool.isRequired,
};

export default ScoreContainer;
