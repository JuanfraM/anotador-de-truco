import React from 'react';
import PropTypes from 'prop-types';
import { Column, Row } from 'react-foundation';

import '../containers/HomePage.scss';

const PlayerNames = ({nameEllos, nameNosotros}) => (
  <Row className="display">
    <Column medium={6} className="columnCenter">
      <h1>{nameEllos}</h1>
    </Column>
    <Column medium={6} className="columnCenter">
      <h1>{nameNosotros}</h1>
    </Column>
  </Row>
);

const { string } = PropTypes;

PlayerNames.propTypes = {
  nameEllos: string.isRequired,
  nameNosotros: string.isRequired,
};

export default PlayerNames;
