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
    console.log(this.props)
    const Ticket = this.props.ticket
    const User = this.props.user
    return (

      // event information to be added! move info from list to here and display
      <div>
        <h1>Details:</h1>
        {!Ticket && !User && "Loading"}
        {Ticket && User && <span>
        {/* <h3>{Ticket.event.name}</h3> */}
        <p>{Ticket.description}</p>
        <p>{Ticket.price}</p>
        <img alt={'ticket'} src={Ticket.picture} width={100}/>
        
          <p>Sold by:{User.first_name}</p>
          

  {/* <p>{Ticket.comments.map(comment =><p></p> )}</p> */}

        </span>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ticket: state.ticket,
  comments: state.comments,
  user: state.ticket.user
});

export default connect(
  mapStateToProps,
  { loadTicket, loadComments }
)(TicketDetail);

