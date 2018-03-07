import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Column, Row, Colors, Button, Sizes } from 'react-foundation';

import logo from '../assets/logo.svg';
import '../assets/components/LandingPage.css';
import history from '../utils/history';

class LandingPage extends Component {
  constructor() {
    super();

    this.onClickStart = this.onClickStart.bind(this);
  }

  onClickStart() {
    history.push('/home');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Row className="display">
          <Column medium={4}  offsetOnMedium={4}>
            <Button size={Sizes.LARGE} color={Colors.PRIMARY} onClick={this.onClickStart}>Start</Button>
          </Column>
        </Row>
      </div>
    );
  }
}

export default connect()(LandingPage);
