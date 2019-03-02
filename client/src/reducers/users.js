import { ADD_USER, UPDATE_USER, UPDATE_USERS } from "../actions/signup";
import { USER_LOGOUT } from "../actions/signup";

/*
to be modified, conflict with app logic
The state will contain the users in an object with the game ID as key
*/

export default (state = null, { type, payload }) => {
  switch (type) {
    case USER_LOGOUT:
      return null;

    case ADD_USER:
      return {
        ...state,
        [payload.id]: payload
      };

    case UPDATE_USER:
      return {
        ...state,
        [payload.id]: payload
      };

    case UPDATE_USERS:
      return payload.reduce((users, user) => {
        users[user.id] = user;
        return users;
      }, {});

    default:
      return state;
  }
};
