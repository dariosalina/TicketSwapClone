import { TICKET_FETCHED, ADD_TICKET } from "../actions/tickets";

export default function(state = [], action) {
  switch (action.type) {
    case TICKET_FETCHED:
      return action.ticket;
    case ADD_TICKET:
      return [...state, action.ticket];
    default:
      return state;
  }
}
