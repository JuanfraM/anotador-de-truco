import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/components/LandingPage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Home Page</h1>
        </header>
        <p className="App-intro">
          This is the Home Page
        </p>
      </div>
    );
  }
}

export default HomePage;
