import React, { Component } from 'react';
import { Column, Row, Colors, Sizes, Label } from 'react-foundation';

import '../assets/components/LandingPage.scss';
import './HomePage.scss';

class NamesContainer extends Component {
  render() {
    return (
      <Row className="display">
        <Column medium={6} className="columnCenter">
          <Label size={Sizes.MEDIUM} color={Colors.PRIMARY}>Ellos</Label>
        </Column>
        <Column medium={6} className="columnCenter">
          <Label size={Sizes.MEDIUM} color={Colors.PRIMARY}>Nosotros</Label>
        </Column>
      </Row>
    );
  }
}

export default NamesContainer;
