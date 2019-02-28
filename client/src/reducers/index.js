import {combineReducers} from 'redux'
import events from './events'
import tickets from './tickets'
import ticket from './ticket'
import event from './event'
import comments from './comments'

export default combineReducers({
  events,
  tickets,
  ticket,
  event,
  comments
})