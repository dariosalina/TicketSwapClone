import { combineReducers } from "redux";
import events from "./events";
import tickets from "./tickets";
import comments from "./comments";
import users from "./users";
import login from "./login";
import currentUser from "./currentUser";
import signup from "./signup";

export default combineReducers({
  events,
  tickets,
  comments,
  login,
  signup,
  currentUser,
  users
});
