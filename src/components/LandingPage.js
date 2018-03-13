import React, { Component } from 'react';
import { Column, Row, Colors, Button, Sizes } from 'react-foundation';
import PropTypes from 'prop-types';

import logo from '../assets/logo.svg';
import '../containers/LandingPage.scss';
import history from '../utils/history';

class LandingPage extends Component {
  constructor() {
    super();

    this.state = {
      ellos: 'Ellos',
      nosotros: 'Nosotros'
    };
    this.onClickStart = this.onClickStart.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateInputValueEllos = this.updateInputValueEllos.bind(this);
    this.updateInputValueNosotros = this.updateInputValueNosotros.bind(this);
  }

  componentDidMount() {
    const { ellos, nosotros } = this.props;
    this.setState({
      ellos,
      nosotros
    });
  }

  onClickStart() {
    history.push('/home');
  }

  updateInputValueEllos(evt) {
    this.setState({
      ellos: evt.target.value
    });
  }

  updateInputValueNosotros(evt) {
    this.setState({
      nosotros: evt.target.value
    });
  }

  onSubmit() {
    this.props.changeNames(this.state);
    history.push('/home');
  }

  render() {
    return (
      <Row className="display selectNamesRow">
        <Column medium={6}  offsetOnMedium={3}>
          <form onSubmit={this.onSubmit}>
            <div className="grid-container">
              <div className="grid-x grid-padding-x">
                <div className="medium-6 cell">
                  <label>Nombre:
                    <input
                      type="text"
                      value={this.state.ellos}
                      onChange={evt => this.updateInputValueEllos(evt)}
                    />
                  </label>
                </div>
                <div className="medium-6 cell">
                  <label>Nombre:
                    <input
                      type="text"
                      value={this.state.nosotros}
                      onChange={evt => this.updateInputValueNosotros(evt)}
                    />
                  </label>
                </div>
              </div>
            </div>
             <input type="submit" className="button" value="Start" />
          </form>
        </Column>
      </Row>
    );
  }
}

const { string, func } = PropTypes;

LandingPage.propTypes = {
  ellos: string.isRequired,
  nosotros: string.isRequired,
  changeNames: func.isRequired,
};

export default LandingPage;
