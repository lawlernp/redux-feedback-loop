import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
// import { connect } from "react-redux";
import Feels from "../Feels/Feels";
import Understanding from "../Understanding/Understanding";
import { HashRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
        </div>
        <Route exact path="/" component={Feels} />
        <Route exact path="/understanding" component={Understanding} />
      </Router>
    );
  }
}

export default App;
