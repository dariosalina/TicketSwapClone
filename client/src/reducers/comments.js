import { COMMENTS_FETCHED} from "../actions/comments";

export default function(state = [], action) {
  switch (action.type) {
    case COMMENTS_FETCHED:
      return action.comments;
    default:
      return state;
  }
}
