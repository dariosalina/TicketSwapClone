import {combineReducers} from 'redux'
import events from './events'
import tickets from './tickets'

export default combineReducers({
  events,
  tickets
})