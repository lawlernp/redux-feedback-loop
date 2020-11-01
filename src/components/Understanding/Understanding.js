import React, { Component } from "react";
// import axios from 'axios';
import { connect } from "react-redux";
import "../App/App.css";

class Understanding extends Component {
  nextPage = (event) => {
    event.preventDefault();
    const answers = document.getElementsByName("understanding");

    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        this.props.dispatch({
          type: "UNDERSTANDING",
          payload: +answers[i].value,
        });
        break;
      }
    }
    this.props.history.push("/supported");
  };

  render() {
    return (
      <>
        <div className="pageNumber">2 of 4 pages</div>
        <div>
          How well are you understanding the content?
          <form onSubmit={this.nextPage}>
            <input type="radio" id="1" name="understanding" value="1" required />
            <label htmlFor="1">1</label>
            <input type="radio" id="2" name="understanding" value="2" />
            <label htmlFor="2">2</label>
            <input type="radio" id="3" name="understanding" value="3" />
            <label htmlFor="3">3</label>
            <input type="radio" id="4" name="understanding" value="4" />
            <label htmlFor="4">4</label>
            <input type="radio" id="5" name="understanding" value="5" />
            <label htmlFor="5">5</label>
            <button type="submit">
              Next
            </button>
          </form>
        </div>
        <div></div>
      </>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});
export default connect(putReduxStateOnProps)(Understanding);
