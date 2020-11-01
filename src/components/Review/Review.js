import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "../App/App.css";

class Review extends Component {
  handleClick = () => {
    axios
      .post("/survey", this.props.reduxState)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      this.props.history.push("/success");
  };

  render() {
    return (
      <>
        <h1>Review Your Feedback</h1>

        <div>
          <ul>
            <li>Feelings: {this.props.reduxState.feelings}</li>
            <li>Understanding: {this.props.reduxState.understanding}</li>
            <li>Support: {this.props.reduxState.support}</li>
            <li>Comments: {this.props.reduxState.comments}</li>
          </ul>
        </div>
        <button onClick={this.handleClick}>Submit</button>
      </>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});
export default connect(putReduxStateOnProps)(Review);