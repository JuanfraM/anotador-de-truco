import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import HeaderContainer from '../containers/HeaderContainer';
import history from '.././utils/history';
import routes from '../routes';

const App = ({ authenticated, checked, user }) => (
  <div className="app-container">
    <div className="App">
      <HeaderContainer />
      <ConnectedRouter history={history}>
        { checked && (!authenticated || !user.isEmpty()) &&
          <Switch>
            {routes.map((route, index) =>
              <Route
                {...route}/>
            )}
          </Switch>
        }
      </ConnectedRouter>
    </div>
  </div>
);

const { bool, object } = PropTypes;

App.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired,
  user: object.isRequired
};

const mapStateToProps = state => ({
  checked: state.session.checked,
  authenticated: state.session.authenticated,
  user: state.session.user
});

export default connect(mapStateToProps)(App);
