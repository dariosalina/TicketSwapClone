import React from "react";
import { Link } from "react-router-dom";

export default class EventsList extends React.Component {
  // state = {
  //   page: 0
  // };
  renderEventList(event) {
    return (
      <article>
        <div class="dtc w3">
          <img alt="" src={event.picture} class="db w-100" />
        </div>
        <div class="dtc v-top pl2">
          <h1 class="f6 f5-ns fw6 lh-title black mv0">
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </h1>
          <h2 class="f6 fw4 mt2 mb0 black-60">{event.description}</h2>
          <dl class="mt2 f6">
            <dd class="ml0">From: {event.start_date}</dd>

            <dd class="ml0"> to:{event.end_date}</dd>
          </dl>
        </div>
      </article>
    );
  }

  render() {
    const events = this.props.events;

    // const pageCount = 9 * (this.state.page + 1);
    return (
      <div class="mw6 center">
        <h1>Here you can find a list of events:</h1>
        <h3> Click on the title to see the details</h3>
        {!events && "Loading"}
        {events && (
          <div>
            {events
              // .slice(9 * this.state.page, pageCount)
              .map(this.renderEventList)}
          </div>
        )}
      </div>
    );
  }
}
