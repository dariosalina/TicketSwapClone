import React from "react";
import { loadTicket } from '../actions/tickets';
import {loadComments} from '../actions/comments'
import { connect } from "react-redux";


class TicketDetail extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadTicket(id)
    this.props.loadComments()
  }

  render() {
    const Ticket = this.props.ticket
    
    return (

      // event information to be added! move info from list to here and display
      <div>
        <h1>Details:</h1>
        {!Ticket && "Loading"}
        {Ticket && <span>
        {/* <h3>{Ticket.event.name}</h3> */}
        <p>{Ticket.description}</p>
        <p>{Ticket.price}</p>
        <img alt={'ticket'} src={Ticket.picture} width={100}/>
          {/* <p>{Ticket.comments.map(comment =><p></p> )}</p> */}
          <p>Sold by:</p>

        </span>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ticket: state.ticket,
  comments: state.comments
});

export default connect(
  mapStateToProps,
  { loadTicket, loadComments }
)(TicketDetail);

