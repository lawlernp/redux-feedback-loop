import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from "redux-logger";
import { combineReducers, applyMiddleware, createStore } from "redux";

// Logger with default options


const reduxStore = createStore(
  combineReducers({
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
