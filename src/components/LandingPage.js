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
            <fieldset class="large-6 cell selectScore">
              <legend>Elige puntuacion final</legend>
              <input type="radio" name="selectScore" value="30" id="argentinianScore" required />
              <label for="argentinianScore">15 y 15</label>
              <input type="radio" name="selectScore" value="40" id="uruguayanScore" checked/>
              <label for="uruguayanScore">20 y 20</label>
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
};

export default LandingPage;
