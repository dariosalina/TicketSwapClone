import request from "superagent";

export const COMMENTS_FETCHED = "COMMENTS_FETCHED";

const commentsFetched = events => ({
  type: COMMENTS_FETCHED,
  events
});

export const loadComments = () => dispatch => {
  request
    .get(`http://localhost:4000/comments`)
    .then(response => {
      console.log(response.body);
      dispatch(commentsFetched(response.body));
    })
    .catch(console.error);
};
