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
      <div>
        {this.props.currentUser && (
          <EventForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { createEvent }
)(CreateEventFormContainer);
