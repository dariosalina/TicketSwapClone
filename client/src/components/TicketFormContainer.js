import React from "react";
import { connect } from "react-redux";
import { createTicket } from "../actions/tickets";
import TicketForm from "./TicketForm";
import { Redirect } from "react-router-dom";

class CreateTicketFormContainer extends React.PureComponent {
  state = {
    redirect: false
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.setState({
      redirect: true
    });
    this.props.createTicket(this.state);
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/events" />;
    }
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
