/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { sessionService } from 'redux-react-session';
import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation-float.min.css';
import 'foundation-sites/dist/css/foundation-rtl.min.css';
import 'foundation-sites/dist/css/foundation-prototype.min.css';

import './assets/styles/_settings-foundation.scss';
import './assets/styles/styles.scss';
import App from './components/App';
import configureStore from './store/configureStore';

const store = configureStore();
sessionService.initSessionService(store);

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <div>
        <AppContainer>
          <Component />
        </AppContainer>,
      </div>
    </Provider>,
    document.getElementById('app')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp(App);
  });
}
