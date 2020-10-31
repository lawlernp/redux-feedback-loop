import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from "redux-logger";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";


// Logger with default options
const feelings = (state = {}, action) => {
  // TODO - set book list with data from server
  switch (action.type) {
    case "FEELINGS":
      return action.payload;
    default:
      return state;
  }
};


const storeInstance = createStore(
  combineReducers({
    feelings,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    {" "}
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
