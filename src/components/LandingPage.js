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
      nosotros: 'Nosotros',
      finalScore: 40,
    };

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

  updateValueFinalScore(evt) {
    this.setState({
      finalScore: Number(evt.target.value)
    });
  }

  onSubmit() {
    this.props.changeNames(this.state);
    this.props.updateFinalScore(this.state.finalScore);
    if (!this.props.gamePlaying) {
      this.props.changeGameState();
    }
    history.push('/home');
  }

  render() {
    return (
      <Row className="display selectSettings">
        <Column medium={6}  offsetOnMedium={3}>
          <form onSubmit={this.onSubmit}>
            <label>Elige Nombres</label>
            <div className="grid-container">
              <div className="grid-x grid-padding-x">
                <div className="medium-6 cell">
                  <input
                    type="text"
                    value={this.state.ellos}
                    onChange={evt => this.updateInputValueEllos(evt)}
                  />
                </div>
                <div className="medium-6 cell">
                  <input
                    type="text"
                    value={this.state.nosotros}
                    onChange={evt => this.updateInputValueNosotros(evt)}
                  />
                </div>
              </div>
            </div>
            <fieldset className="large-6 cell selectScore">
              <legend>Elige puntuación final</legend>
              <input
                type="radio"
                name="selectScore"
                value="30"
                id="argentinianScore"
                onChange={evt => this.updateValueFinalScore(evt)}
                required
              />
            <label htmlFor="argentinianScore">30</label>
              <input
                type="radio"
                name="selectScore"
                value="40"
                id="uruguayanScore"
                onChange={evt => this.updateValueFinalScore(evt)}
                defaultChecked/>
              <label htmlFor="uruguayanScore">40</label>
            </fieldset>
             <input
               type="submit"
               className="button"
               value={this.props.gamePlaying ? "Seguir Jugando" : "Comenzar"}
             />
          </form>
        </Column>
      </Row>
    );
  }
}

const { string, func, bool } = PropTypes;

LandingPage.propTypes = {
  ellos: string.isRequired,
  nosotros: string.isRequired,
  changeNames: func.isRequired,
  gamePlaying: bool.isRequired,
  changeGameState: func.isRequired,
  updateFinalScore: func.isRequired,
};

export default LandingPage;
