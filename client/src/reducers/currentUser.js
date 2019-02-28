import {LOGIN_SUCCESS} from '../actions/auth'

export default function (state = null, action) {
  if (action.type === LOGIN_SUCCESS) return action.jwt
  return state
}