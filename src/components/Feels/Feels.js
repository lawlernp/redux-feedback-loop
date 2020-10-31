import React, { Component } from "react";
// import axios from 'axios';
import { connect } from "react-redux";
import "../App/App.css";

class Feels extends Component {
  render() {
    return (
    <>
    test
    </>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});
export default connect(putReduxStateOnProps)(Feels);
