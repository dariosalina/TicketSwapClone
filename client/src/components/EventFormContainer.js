import React from "react";
import { connect } from "react-redux";
import { createEvent } from "../actions/events";
import EventForm from "./EventForm";

class CreateEventFormContainer extends React.PureComponent {
  state = {
    // id: "",
    name: "",
    picture: "",
    dateStart: "",
    dateEnd: "",
    description: ""
    // user_id: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.props);
    console.log(this.props.event);
    this.setState({
      // id: "",
      name: "",
      picture: "",
      dateStart: "",
      dateEnd: "",
      description: ""
      // user_id: ""
    });
    this.props.createEvent(this.state);
  };

  render() {
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

// id: this.props.event ? this.props.event.id : null,
//     name: this.props.event ? this.props.event.name : "",
//     imageUrl: this.props.event ? this.props.event.imageUrl : "",
//     dateStart: this.props.event ? this.props.event.dateStart : "",
//     dateEnd: this.props.event ? this.props.event.dateEnd : "",
//     description: this.props.event ? this.props.event.description : "",
//     user: this.props.user ? this.props.user.id : ""
