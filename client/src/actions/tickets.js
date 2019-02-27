import request from "superagent";

export const ALL_TICKETS_FETCHED = "ALL_TICKETS_FETCHED";
export const TICKET_FETCHED = 'TICKET_FETCHED'


const ticketsFetched = tickets =>({
    type: ALL_TICKETS_FETCHED,
    tickets
})

const ticketFetched = ticket => ({
    type: TICKET_FETCHED,
    ticket
})

export const loadAllTicketsForEvent = (eventId) => (dispatch) => {
    request
    .get(`http://localhost:4000/events/tickets/${eventId}`)
    .then(response => {
        dispatch(ticketsFetched(response.body));
     })
      .catch(console.error);
}

export const loadTicket = (id) => (dispatch) => {
    request
    .get(`http://localhost:4000/tickets/${id}`)
      .then(response => {
          console.log(response.body)
        dispatch(ticketFetched(response.body))
      })
      .catch(console.error)
  }