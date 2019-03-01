import React from "react";
import { loadTicket } from "../actions/tickets";
import { loadComments } from "../actions/comments";
import { connect } from "react-redux";

class TicketDetail extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadTicket(id);
    this.props.loadComments();
  }

  render() {
    console.log(this.props.ticket);
    const Ticket = this.props.ticket;
    const User = this.props.user;
    const Event = this.props.event;
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
  event: state.ticket.event
});

export default connect(
  mapStateToProps,
  { loadTicket, loadComments }
)(TicketDetail);
