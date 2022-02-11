import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import Navigation from './views/Navigation/Navigation';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation>
        <Routing />
      </Navigation>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
