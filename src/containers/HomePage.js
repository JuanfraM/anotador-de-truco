import React, { Component } from 'react';
import { Column, Row } from 'react-foundation';

import Separator from '../components/common/Separator';
import PlayerNamesContainer from './PlayerNamesContainer';
import ScoreContainer from './ScoreContainer';
import './LandingPage.scss';
import './HomePage.scss';

const HomePage = () => (
  <div className="homePage">
    <Row className="display">
      <Column large={6}  offsetOnLarge={3}>
        <PlayerNamesContainer />
        <Separator/>
        <Row className="display rowTable">
          <ScoreContainer left={true} />
          <ScoreContainer left={false} />
        </Row>
      </Column>
    </Row>
  </div>
);

export default HomePage;
