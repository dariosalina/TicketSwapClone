import request from "superagent";
import { isExpired } from "../jwt";
import { logout } from "./signup";

export const COMMENTS_FETCHED = "COMMENTS_FETCHED";
export const CREATE_COMMENTS = "CREATE_COMMENTS";

const commentsFetched = comments => ({
  type: COMMENTS_FETCHED,
  comments
});

const addComment = comment => ({
  type: CREATE_COMMENTS,
  comment
});

export const loadComments = ticket_id => dispatch => {
  request
    .get(`http://localhost:4000/comments/${ticket_id}`)
    .then(response => {
      console.log(response.body);
      dispatch(commentsFetched(response.body));
    })
    .catch(console.error);
};

export const createComment = comment => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;
  comment.user = state.currentUser.id;
  comment.ticket = state.ticket.id;
  if (isExpired(jwt)) return dispatch(logout());

  request
    .post("http://localhost:4000/comments")
    .set("Authorization", `Bearer ${jwt}`)
    .send(comment)
    .then(response => dispatch(addComment(response.body)))
    .catch(err => console.error(err));
};
