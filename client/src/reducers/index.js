import {combineReducers} from 'redux'
import events from './events'
import tickets from './tickets'
import ticket from './ticket'

export default combineReducers({
  events,
  tickets,
  ticket
})