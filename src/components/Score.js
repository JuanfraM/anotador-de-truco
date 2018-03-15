import React, { Component } from 'react';
import { Column, Row, Colors, Button, Sizes, Label } from 'react-foundation';
import PropTypes from 'prop-types';

import Score from './Score';
import ScoreNumber from './ScoreNumber';
import '../containers/HomePage.scss';

class ScoreContainer extends Component {
  constructor(props) {
    super(props);

    this.onClickInrement = this.onClickInrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);
  }

  onClickInrement(count, finalScore) {
    this.props.increment(count, finalScore);
  }

  onClickDecrement(count, finalScore) {
    this.props.decrement(count, finalScore);
  }

  render() {
    const { score, left, increment, decrement, finalScore } = this.props;

    return (
      <Column small={6} className={`${left ? "left" : "right"} columnScore`} >
        <Row className="display">
          <ScoreNumber score={score} finalScore={finalScore} />
        </Row>
        <Row className="display rowButtons">
          <Column small={12} className="columnButtons">
            <Button
              size={Sizes.MEDIUM}
              color={Colors.PRIMARY}
              onClick={() => this.onClickInrement(1, finalScore)}>
                +1
            </Button>
            <Button
              size={Sizes.LARGE}
              color={Colors.PRIMARY}
              onClick={() => this.onClickInrement(5, finalScore)}>
                +5
            </Button>
            <Button
              size={Sizes.MEDIUM}
              color={Colors.PRIMARY}
              onClick={() => this.onClickDecrement(1, finalScore)}>
                -1
            </Button>
          </Column>
        </Row>
      </Column>
    );
  }
}

const { func, bool, number } = PropTypes;

ScoreContainer.propTypes = {
  increment: func.isRequired,
  decrement: func.isRequired,
  left: bool.isRequired,
  score: number.isRequired,
  finalScore: number.isRequired,
};

export default ScoreContainer;
