import React, { Component } from "react";
// import axios from 'axios';
import { connect } from "react-redux";
import "../App/App.css";

class Understanding extends Component {
  render() {
    return <></>;
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});
export default connect(putReduxStateOnProps)(Understanding);