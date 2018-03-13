import React from 'react';
import PropTypes from 'prop-types';
import { Column, Row, Breadcrumbs, BreadcrumbItem, Button, Colors } from 'react-foundation';

import BreadCrumb from './BreadCrumb';
import './Header.scss';

const Header = ({resetGame, changeGameState, gamePlaying}) => {

const reset = () => {
  resetGame();
  changeGameState();
}

return (
  <header className="app-header">
    <Row className="row-title">
      <Column medium={12}>
        <h1 className="app-title">Truco!</h1>
      </Column>
    </Row>
    <Row className="row-menu">
      <Column medium={4}>
        <BreadCrumb />
      </Column>
      <Column medium={4}>
        {
          gamePlaying && <Button color={Colors.ALERT} onClick={() => reset()}>Reiniciar Juego</Button>
        }
      </Column>
    </Row>
  </header>
)};

const { func, string } = PropTypes;

Header.propTypes = {
  resetGame: func,
  changeGameState: func.isRequired,
  gamePlaying: string.isRequired,
};

export default Header;
