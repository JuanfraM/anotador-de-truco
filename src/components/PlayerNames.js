import React from 'react';
import PropTypes from 'prop-types';
import { Column, Row } from 'react-foundation';

import '../containers/HomePage.scss';
import './PlayerNames.scss';

const PlayerNames = ({nameEllos, nameNosotros, scoreLeft, scoreRight, finalScore}) => {
  const halfScore = finalScore / 2;

  const calcScore = (score) => {
    score = score > halfScore ? score - halfScore : score;
    return score;
  }

  const isScoreGood = (score) => {
    return (score > halfScore);
  }

  return (
    <Row className="display rowNames">
      <Column medium={6} className="columnCenter">
        <h1>{nameEllos}</h1>
        <span className={`badge ${isScoreGood(scoreLeft) ? "success" : "alert"}`}>
          { calcScore(scoreLeft) }
        </span>
      </Column>
      <Column medium={6} className="columnCenter">
        <h1>{nameNosotros}</h1>
        <span className={`badge ${isScoreGood(scoreRight) ? "success" : "alert"}`}>
          { calcScore(scoreRight) }
        </span>
      </Column>
    </Row>
  );
}

const { string, number } = PropTypes;

PlayerNames.propTypes = {
  nameEllos: string.isRequired,
  nameNosotros: string.isRequired,
  scoreLeft: number.isRequired,
  scoreRight: number.isRequired,
  finalScore: number.isRequired,
};

export default PlayerNames;
