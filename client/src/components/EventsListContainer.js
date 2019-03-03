import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import CreateEventFormContainer from "./EventFormContainer";
import { Link } from "react-router-dom";

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    return (
      <div>
        {this.props.currentUser && (
          <Link to={`/createevents`}>Create New Event</Link>
        )}
        <EventsList events={this.props.events} />
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
