import {ALL_TICKETS_FETCHED} from '../actions/tickets'

export default function ( state=[], action) {
    switch (action.type) {
        case ALL_TICKETS_FETCHED:
        return action.tickets.ticketsEvent;
    default:
    return state;
    }
}