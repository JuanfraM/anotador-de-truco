import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Column, Row } from 'react-foundation';

import Separator from '../components/common/Separator';
import PlayerNamesContainer from './PlayerNamesContainer';
import ScoreContainer from './ScoreContainer';
import '../assets/components/LandingPage.scss';
import './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
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
  }
}

HomePage.propTypes = {
  left: PropTypes.boolean
};

export default HomePage;
