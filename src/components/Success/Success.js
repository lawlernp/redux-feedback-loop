import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import "../App/App.css";

class Success extends Component {

    handleClick = () => {
        this.props.history.push("/");

    }



  render() {
    return (
      <>
        Thank You!
        <br />
        <br />
        <button onClick={this.handleClick}>Leave New Feedback</button>
      </>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});
export default connect(putReduxStateOnProps)(Success);