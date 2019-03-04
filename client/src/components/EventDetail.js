import React from "react";
import { loadEvent } from "../actions/events";
import { loadAllTicketsForEvent } from "../actions/tickets";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class EventsDetailTicketList extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadEvent(id);
    this.props.loadAllTicketsForEvent(id);
  }

  renderTicketList(ticket, event) {
    return (
      <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
        <div class="dtc w2 w3-ns v-mid">
          <img
            src={ticket.picture}
            class="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
          />
        </div>
        <div class="dtc v-mid pl3">
          <Link to={`tickets/${ticket.id}`}>
            <h1 class="f6 f5-ns fw6 lh-title black mv0">{event.name}</h1>
            <h1 class="f6 f5-ns fw6 lh-title black mv0">{ticket.user.name}</h1>
            <h2 class="f6 fw4 mt0 mb0 black-60">{ticket.description}</h2>
          </Link>
        </div>
        <div class="dtc v-mid">
          <h1 class="f6 f5-ns fw6 lh-title black mv0">{ticket.price} </h1>
        </div>
      </article>
    );
  }

  render() {
    const Event = this.props.event;
    const Tickets = this.props.tickets;

    return (
      // event information to be added! move info from list to here and display
      <div class="mw6 center">
        {!Event && "Loading..."}
        {Event && <h1>{Event.name}</h1>}
        {this.props.currentUser && (
          <Link to={`/createtickets`}>Create New Ticket</Link>
        )}

        {!Tickets && "Loading..."}

        {/* this conditional rendering doesn't work properly */}
        {Tickets && (
          <main class="mw6 center">{Tickets.map(this.renderTicketList)}</main>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
  tickets: state.tickets,
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { loadEvent, loadAllTicketsForEvent }
)(EventsDetailTicketList);
