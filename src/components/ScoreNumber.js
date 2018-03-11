import React from 'react';
import PropTypes from 'prop-types';
import { Column, Label } from 'react-foundation';

import './ScoreNumber.scss';

const ScoreNumber = ({score}) => (
  <Column medium={4} offsetOnMedium={4} className="scoreColumn">
    <Label className="score">{score}</Label>
  </Column>
);

const { number } = PropTypes;

ScoreNumber.propTypes = {
  score: number.isRequired,
};

export default ScoreNumber;
