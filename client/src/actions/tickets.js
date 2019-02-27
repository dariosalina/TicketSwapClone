import request from "superagent";

export const ALL_TICKETS_FETCHED = "ALL_TICKETS_FETCHED";
export const TICKET_FETCHED = 'TICKET_FETCHED'


const ticketsFetched = tickets =>({
    type: ALL_TICKETS_FETCHED,
    tickets
})

export const loadAllTicketsForEvent = (eventId) => (dispatch) => {
    request
    .get(`http://localhost:4000/events/tickets/${eventId}`)
    .then(response => {
        dispatch(ticketsFetched(response.body));
     })
      .catch(console.error);
}