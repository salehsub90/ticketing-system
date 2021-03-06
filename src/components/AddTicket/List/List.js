import React from 'react';
import { connect } from 'react-redux';

const List = (props) => {
  return (
    <ul>
      {props.tickets.map((ticket, index) => 
        <li key={index}>{ticket.message}</li>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  tickets: state.tickets.data,
});

export default connect(mapStateToProps)(List);