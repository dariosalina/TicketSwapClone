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
  //this to check if there are events already fetched
//   if (getState().events) return;

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


// export const ADVERT_CREATE = 'ADVERT_CREATE'



// const createAdvertSuccess = advert => ({
//   type: ADVERT_CREATE,
//   advert
// })

// export const createAdvert = (data) => dispatch => {
//   request
//     .post(`http://localhost:4000/adverts`)
//     .send(data)
//     .then(response => {
//       dispatch(createAdvertSuccess(response.body))
//     })
//     .catch(console.error)
// }