import { EVENTS_FETCHED } from "../actions/events";

export default function(state = [], action) {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events;
    default:
      return state;
  }
}
