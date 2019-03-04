import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import { Link } from "react-router-dom";

class EventsListContainer extends React.Component {
  state = {
    page: 1
  };
  componentDidMount() {
    this.props.loadEvents(this.state.page);
  }

  render() {
    return (
      <div class="mw6 center">
        {this.props.currentUser && (
          <Link to={`/createevents`}>Create New Event</Link>
        )}
        <EventsList events={this.props.events} />
        {this.state.page > 1 && (
          <button
            onClick={() => {
              this.setState(
                state => ({ page: state.page - 1 }),
                () => this.props.loadEvents(this.state.page)
              );
            }}
          >
            Previous
          </button>
        )}
        {
          <button
            onClick={() => {
              this.setState(
                state => ({ page: state.page + 1 }),
                () => this.props.loadEvents(this.state.page)
              );
            }}
          >
            Next
          </button>
        }
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
