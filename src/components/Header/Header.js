import React from 'react';
import PropTypes from 'prop-types';
import { Column, Row, Breadcrumbs, BreadcrumbItem, Button, Colors } from 'react-foundation';

import BreadCrumb from './BreadCrumb';
import './Header.scss';

const Header = ({resetGame}) => {

const reset = () => {
  resetGame();
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
        <Button color={Colors.ALERT} onClick={() => reset()}>Reiniciar Juego</Button>
      </Column>
    </Row>
  </header>
)};

const { func } = PropTypes;

Header.propTypes = {
  resetGame: func,
};

export default Header;
