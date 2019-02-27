import {TICKET_FETCHED} from '../actions/tickets'

export default function ( state=[], action) {
    switch (action.type){
        case TICKET_FETCHED:
        console.log(action)
        return action;
    default:
return state;
}
}