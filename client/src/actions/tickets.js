import request from "superagent";

export const ALL_TICKETS_FETCHED = "ALL_TICKETS_FETCHED";
export const TICKET_FETCHED = "TICKET_FETCHED";
export const ADD_TICKET = "ADD_TICKET";

const ticketsFetched = tickets => ({
  type: ALL_TICKETS_FETCHED,
  tickets
});

const ticketFetched = ticket => ({
  type: TICKET_FETCHED,
  ticket
});

const addTicket = ticket => ({
  type: ADD_TICKET,
  ticket
});

export const loadAllTicketsForEvent = eventId => dispatch => {
  request
    .get(`http://localhost:4000/events/tickets/${eventId}`)
    .then(response => {
      dispatch(ticketsFetched(response.body));
    })
    .catch(console.error);
};

export const loadTicket = id => dispatch => {
  request
    .get(`http://localhost:4000/tickets/${id}`)
    .then(response => {
      dispatch(ticketFetched(response.body));
    })
    .catch(console.error);
};

export const createTicket = ticket => (dispatch, getState) => {
  request
    .post("http://localhost:4000/events")
    // .set("Authorization", `Bearer ${jwt}`)
    .send(ticket)
    .then(response => dispatch(addTicket(response.body)))
    .catch(err => console.error(err));
};
