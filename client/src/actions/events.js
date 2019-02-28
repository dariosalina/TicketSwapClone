import request from "superagent";

export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_FETCHED = 'EVENT_FETCHED'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

const eventFetched = event => ({
    type: EVENT_FETCHED,
    event
  })

export const loadEvents = () => (dispatch) => {

  request
  .get(`http://localhost:4000/events`)
    .then(response => {
      dispatch(eventsFetched(response.body.events));
   })
    .catch(console.error);
};

export const loadEvent = (id) => (dispatch) => {
  request
  .get(`http://localhost:4000/events/${id}`)
    .then(response => {
     dispatch(eventFetched(response.body))
    })
    .catch(console.error)
}

