import React, { Component } from "react";
// import axios from 'axios';
import { connect } from "react-redux";
import "../App/App.css";

class Support extends Component {
  nextPage = (event) => {
    event.preventDefault();
    const answers = document.getElementsByName("supported");

    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        this.props.dispatch({
          type: "SUPPORT",
          payload: +answers[i].value,
        });
        break;
      }
    }
    this.props.history.push("/comments");
  };

  render() {
    return (
      <>
        <div className="pageNumber">3 of 4 pages</div>
        <div>
          How well are you being supported?
          <form onSubmit={this.nextPage}>
            <input type="radio" id="1" name="supported" value="1" required />
            <label htmlFor="1">1</label>
            <input type="radio" id="2" name="supported" value="2" />
            <label htmlFor="2">2</label>
            <input type="radio" id="3" name="supported" value="3" />
            <label htmlFor="3">3</label>
            <input type="radio" id="4" name="supported" value="4" />
            <label htmlFor="4">4</label>
            <input type="radio" id="5" name="supported" value="5" />
            <label htmlFor="5">5</label>
            <button type="submit">Next</button>
            <p>5 = highest</p>
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
export default connect(putReduxStateOnProps)(Support);
