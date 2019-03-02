import {
  ALL_TICKETS_FETCHED_EVENT,
  ALL_TICKETS_FETCHED
  // TICKET_FETCHED,
  // ADD_TICKET
} from "../actions/tickets";

export default function(state = [], action) {
  switch (action.type) {
    case ALL_TICKETS_FETCHED_EVENT:
      return action.tickets.ticketsEvent;
    case ALL_TICKETS_FETCHED:
      return action.tickets;
    // case TICKET_FETCHED:
    //   return action.ticket;
    // case ADD_TICKET:
    //   return [...state, action.payload];
    default:
      return state;
  }
}
