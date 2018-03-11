import { connect } from 'react-redux';
import Score from '../components/Score';

const mapStateToProps = state => ({
  score: state.score
});

const mapDispatchToProps = dispatch => {
  return {
    increment : () => dispatch({
      type: 'INCREMENT',
    }),
    decrement : () => dispatch({
      type: 'DECREMENT',
    })
  }
}

const ScoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Score);

ScoreContainer.propTypes = {};

export default ScoreContainer;
