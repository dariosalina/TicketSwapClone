import {
  ALL_TICKETS_FETCHED_EVENT,
  ALL_TICKETS_FETCHED
} from "../actions/tickets";

export default function(state = [], action) {
  switch (action.type) {
    case ALL_TICKETS_FETCHED_EVENT:
      return action.tickets.ticketsEvent;
    case ALL_TICKETS_FETCHED:
      return action.tickets;
    default:
      return state;
  }
}
