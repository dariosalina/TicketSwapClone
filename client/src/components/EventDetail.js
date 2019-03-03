import React from "react";
import { loadEvent } from "../actions/events";
import { loadAllTicketsForEvent } from "../actions/tickets";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CreateTicketFormContainer from "./TicketFormContainer";

class EventsDetailTicketList extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadEvent(id);
    this.props.loadAllTicketsForEvent(id);
  }

  renderTicketList(ticket, event) {
    return (
      <li key={ticket.id}>
        <Link to={`tickets/${ticket.id}`}>
          <p className="title">{event.name}</p>
          <p>{ticket.description}</p>
        </Link>
      </li>
    );
  }

  render() {
    const Event = this.props.event;
    const Tickets = this.props.tickets;

    return (
      // event information to be added! move info from list to here and display
      <div>
        {!Event && "Loading..."}
        {Event && <h1>{Event.name}</h1>}
        {this.props.currentUser && (
          <Link to={`/createtickets`}>Create New Tickett</Link>
        )}

        {!Tickets && "Loading..."}

        {Tickets && <ul>{Tickets.map(this.renderTicketList)}</ul>}
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
