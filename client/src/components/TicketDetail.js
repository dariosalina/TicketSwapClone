import React from "react";
import { loadTicket } from "../actions/tickets";
import { connect } from "react-redux";
// import {Link} from 'react-router-dom'

class TicketDetail extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadTicket(id);
    
  }

//   renderTicketList(ticket){
//     return (
//       <li key={ticket.id}>
//         <p className="title">
//         <Link to={`tickets/${ticket.id}`}>
//          {/* tickets img */}
//          </Link></p>
//          <p>{ticket.description}</p>
//       </li>
//     );
//   }

  render() {
    
    

    return (

      // event information to be added! move info from list to here and display
      <div>Detail
        {/* {!Tickets && "Loading"}
        {Tickets && <ul>{Tickets.map(this.renderTicketList)}</ul>} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default connect(
  mapStateToProps,
  { loadTicket }
)(TicketDetail);

