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

  onClickInrement(count) {
    this.props.increment(count);
  }

  onClickDecrement(count) {
    this.props.decrement(count);
  }

  render() {
    const { score, left, increment, decrement } = this.props;

    return (
      <Column medium={6} className={`${left ? "left" : "right"}`} >
        <Row className="display">
          <ScoreNumber score={score} />
        </Row>
        <Row className="display rowButtons">
          <Column medium={12} className="columnButtons">
            <Button size={Sizes.MEDIUM} color={Colors.PRIMARY} onClick={() => this.onClickInrement(1)}>+1</Button>
            <Button size={Sizes.MEDIUM} color={Colors.PRIMARY} onClick={() => this.onClickDecrement(1)}>-1</Button>
          </Column>
          <Column medium={6} offsetOnMedium={3} className="columnButtons">
            <Button size={Sizes.LARGE} color={Colors.PRIMARY} onClick={() => this.onClickInrement(5)}>+5</Button>
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
};

export default ScoreContainer;
