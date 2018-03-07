import React, { Component } from 'react';
import { Column, Row, Colors, Button, Sizes, Label } from 'react-foundation';

import Separator from '../components/common/Separator';
import logo from '../assets/logo.svg';
import '../assets/components/LandingPage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <Row className="display">
          <Column large={6}  offsetOnLarge={3}>
            <Row className="display">
              <Column large={6}>
                <Label size={Sizes.MEDIUM} color={Colors.PRIMARY}>Name 111</Label>
              </Column>
              <Column large={6}>
                <Label size={Sizes.MEDIUM} color={Colors.PRIMARY}>Name 2</Label>
              </Column>
            </Row>
            <Separator/>
            <Row className="display">
              <Column medium={4}  offsetOnMedium={4}>
                <Button size={Sizes.LARGE} color={Colors.PRIMARY} onClick={this.onClickStart}>Start</Button>
              </Column>
              <Column medium={4}  offsetOnMedium={4}>
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
