import { COMMENTS_FETCHED, CREATE_COMMENTS } from "../actions/comments";

export default function(state = [], action) {
  switch (action.type) {
    case COMMENTS_FETCHED:
      return action.comments;
    case CREATE_COMMENTS:
      return [...state, action.comment];
    default:
      return state;
  }
}
