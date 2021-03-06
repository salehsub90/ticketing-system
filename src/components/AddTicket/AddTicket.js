import React from 'react';
import { connect } from 'react-redux'
import { addTicket } from '../../actions';

const AddTicket = (props) => {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      let input = event.target.userInput.value;
      props.dispatch(addTicket(input));
      event.target.userInput.value = "";
    }}>
      <input type="text" name="userInput"/>
      <button>Submit</button>
    </form>
  );
};

export default connect()(AddTicket);