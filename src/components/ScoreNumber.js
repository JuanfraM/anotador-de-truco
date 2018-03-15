import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column, Label, Thumbnail} from 'react-foundation';

import Separator from './common/Separator';
import './ScoreNumber.scss';
import number0 from '../assets/images/number0.jpg';
import number1 from '../assets/images/number1.jpg';
import number2 from '../assets/images/number2.jpg';
import number3 from '../assets/images/number3.jpg';
import number4 from '../assets/images/number4.jpg';
import number5 from '../assets/images/number5.jpg';

const ScoreNumber = ({score, finalScore}) => {

let countOfComplete = 0;
let remainder = 0;
const numbersGood = [];
const numbersBad = [];
const halfScore = finalScore / 2;
let isScoreGood = score > halfScore;

const calc = (numbers, partialScore) => {
  countOfComplete = Math.floor(partialScore / 5);
  remainder = partialScore % 5;

  for(let i = 1; i <= countOfComplete; i++) {
    numbers.push(number5);
  };

  switch (remainder) {
    case 1:
      numbers.push(number1);
      break;
    case 2:
      numbers.push(number2);
      break;
    case 3:
      numbers.push(number3);
      break;
    case 4:
      numbers.push(number4);
      break;
    default:
      return
  }
};

const displayImagesBad = () => {
  if (score === 0) {
    numbersBad.push(number0);
  }
  const scoreBad = (score <= halfScore) ? score : halfScore;
  calc(numbersBad, scoreBad);

  const imagesBad = numbersBad.map((number, i) => {
    if (isScoreGood && i === numbersBad.length - 1) {
      return (
        <Thumbnail key={i} src={number} alt={`number${i}`} className="last"/>
      );
    }
    return (
      <Thumbnail key={i} src={number} alt={`number${i}`}/>
    )
  });

  return imagesBad;
};

const displayImagesGood = () => {
  const scoreBad = (score <= halfScore) ? score : halfScore;
  const scoreGood = (score > halfScore) ? score - halfScore : 0;

  if (scoreGood > 0) {
    isScoreGood = true;
    calc(numbersGood, scoreGood);
  }

  const imagesGood = numbersGood.map((number, i) => (
    <Thumbnail key={i} src={number} alt={`number${i}`}/>
  ));

  return imagesGood;
};

return (
  <Row upOnSmall={1} className="row-score-number">
   <Column iscolumn className="column-score-number">
     {
        displayImagesBad()
    }
  </Column>
    {
      isScoreGood && (
        <div>
          <Separator />
          <Column isColumn className="column-score-number">
            { displayImagesGood() }
          </Column>
        </div>
      )
     }
 </Row>
)};

const { number } = PropTypes;

ScoreNumber.propTypes = {
  score: number.isRequired,
  finalScore: number.isRequired,
};

export default ScoreNumber;
