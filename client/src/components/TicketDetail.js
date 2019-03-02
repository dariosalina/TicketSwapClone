import React from "react";
import {
  loadTicket,
  loadTickets,
  loadAllTicketsForEvent
} from "../actions/tickets";
// import { loadComments } from "../actions/comments";
import { connect } from "react-redux";
import CommentFormContainer from "./CommentFormContainer";

class TicketDetail extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadTicket(id);
    // this.props.loadComments();
    this.props.loadTickets();
    // this.props.loadAllTicketsForEvent(id);
  }

  // FRAUD LOGIC
  // 1-check how many tickets the author is selling, if only one ticket +10%, i couldnt use circular relations so i have to fetch all tickets and count how many tickets is selling the author of this one

  UserRisk() {
    const Tickets = this.props.tickets;
    const userId = this.props.ticket.user.id;
    const usersIdArray = Tickets.map(ticket => ticket.user.id);
    const ticketsPerAuth = usersIdArray.filter(x => x === userId);
    console.log(ticketsPerAuth.length);
    if (ticketsPerAuth.length === 1) {
      return 10;
    }
    return 0;
  }
  // 2- check the average price for the tickets +-X is the percentage higher od lower than the avg, add X% to the risk
  PriceRisk() {
    const Tickets = this.props.tickets;
    if (Tickets !== undefined) {
      const eventId = this.props.ticket.event.id;
      const TicketPrice = this.props.ticket.price;
      const ticketsPerEvent = Tickets.filter(x => x.event.id === eventId);
      const averagePrice =
        ticketsPerEvent
          .map(t => t.price)
          .reduce((price1, price2) => price1 + price2) / ticketsPerEvent.length;

      if (TicketPrice >= averagePrice) {
        // console.log(((TicketPrice - averagePrice) / TicketPrice) * 100);
        return -Math.round(((TicketPrice - averagePrice) / TicketPrice) * 100);
      } else {
        // console.log(((averagePrice - TicketPrice) / averagePrice) * 100);
        return +Math.round(((averagePrice - TicketPrice) / averagePrice) * 100);
      }
    }
  }
  //3- check the time: if creationdate is between 9-17 -10%, else +10%
  CreationTimeRisk() {
    const creationHour = this.props.ticket.creation_hour.slice(11, 13);
    // console.log(creationHour);
    if (creationHour > 9 && creationHour < 17) {
      return -10;
    } else {
      return 10;
    }
  }
  //4-che how many comments, more than 3 add 5%
  NumberCommentsRisk() {
    const commentsNum = this.props.ticket.comments;
    // console.log(commentsNum);
    if (commentsNum > 3) {
      return 5;
    }
    return 0;
  }
  //5 - calculate final risk
  TotalRisk() {
    console.log(this.PriceRisk());
    console.log(this.UserRisk());
    console.log(this.CreationTimeRisk());
    console.log(this.NumberCommentsRisk());

    const totalRisk =
      this.PriceRisk() +
      this.UserRisk() +
      this.CreationTimeRisk() +
      this.NumberCommentsRisk();
    if (totalRisk < 5) {
      return 5;
    } else if (totalRisk > 95) {
      return 95;
    } else {
      return totalRisk;
    }
  }

  render() {
    const Ticket = this.props.ticket;
    const User = this.props.user;
    const Event = this.props.event;
    // const TicketsPerEvent = this.props.ticketsperevent;
    console.log(this.props.tickets);

    return (
      // event information to be added! move info from list to here and display
      <div>
        <h1>Details:</h1>
        {!Ticket && !User && !Event && "Loading"}
        {Ticket && User && Event && (
          <span>
            <h3>Event: {Event.name}</h3>
            <p>{Ticket.description}</p>
            <p>{Ticket.price}</p>
            <p>{this.TotalRisk()}</p>
            <img alt={"ticket"} src={Ticket.picture} width={100} />

            <p>Sold by:{User.first_name}</p>

            <span>
              Comments:
              {Ticket.comments.map(comment => (
                <p key={comment.id}>
                  {comment.comment} by {comment.user.first_name}
                </p>
              ))}
            </span>
            <CommentFormContainer />
          </span>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ticket: state.ticket,
  comments: state.ticket.comments,
  user: state.ticket.user,
  event: state.ticket.event,
  tickets: state.tickets.tickets
});

export default connect(
  mapStateToProps,
  { loadTicket, loadTickets, loadAllTicketsForEvent }
)(TicketDetail);
