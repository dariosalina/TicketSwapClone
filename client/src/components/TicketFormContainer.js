import React from "react";
import { connect } from "react-redux";
import { createTicket } from "../actions/tickets";
import TicketForm from "./TicketForm";

class CreateTicketFormContainer extends React.PureComponent {
  state = {};

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.setState({});
    this.props.createTicket(this.state);
  };

  render() {
    return (
      <TicketForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createTicket }
)(CreateTicketFormContainer);
