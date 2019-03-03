import React from "react";
import { connect } from "react-redux";
import { createEvent } from "../actions/events";
import EventForm from "./EventForm";
import { Redirect } from "react-router-dom";

class CreateEventFormContainer extends React.PureComponent {
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
    this.props.createEvent(this.state);
    this.setState({
      redirect: true
    });
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/events" />;
    }
    return (
      <EventForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createEvent }
)(CreateEventFormContainer);
