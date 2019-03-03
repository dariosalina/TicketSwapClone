import { EVENT_FETCHED, CREATE_EVENT } from "../actions/events";

export default function(state = null, action) {
  switch (action.type) {
    case EVENT_FETCHED:
      return action.event;
    case CREATE_EVENT:
      return [...state, action.event];

    default:
      return state;
  }
}
