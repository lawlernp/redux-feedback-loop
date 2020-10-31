import React, { Component } from "react";
// import axios from 'axios';
import { connect } from "react-redux";
import "../App/App.css";

class Feels extends Component {

    componentDidMount = () => {

    }

  nextPage = (event) => {
    event.preventDefault();
    const feeling = document.getElementsByName("feeling");

    for (let i = 0; i < feeling.length; i++) {
    if (feeling[i].checked) {
            this.props.dispatch(
                {type: 'FEELINGS', payload: feeling[i].value}
            );
        break;
    }
    }

    console.log("check");
    // this will happen this weekend
    this.props.history.push("/understanding");
  };

  render() {
    return (
      <>
        <div className="pageNumber">1 of 4 pages</div>
        {/* box goes here */}
        <div>
          How are you feeling today?
          <form onSubmit={this.nextPage}>
            <input type="radio" id="1" name="feeling" value="1" required />
            <label htmlFor="1">1</label>
            <input type="radio" id="2" name="feeling" value="2" />
            <label htmlFor="2">2</label>
            <input type="radio" id="3" name="feeling" value="3" />
            <label htmlFor="3">3</label>
            <input type="radio" id="4" name="feeling" value="4" />
            <label htmlFor="4">4</label>
            <input type="radio" id="5" name="feeling" value="5" />
            <label htmlFor="5">5</label>
            <button type="submit" value="Next">Submit</button>
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
export default connect(putReduxStateOnProps)(Feels);
