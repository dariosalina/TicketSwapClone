import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import { Link } from "react-router-dom";

class EventsListContainer extends React.Component {
  componentDidMount() {
    const skip = 1;
    this.props.loadEvents(skip);
  }

  render() {
    return (
      <div class="mw6 center">
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
