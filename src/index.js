import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './components/App';
import configureStore from './store/configureStore';

registerServiceWorker();

const store = configureStore();

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <div>
        <AppContainer>
          <Component />
        </AppContainer>
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