import React from "react";
import { loadEvent } from "../actions/events";
import { loadAllTicketsForEvent } from "../actions/tickets";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

class EventsDetailTicketList extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadEvent(id);
    this.props.loadAllTicketsForEvent(id);
  }

  renderTicketList(ticket){
    return (
      <li key={ticket.id}>
        <p className="title">
        <Link to={`tickets/${ticket.id}`}>
         {/* tickets img */}
         </Link></p>
         <p>{ticket.description}</p>
      </li>
    );
  }

  render() {
    console.log(this.props.tickets);
    const Tickets = this.props.tickets;

    return (

      // event information to be added! move info from list to here and display
      <div>
        {!Tickets && "Loading"}
        {Tickets && <ul>{Tickets.map(this.renderTicketList)}</ul>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
  tickets: state.tickets
});

export default connect(
  mapStateToProps,
  { loadEvent, loadAllTicketsForEvent }
)(EventsDetailTicketList);
