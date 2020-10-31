import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from "redux-logger";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";


const feelings = (state = 0, action) => {
  switch (action.type) {
    case "FEELINGS":
      return action.payload;
    default:
      return state;
  }
};

const understanding = (state = 0, action) => {
  switch (action.type) {
    case "UNDERSTANDING":
      return action.payload;
    default:
      return state;
  }
};


const storeInstance = createStore(
  combineReducers({
    feelings,
    understanding,
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
