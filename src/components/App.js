import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import { Switch, Route} from 'react-router-dom';

import history from '../utils/history';
import routes from '../routes';

const App = () => (
  <div className="app-container">
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map((route, index) =>
          <Route
            key={`route${index}`}
            {...route}
          />
        )}
      </Switch>
    </ConnectedRouter>
  </div>
);

export default (App);