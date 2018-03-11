import React, { Component } from 'react';
import { Column, Row, Colors, Button, Sizes, Label } from 'react-foundation';

import Score from './Score';
import ScoreNumber from './ScoreNumber';
import '../containers/HomePage.scss';

class ScoreContainer extends Component {
  constructor(props) {
    super(props);

    this.onClickInrement = this.onClickInrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);
  }

  onClickInrement() {
    this.props.increment();
  }

  onClickDecrement() {
    this.props.decrement();
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
            <Button size={Sizes.LARGE} color={Colors.PRIMARY} onClick={this.onClickInrement}>+1</Button>
            <Button size={Sizes.LARGE} color={Colors.PRIMARY} onClick={this.onClickDecrement}>-1</Button>
          </Column>
        </Row>
      </Column>
    );
  }
}

export default ScoreContainer;
