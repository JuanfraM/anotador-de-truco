import React from 'react';
import PropTypes from 'prop-types';
import { Column, Row, Breadcrumbs, BreadcrumbItem, Button, Colors, Sizes } from 'react-foundation';

import BreadCrumb from './BreadCrumb';
import history from '../../utils/history';
import './Header.scss';

const Header = ({resetGame, changeGameState, gamePlaying}) => {

const reset = () => {
  resetGame();
  changeGameState();
  history.push('/');
}

return (
  <header className="app-header">
    <Row className="row-title">
      <Column small={12}>
        <h1 className="app-title">Truco!</h1>
      </Column>
    </Row>
    <Row className="row-menu">
      <Column small={6}>
        <BreadCrumb />
      </Column>
      <Column small={6}>
        {
          gamePlaying && <Button color={Colors.ALERT} size={Sizes.SMALL} onClick={() => reset()}>Reiniciar Juego</Button>
        }
      </Column>
    </Row>
  </header>
)};

const { func, string, bool } = PropTypes;

Header.propTypes = {
  resetGame: func,
  changeGameState: func.isRequired,
  gamePlaying: bool.isRequired,
};

export default Header;
