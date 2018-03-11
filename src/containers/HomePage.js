import React, { Component } from 'react';
import { Column, Row, Colors, Button, Sizes, Label } from 'react-foundation';

import Separator from '../components/common/Separator';
import logo from '../assets/logo.svg';
import '../assets/components/LandingPage.scss';
import './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <Row className="display">
          <Column large={6}  offsetOnLarge={3}>
            <Row className="display">
              <Column medium={6} className="columnCenter">
                <Label size={Sizes.MEDIUM} color={Colors.PRIMARY}>Ellos</Label>
              </Column>
              <Column medium={6} className="columnCenter">
                <Label size={Sizes.MEDIUM} color={Colors.PRIMARY}>Nosotros</Label>
              </Column>
            </Row>
            <Separator/>
            <Row className="display rowTable">
              <Column medium={6} className="columnCenter left">
                <Button size={Sizes.LARGE} color={Colors.PRIMARY} onClick={this.onClickStart}>Start</Button>
              </Column>
              <Column medium={6} className="columnCenter right">
                <Button size={Sizes.LARGE} color={Colors.PRIMARY} onClick={this.onClickStart}>Start</Button>
              </Column>
            </Row>
          </Column>
        </Row>
      </div>
    );
  }
}

export default HomePage;
