import React from "react";
import {
  loadTicket,
  loadTickets,
  loadAllTicketsForEvent
} from "../actions/tickets";

import { connect } from "react-redux";
import CommentFormContainer from "./CommentFormContainer";

class TicketDetail extends React.Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.loadTicket(id);

    this.props.loadTickets();
  }

  // FRAUD LOGIC
  // 1-check how many tickets the author is selling, if only one ticket +10%, i couldnt use circular relations so i have to fetch all tickets and count how many tickets is selling the author of this one

  userRisk() {
    const tickets = this.props.tickets.tickets;

    if (tickets !== undefined) {
      const userId = this.props.ticket.user.id;
      const usersIdArray = tickets.map(ticket => ticket.user.id);
      const ticketsPerAuth = usersIdArray.filter(x => x === userId);

      if (ticketsPerAuth.length === 1) {
        return 10;
      }
      return 0;
    }
  }
  // 2- check the average price for the tickets +-X is the percentage higher od lower than the avg, add X% to the risk
  priceRisk() {
    const tickets = this.props.tickets.tickets;
    if (tickets) {
      const eventId = this.props.ticket.event.id;
      const ticketPrice = this.props.ticket.price;
      const ticketsPerEvent = tickets.filter(x => x.event.id === eventId);
      const averagePrice =
        ticketsPerEvent
          .map(t => t.price)
          .reduce((price1, price2) => price1 + price2) / ticketsPerEvent.length;

      if (ticketPrice >= averagePrice) {
        return -Math.round(((ticketPrice - averagePrice) / ticketPrice) * 100);
      } else {
        return +Math.round(((averagePrice - ticketPrice) / averagePrice) * 100);
      }
    }
  }
  //3- check the time: if creationdate is between 9-17 -10%, else +10%
  creationTimeRisk() {
    const ticket = this.props.ticket;
    if (ticket) {
      const creationHour = ticket.creation_hour.slice(11, 13);
      if (creationHour > 9 && creationHour < 17) {
        return -10;
      } else {
        return 10;
      }
    }
  }
  //4-check how many comments, more than 3 add 5%
  numberCommentsRisk() {
    const commentsNum = this.props.ticket.comments;

    if (commentsNum.length >= 3) {
      return 5;
    }
    return 0;
  }
  //5 - calculate final risk
  totalRisk() {
    if (this.props.ticket !== undefined) {
      const totalRisk =
        this.priceRisk() +
        this.userRisk() +
        this.creationTimeRisk() +
        this.numberCommentsRisk();

      if (totalRisk < 5) {
        return 5;
      } else if (totalRisk > 95) {
        return 95;
      } else {
        return totalRisk;
      }
    }
  }
  //6- change color
  color() {
    const risk = this.totalRisk();

    if (risk <= 33) {
      return "green";
    } else if (risk > 33 && risk <= 70) {
      return "yellow";
    } else {
      return "red";
    }
  }

  render() {
    const ticket = this.props.ticket;
    const user = this.props.user;
    const event = this.props.event;

    return (
      <div class="mw6 center">
        <h1>Details:</h1>
        {!ticket && !user && !event && "Loading"}

        {ticket && user && event && (
          <span>
            <article>
              <div class="dtc w3">
                <img alt={"ticket"} src={ticket.picture} class="db w-200" />
              </div>
              <div class="dtc v-top pl2">
                <h1 class="f6 f5-ns fw6 lh-title black mv0">
                  Event: {event.name}{" "}
                </h1>
                <h2 class="f6 fw4 mt2 mb0 black-60">{ticket.description}</h2>
                <dl class="mt2 f6">
                  <dd class="ml0">{ticket.price} euro</dd>
                  <dd class="ml0">Sold by: {user.first_name}</dd>
                  <dd class={`ml10 ${this.color()}`}> {this.totalRisk()}%</dd>
                </dl>
              </div>
            </article>

            <span class="mw6 center">
              Comments:
              {ticket.comments.map(comment => (
                <div class="dtc v-mid pl3" key={comment.id}>
                  <h1 class="f6 f5-ns fw6 lh-title black mv0">
                    {comment.comment}
                  </h1>
                  <h2 class="f6 fw4 mt0 mb0 black-60">
                    by {comment.user.first_name}
                  </h2>
                </div>
              ))}
            </span>
            {this.props.currentUser && <CommentFormContainer />}
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
  tickets: state.tickets,
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { loadTicket, loadTickets, loadAllTicketsForEvent }
)(TicketDetail);
