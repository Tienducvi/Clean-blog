import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import HomeHeader from './containers/Header';
import FooterHome from './containers/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomeHeader />
      <App />
      <FooterHome />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
