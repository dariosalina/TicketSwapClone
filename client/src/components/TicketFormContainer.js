import React from "react";
import { connect } from "react-redux";
import { createTicket } from "../actions/tickets";
import TicketForm from "./TicketForm";

class CreateTicketFormContainer extends React.PureComponent {
  state = {
    // id: "",
    picture: "",
    price: "",
    description: "",
    event_id: ""
    // user_id: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.setState({
      // id: "",
      picture: "",
      price: "",
      description: "",
      event_id: ""
      // user_id: ""
    });
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
