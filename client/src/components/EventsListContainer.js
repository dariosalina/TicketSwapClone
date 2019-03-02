import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import CreateEventFormContainer from "./EventFormContainer";

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    return (
      <div>
        <EventsList events={this.props.events} />

        {this.props.currentUser && <CreateEventFormContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { loadEvents }
)(EventsListContainer);
