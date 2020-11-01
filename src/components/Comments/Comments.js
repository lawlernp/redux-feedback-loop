import React, { Component } from "react";
// import axios from 'axios';
import { connect } from "react-redux";
import "../App/App.css";

class Comments extends Component {

    state = {
        comments: ''
    }

  nextPage = (event) => {
        event.preventDefault();
        this.props.dispatch({
          type: "COMMENTS",
          payload: this.state.comments,
        });
    this.props.history.push("/review");
  };

  handleChange = (event) => {
    event.preventDefault();
        this.setState({
          comments: event.target.value,
        });

  };

  render() {
    return (
      <>
        <div className="pageNumber">4 of 4 pages</div>
        <form onSubmit={this.nextPage}>
          <label htmlFor="comments">Any comments you want to leave?</label>
          <textarea
            onChange={this.handleChange}
            id="comments"
            name="comments"
            rows="4"
            cols="50"
            required
          ></textarea>
          <br />
          <br />
          <button type="submit">Next</button>
        </form>
      </>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});
export default connect(putReduxStateOnProps)(Comments);
