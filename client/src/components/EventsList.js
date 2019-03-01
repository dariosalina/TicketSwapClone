import React from "react";
import { Link } from "react-router-dom";

export default class EventsList extends React.Component {
  state = {
    page: 0
  };
  renderEventList(event) {
    return (
      <li key={event.id}>
        <p className="title">
          <Link to={`/events/${event.id}`}>{event.name}</Link>
        </p>
        <p>{event.description}</p>
        <p>
          From: {event.start_date} to: {event.end_date}
        </p>
      </li>
    );
  }

  render() {
    const Events = this.props.events;
    const pageCount = 9 * (this.state.page + 1);
    return (
      <div>
        <h1>Here you can find a list of events:</h1>
        <h3> Click on the title to see the details</h3>
        {!Events && "Loading"}
        {Events && (
          <ul>
            {Events.slice(9 * this.state.page, pageCount)
              .filter(x => new Date(x.end_date) > new Date())
              .map(this.renderEventList)}
          </ul>
        )}

        {Events.length > pageCount && (
          <button onClick={() => this.setState(s => ({ page: s.page + 1 }))}>
            Next
          </button>
        )}
        {!!this.state.page && (
          <button onClick={() => this.setState(s => ({ page: s.page - 1 }))}>
            Previous
          </button>
        )}
      </div>
    );
  }
}
