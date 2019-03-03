import request from "superagent";
import { isExpired } from "../jwt";
import { logout } from "./signup";

export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_FETCHED = "EVENT_FETCHED";
export const CREATE_EVENT = "CREATE_EVENT";

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
});

const addEvent = event => ({
  type: CREATE_EVENT,
  event
});

export const loadEvents = () => dispatch => {
  request
    .get(`http://localhost:4000/events`)
    .then(response => {
      dispatch(eventsFetched(response.body.events));
    })
    .catch(console.error);
};

export const loadEvent = id => dispatch => {
  request
    .get(`http://localhost:4000/events/${id}`)
    .then(response => {
      console.log(response.body);
      dispatch(eventFetched(response.body));
    })
    .catch(console.error);
};

export const createEvent = event => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;
  event.user = state.currentUser.id;

  delete event.redirect;
  if (isExpired(jwt)) return dispatch(logout());

  request
    .post("http://localhost:4000/events")
    .set("Authorization", `Bearer ${jwt}`)
    .send(event)
    .then(response => dispatch(addEvent(response.body)))
    .catch(err => console.error(err));
};
