import { EVENTS_FETCHED } from "../actions/events";

export default function(state = [], action) {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events;
    // case EVENT_FETCHED:
    //   console.log(action.event);
    //   return action.event;
    // case CREATE_EVENT:
    //   return [...state, action.event];
    default:
      return state;
  }
}
