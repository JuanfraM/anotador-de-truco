import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';

import HeaderContainer from '../containers/HeaderContainer';
import history from '.././utils/history';
import routes from '../routes';

const App = () => (
  <div className="app-container">
    <div className="App">
      <HeaderContainer />
      <ConnectedRouter history={history}>
        <Switch>
          {routes.map((route, i) =>
            <Route key={i}
              {...route}/>
          )}
        </Switch>
      </ConnectedRouter>
    </div>
  </div>
);

export default App;
