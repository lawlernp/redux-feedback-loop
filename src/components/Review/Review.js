import React, { Component } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import "../App/App.css";

class Review extends Component {

      componentDidMount = () => {
      axios.post('/survey', this.props.reduxState).then((response) => {
      console.log(response.data);
      }).catch((error) => {
      console.log(error);
      })
    }






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
      </>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});
export default connect(putReduxStateOnProps)(Review);


// ## THE REVIEW COMPONENT

// The last step of the process will allow the user to review their feedback. Users are not able to change their input on this step or go back for Base Mode. 

// ![comments](wireframes/review-active.png)

// ## SUBMIT THE FEEDBACK

// The `Review` step needs to have a submit button which will be clicked on to actually submit the completed feedback to the server.

// When the submit button is clicked, save the submission in the database. The user should see a submission success page. They can then click the button to take a new survey, which needs to reset all the data and go back to the first step.